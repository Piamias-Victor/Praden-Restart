import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import Keycloak from 'keycloak-js';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Début de l\'initialisation du plugin Keycloak');

  // Accéder aux variables d'environnement via useRuntimeConfig
  const { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID } = useRuntimeConfig().public;
  console.log('Variables d\'environnement :', { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID });

  // Initialiser Keycloak avec les paramètres
  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  console.log('Instance Keycloak créée :', keycloak);

  // Définir une promesse pour l'initialisation de Keycloak
  const keycloakReady = (async () => {
    console.log('Initialisation de Keycloak en cours...');
    try {
      const authenticated = await keycloak.init({
        checkLoginIframe: false, // Désactive le mécanisme iframe pour vérifier l'état de session
      });
      console.log('État d\'authentification après initialisation :', authenticated);

      if (authenticated) {
        console.log('Utilisateur authentifié avec succès');

        // Configurer le rafraîchissement automatique du token
        const intervalId = setInterval(() => {
          console.log('Tentative de rafraîchissement du token...');
          keycloak.updateToken(60).catch((err) => {
            console.error('Échec du rafraîchissement du token', err);
            clearInterval(intervalId);
          });
        }, 60000); // Rafraîchissement toutes les 60 secondes
      }

      return;
    } catch (err) {
      console.error('Échec de l\'initialisation de Keycloak', err);
      throw err;
    }
  })();

  // Fournir keycloak et keycloakReady à Nuxt
  nuxtApp.provide('keycloak', keycloak);
  nuxtApp.provide('keycloakReady', keycloakReady);
  console.log('Keycloak et keycloakReady fournis à Nuxt');
});
