import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import Keycloak from 'keycloak-js';
import axios from 'axios';
import { recoverUser } from '../../src/core/usecases/user/updateUser';
import { useCartStore } from '../../src/store/cartStore';
import { useProductStore } from '../../src/store/productStore';
import { useProductGateway } from '../../gateways/productGateway';

export default defineNuxtPlugin((nuxtApp) => {
  const { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, API_BASE_URL } = useRuntimeConfig().public;

  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  const cartStore = useCartStore();

  const keycloakReady = (async () => {
    try {
      const authenticated = await keycloak.init({
        checkLoginIframe: false,
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
          console.error('Erreur lors de la récupération du profil utilisateur :', error);
        }

        // **Restaurer le panier**
        const savedCart = localStorage.getItem('cart');
        console.log('savedCart', savedCart);

        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          console.log('cartItems:', cartItems);

          const productStore = useProductStore();
          const cartStore = useCartStore();
          const productGateway = useProductGateway();

          // Parcourir les UUID et ajouter chaque produit individuellement
          for (const productUuid of cartItems.items) {
            try {
              // Ajouter l'UUID au store du panier
              cartStore.add(productUuid);

              // Récupérer les détails du produit via la gateway
              const product = await productGateway.getByUuid(productUuid);

              // Ajouter le produit au store des produits
              productStore.add(product);
            } catch (error) {
              console.error(`Erreur lors de la récupération ou de l'ajout du produit UUID: ${productUuid}`, error);
            }
          }

          // Supprimer le panier sauvegardé après restauration
          localStorage.removeItem('cart');
        }

        // Rafraîchissement du token
        const intervalId = setInterval(async () => {
          try {
            const refreshed = await keycloak.updateToken(60);
            if (refreshed) {
            }
          } catch (err) {
            console.error('Échec du rafraîchissement du token Keycloak', err);
            clearInterval(intervalId);
          }
        }, 60000);
      }

      return;
    } catch (err) {
      console.error('Échec de initialisation de Keycloak', err);
      throw err;
    }
  })();

  nuxtApp.provide('keycloak', keycloak);
  nuxtApp.provide('keycloakReady', keycloakReady);
});
