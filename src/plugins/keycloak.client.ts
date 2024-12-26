import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import Keycloak from 'keycloak-js';
import axios from 'axios';
import { recoverUser } from '../../src/core/usecases/user/updateUser';
import { useCartStore } from '../../src/store/cartStore';
import { useProductStore } from '../../src/store/productStore';
import { useProductGateway } from '../../gateways/productGateway';
import { listMyOrder } from '../../src/core/usecases/list-my-orders/listMyOrders';
import { myOrderGateway } from '../../gateways/myOrderGateway';

export default defineNuxtPlugin((nuxtApp) => {
  const { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID } = useRuntimeConfig().public;

  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  const cartStore = useCartStore();

  const keycloakReady = (async () => {
    try {
      const authenticated = await keycloak.init({
        checkLoginIframe: true,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}`, // Créez cette page si elle n'existe pas
      });

      if (authenticated) {
        const accessToken = keycloak.token;

        // Récupération du profil utilisateur
        try {
          const userProfile = await axios.get(`https://ecommerce-backend-production.admin-a5f.workers.dev/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          recoverUser(userProfile.data);
        } catch (error) {
          console.error('Erreur lors de la récupération du profil utilisateur1 :', error);
        }

        listMyOrder(myOrderGateway(), accessToken);

        // **Restaurer le panier**
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          const productStore = useProductStore();
          const productGateway = useProductGateway();

          for (const productUuid of cartItems.items) {
            try {
              cartStore.add(productUuid);
              const product = await productGateway.getByUuid(productUuid);
              productStore.add(product);
            } catch (error) {
              console.error(`Erreur lors de la récupération ou de l'ajout du produit UUID: ${productUuid}`, error);
            }
          }

          localStorage.removeItem('cart');
        }

        // Rafraîchissement du token
        const intervalId = setInterval(async () => {
          try {
            const refreshed = await keycloak.updateToken(60);
            if (refreshed) {
              console.log('Token rafraîchi');
            }
          } catch (err) {
            console.error('Échec du rafraîchissement du token Keycloak', err);
            clearInterval(intervalId);
          }
        }, 60000);
      } else {
        console.warn('Utilisateur non authentifié');
        // Rediriger ou afficher un message ici
      }
    } catch (err) {
      console.error('Échec de initialisation de Keycloak', err);
      if (err.error === 'login_required') {
        console.log('Connexion requise. Redirection...');
        await keycloak.login();
      }
    }
  })();

  nuxtApp.provide('keycloak', keycloak);
  nuxtApp.provide('keycloakReady', keycloakReady);
});
