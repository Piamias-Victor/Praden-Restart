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
  
  console.log('[Keycloak Plugin] Initialisation avec:', { 
    url: KEYCLOAK_URL, 
    realm: KEYCLOAK_REALM, 
    clientId: KEYCLOAK_CLIENT_ID 
  });

  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  const cartStore = useCartStore();
  
  // Détection si appareil mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Ajouter un écouteur d'événements pour les redirections
  keycloak.onAuthSuccess = () => {
    console.log('[Keycloak] Authentification réussie');
    
    // Récupérer l'URL sauvegardée et les paramètres de recherche
    const savedUrl = localStorage.getItem('redirectAfterLogin');
    const searchParams = localStorage.getItem('searchParams');
    
    console.log('[Keycloak] URL sauvegardée après authentification:', savedUrl);
    console.log('[Keycloak] Paramètres de recherche:', searchParams);
    
    // Si nous avons une URL et des paramètres, et que nous sommes sur mobile
    if (savedUrl && savedUrl.includes('/search') && searchParams && isMobile()) {
      console.log('[Keycloak] Redirection mobile avec paramètres de recherche');
      // Marquer que nous venons juste de nous authentifier
      localStorage.setItem('justAuthenticated', 'true');
      
      // Pour éviter les redirections cycliques, rediriger vers l'URL de base
      const baseUrl = window.location.origin + '/search';
      const finalUrl = baseUrl + '?' + searchParams;
      
      // Utiliser un court délai pour éviter les problèmes de redirection trop rapides
      setTimeout(() => {
        window.location.href = finalUrl;
      }, 300);
    } else if (savedUrl) {
      console.log('[Keycloak] Redirection standard vers:', savedUrl);
      
      // Utiliser un court délai
      setTimeout(() => {
        window.location.href = savedUrl;
      }, 300);
    }
    
    // Nettoyer pour éviter les redirections cycliques
    localStorage.removeItem('redirectAfterLogin');
  };

  keycloak.onAuthError = (error) => {
    console.error('[Keycloak] Erreur d\'authentification:', error);
  };

  keycloak.onTokenExpired = () => {
    console.log('[Keycloak] Token expiré, tentative de rafraîchissement...');
  };

  const keycloakReady = (async () => {
    try {
      // Si nous sommes sur la page silent-check-sso, ne pas initialiser
      if (window.location.pathname === '/silent-check-sso.html') {
        console.log('[Keycloak] Sur la page silent-check-sso, pas d\'initialisation');
        return;
      }

      // Récupérer l'URL sauvegardée pour la redirection
      const redirectUrl = localStorage.getItem('redirectAfterLogin');
      console.log('[Keycloak] URL de redirection sauvegardée:', redirectUrl);
      console.log('[Keycloak] URL actuelle:', window.location.href);
      
      console.log('[Keycloak] Tentative d\'initialisation...');
      const authenticated = await keycloak.init({
        checkLoginIframe: false, // Désactiver ceci pour éviter des problèmes
        enableLogging: true, // Activer les logs internes de Keycloak
        onLoad: 'check-sso', // Ne tente pas de connexion automatique
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256', // Utiliser PKCE pour plus de sécurité
      });
      console.log('[Keycloak] Initialisation terminée. Authentifié:', authenticated);

      if (authenticated) {
        console.log('[Keycloak] Token:', keycloak.token ? 'Présent' : 'Absent');
        console.log('[Keycloak] Token Parse:', keycloak.tokenParsed);
        
        const accessToken = keycloak.token;

        // Récupération du profil utilisateur
        try {
          console.log('[Keycloak] Récupération du profil utilisateur...');
          const userProfile = await axios.get(`https://ecommerce-backend-production.admin-a5f.workers.dev/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log('[Keycloak] Profil utilisateur récupéré:', userProfile.data);
          recoverUser(userProfile.data);
        } catch (error) {
          console.error('[Keycloak] Erreur lors de la récupération du profil utilisateur:', error);
        }

        try {
          console.log('[Keycloak] Récupération des commandes...');
          await listMyOrder(myOrderGateway(), accessToken);
          console.log('[Keycloak] Commandes récupérées avec succès');
        } catch (error) {
          console.error('[Keycloak] Erreur lors de la récupération des commandes:', error);
        }

        // **Restaurer le panier**
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          console.log('[Keycloak] Restauration du panier sauvegardé...');
          try {
            const cartItems = JSON.parse(savedCart);
            const productStore = useProductStore();
            const productGateway = useProductGateway();

            console.log('[Keycloak] Produits dans le panier:', Object.keys(cartItems).length);
            
            // Itérer sur chaque produit dans savedCart
            for (const [productUuid, productData] of Object.entries(cartItems)) {
              try {
                // Ajouter le produit au cartStore autant de fois que la quantité
                for (let i = 0; i < productData.quantity; i++) {
                  cartStore.add(productUuid);
                }

                // Récupérer les détails du produit depuis le gateway
                const product = await productGateway.getByUuid(productUuid);
                productStore.add(product);
                console.log(`[Keycloak] Produit ${productUuid} ajouté au panier`);
              } catch (error) {
                console.error(`[Keycloak] Erreur lors de la récupération ou de l'ajout du produit UUID: ${productUuid}`, error);
              }
            }

            // Supprimer le panier sauvegardé de localStorage après restauration
            localStorage.removeItem('cart');
            console.log('[Keycloak] Panier restauré et sauvegarde supprimée');
          } catch (error) {
            console.error('[Keycloak] Erreur lors de la restauration du panier:', error);
          }
        }

        // Rafraîchissement du token
        const intervalId = setInterval(async () => {
          try {
            const refreshed = await keycloak.updateToken(60);
            if (refreshed) {
              console.log('[Keycloak] Token rafraîchi avec succès');
            }
          } catch (err) {
            console.error('[Keycloak] Échec du rafraîchissement du token', err);
            clearInterval(intervalId);
          }
        }, 60000);
      } else {
        console.warn('[Keycloak] Utilisateur non authentifié');
        
        // Vérifier si nous venons de nous authentifier
        if (localStorage.getItem('justAuthenticated') === 'true') {
          console.log('[Keycloak] Authentification détectée mais token non présent, nouvelle tentative...');
          localStorage.removeItem('justAuthenticated');
          
          // Recharger la page pour réessayer
          window.location.reload();
        }
      }
    } catch (err) {
      console.error('[Keycloak] Échec de l\'initialisation', err);
      console.log('[Keycloak] URL actuelle lors de l\'erreur:', window.location.href);
      
      if (err.error === 'login_required') {
        console.log('[Keycloak] Login requis, tentative de connexion...');
        // Récupérer l'URL sauvegardée pour la redirection
        const redirectUrl = localStorage.getItem('redirectAfterLogin') || window.location.href;
        console.log('[Keycloak] Redirection après login:', redirectUrl);
        
        try {
          await keycloak.login({
            redirectUri: redirectUrl
          });
        } catch (loginError) {
          console.error('[Keycloak] Erreur lors de la tentative de connexion:', loginError);
        }
      }
    }
  })();

  nuxtApp.provide('keycloak', keycloak);
  nuxtApp.provide('keycloakReady', keycloakReady);
  
  // Ajouter une méthode utilitaire pour le débogage
  nuxtApp.provide('debugKeycloak', () => {
    console.log('[Keycloak Debug]', {
      authenticated: keycloak.authenticated,
      token: keycloak.token ? 'Présent' : 'Absent',
      tokenExpired: keycloak.isTokenExpired(),
      tokenParsed: keycloak.tokenParsed,
      subject: keycloak.subject,
      idToken: keycloak.idToken ? 'Présent' : 'Absent',
      realmAccess: keycloak.realmAccess,
      resourceAccess: keycloak.resourceAccess,
      timeSkew: keycloak.timeSkew,
      responseMode: keycloak.responseMode,
      flow: keycloak.flow,
      adapter: keycloak.adapter,
      isMobile: isMobile()
    });
    return true;
  });
});