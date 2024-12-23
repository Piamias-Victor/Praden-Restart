import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import Keycloak from 'keycloak-js';
import axios from 'axios';
import { recoverUser } from '../../src/core/usecases/user/updateUser';
import { useCartStore } from '../../src/store/cartStore';

export default defineNuxtPlugin((nuxtApp) => {
  const { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, API_BASE_URL } = useRuntimeConfig().public;

  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  const cartStore = useCartStore();

  console.log('Instance Keycloak créée :', keycloak);

  const keycloakReady = (async () => {
    console.log('Initialisation de Keycloak en cours...');
    try {
      const authenticated = await keycloak.init({
        checkLoginIframe: false,
      });

      if (authenticated) {
        console.log('Utilisateur authentifié avec succès');

        const accessToken = keycloak.token;
        console.log('Token récupéré :', accessToken);

        // Récupération du profil utilisateur
        try {
          const userProfile = await axios.get(`https://ecommerce-backend-production.admin-a5f.workers.dev/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          recoverUser(userProfile.data);
          console.log('Profil utilisateur récupéré :', userProfile.data);
        } catch (error) {
          console.error('Erreur lors de la récupération du profil utilisateur :', error);
        }

        // **Restaurer le panier**
        // const savedCart = localStorage.getItem('cart');
        // if (savedCart) {
        //   const cartItems = JSON.parse(savedCart);
        //   cartStore.restoreCart(cartItems); // Fonction pour ajouter les produits au store du panier
        //   localStorage.removeItem('cart'); // Supprimez le panier sauvegardé après restauration
        //   console.log('Panier restauré depuis le localStorage');
        // }

        // Rafraîchissement du token
        const intervalId = setInterval(async () => {
          try {
            const refreshed = await keycloak.updateToken(60);
            if (refreshed) {
              console.log('Token Keycloak rafraîchi');
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
  console.log('Keycloak et keycloakReady fournis à Nuxt');
});
