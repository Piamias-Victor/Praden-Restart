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
  // Ne pas exécuter côté serveur
  if (!process.client) {
    console.log('[Keycloak Plugin] Exécution côté serveur ignorée');
    const dummyKeycloak = {
      authenticated: false,
      token: null,
      tokenParsed: null,
      login: () => Promise.resolve(),
      logout: () => Promise.resolve(),
      register: () => Promise.resolve(),
      updateToken: () => Promise.resolve(false),
      init: () => Promise.resolve(false),
    };
    nuxtApp.provide('keycloak', dummyKeycloak);
    nuxtApp.provide('keycloakReady', Promise.resolve());
    nuxtApp.provide('debugKeycloak', () => false);
    return;
  }

  const { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID } = useRuntimeConfig().public;
  
  console.log('[Keycloak Plugin] Initialisation avec:', { 
    url: KEYCLOAK_URL, 
    realm: KEYCLOAK_REALM, 
    clientId: KEYCLOAK_CLIENT_ID 
  });

  // Création de l'instance Keycloak
  const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
  });

  // Stockage pour suivre l'état de l'authentification
  const authState = {
    isInitialized: false,        // Indicateur d'initialisation
    isAuthenticating: false,
    lastAuthCheck: 0,
    refreshInterval: null as number | null,
  };

  // Mettre en place le rafraîchissement automatique du token
  const setupTokenRefresh = () => {
    if (authState.refreshInterval) {
      clearInterval(authState.refreshInterval);
    }
    
    // Rafraîchir le token toutes les 30 secondes (plus fréquent que le défaut)
    authState.refreshInterval = window.setInterval(async () => {
      if (keycloak.authenticated) {
        try {
          // Essayer de rafraîchir 30 secondes avant l'expiration
          const refreshed = await keycloak.updateToken(30);
          if (refreshed) {
            console.log('[Keycloak] Token rafraîchi avec succès');
          }
        } catch (error) {
          console.error('[Keycloak] Erreur lors du rafraîchissement du token:', error);
          // Ne pas arrêter l'intervalle - essayer encore au prochain cycle
        }
      }
    }, 30000);
  };

  // Ajouter les écouteurs d'événements
  keycloak.onAuthSuccess = () => {
    console.log('[Keycloak] Authentification réussie');
    authState.isAuthenticating = false;
    
    // Configurer le rafraîchissement automatique du token
    setupTokenRefresh();
    
    // Restaurer le panier depuis localStorage après connexion
    const cartStore = useCartStore();
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('[Keycloak] Restauration du panier sauvegardé:', parsedCart);
        
        // Utiliser la fonction restoreCart du store
        cartStore.restoreCart(parsedCart);
        
        // Nettoyer le panier temporaire
        localStorage.removeItem('cart');
      } catch (error) {
        console.error('[Keycloak] Erreur lors de la restauration du panier:', error);
      }
    }
  };

  keycloak.onAuthError = (error) => {
    console.error('[Keycloak] Erreur d\'authentification:', error);
    authState.isAuthenticating = false;
  };

  keycloak.onAuthLogout = () => {
    console.log('[Keycloak] Déconnexion');
    authState.isAuthenticating = false;
    authState.isInitialized = false;  // Réinitialiser l'état pour permettre une nouvelle initialisation
    if (authState.refreshInterval) {
      clearInterval(authState.refreshInterval);
      authState.refreshInterval = null;
    }
  };

  keycloak.onTokenExpired = () => {
    console.log('[Keycloak] Token expiré, tentative de rafraîchissement...');
    // La gestion de cet événement est déjà couverte par setupTokenRefresh
  };

  // Fonction principale d'initialisation
  const keycloakReady = (async () => {
    try {
      // Éviter les réinitialisations pendant l'authentification
      if (authState.isAuthenticating) {
        console.log('[Keycloak] Déjà en cours d\'authentification, attente...');
        return;
      }
      
      // Éviter les vérifications trop fréquentes (limiter à une fois toutes les 2 secondes)
      const now = Date.now();
      if (now - authState.lastAuthCheck < 2000) {
        console.log('[Keycloak] Vérification récente, attente...');
        return;
      }
      authState.lastAuthCheck = now;
      
      // Ignorer l'initialisation sur les pages spéciales
      if (window.location.pathname === '/silent-check-sso.html' || window.location.pathname === '/callback') {
        console.log('[Keycloak] Sur une page spéciale, pas d\'initialisation');
        return;
      }

      console.log('[Keycloak] Tentative d\'initialisation...');
      authState.isAuthenticating = true;
      
      // Vérifier si Keycloak a déjà été initialisé
      if (!authState.isInitialized) {
        // Initialiser avec options optimales pour la persistance
        const authenticated = await keycloak.init({
          checkLoginIframe: false,          // Désactiver pour éviter les problèmes de CORS
          onLoad: 'check-sso',              // Vérifier l'authentification silencieusement
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          pkceMethod: 'S256',               // Améliorer la sécurité
          enableLogging: true,              // Activer les logs pour le débogage
          responseMode: 'fragment',         // Mode compatible avec la plupart des navigateurs
          flow: 'standard',                 // Flux standard OAuth/OIDC
        });
        
        authState.isInitialized = true;
        console.log('[Keycloak] Initialisation terminée. Authentifié:', authenticated);
        
        if (authenticated) {
          console.log('[Keycloak] Token:', keycloak.token ? 'Présent' : 'Absent');
          
          // Configurer le rafraîchissement automatique du token
          setupTokenRefresh();
          
          // Récupération du profil utilisateur
          try {
            console.log('[Keycloak] Récupération du profil utilisateur...');
            const userProfile = await axios.get(`https://ecommerce-backend-production.admin-a5f.workers.dev/profile`, {
              headers: {
                Authorization: `Bearer ${keycloak.token}`,
              },
            });
            console.log('[Keycloak] Profil utilisateur récupéré:', userProfile.data);
            recoverUser(userProfile.data);
          } catch (error) {
            console.error('[Keycloak] Erreur lors de la récupération du profil utilisateur:', error);
          }

          // Récupération des commandes utilisateur
          try {
            console.log('[Keycloak] Récupération des commandes...');
            await listMyOrder(myOrderGateway(), keycloak.token);
            console.log('[Keycloak] Commandes récupérées avec succès');
          } catch (error) {
            console.error('[Keycloak] Erreur lors de la récupération des commandes:', error);
          }

          // Restauration du panier
          const cartStore = useCartStore();
          const productStore = useProductStore();
          const productGateway = useProductGateway();
          
          // D'abord essayer de restaurer depuis 'cart' (panier temporaire pendant la connexion)
          const savedCart = localStorage.getItem('cart');
          if (savedCart) {
            console.log('[Keycloak] Restauration du panier sauvegardé temporaire...');
            try {
              const cartItems = JSON.parse(savedCart);
              
              // Ajouter les produits au panier
              for (const [productUuid, productData] of Object.entries(cartItems)) {
                try {
                  // Ajouter le produit au cartStore autant de fois que la quantité
                  for (let i = 0; i < productData.quantity; i++) {
                    cartStore.add(productUuid);
                  }

                  // Récupérer les détails du produit
                  const product = await productGateway.getByUuid(productUuid);
                  productStore.add(product);
                } catch (error) {
                  console.error(`[Keycloak] Erreur pour le produit ${productUuid}:`, error);
                }
              }
              
              // Supprimer le panier temporaire après restauration
              localStorage.removeItem('cart');
              console.log('[Keycloak] Panier temporaire restauré et supprimé');
            } catch (error) {
              console.error('[Keycloak] Erreur lors de la restauration du panier temporaire:', error);
            }
          } 
          // Sinon, essayer de charger depuis le stockage persistant
          else {
            console.log('[Keycloak] Vérification du panier persistant...');
            // La méthode loadFromLocalStorage retournera true si un panier valide est trouvé
            if (cartStore.loadFromLocalStorage && cartStore.loadFromLocalStorage()) {
              console.log('[Keycloak] Panier persistant restauré');
              
              // Synchroniser les produits avec le store de produits
              for (const productUuid of cartStore.items) {
                try {
                  const product = await productGateway.getByUuid(productUuid);
                  productStore.add(product);
                } catch (error) {
                  console.error(`[Keycloak] Erreur pour le produit ${productUuid}:`, error);
                }
              }
            }
          }
        } else {
          console.warn('[Keycloak] Utilisateur non authentifié');
          
          // Même si non authentifié, essayer de charger le panier persistant
          const cartStore = useCartStore();
          if (cartStore.loadFromLocalStorage && typeof cartStore.loadFromLocalStorage === 'function') {
            cartStore.loadFromLocalStorage();
          }
        }
      } else {
        console.log('[Keycloak] Instance déjà initialisée, vérification du statut');
        // Si déjà initialisé, simplement vérifier si l'utilisateur est authentifié
        if (keycloak.authenticated) {
          try {
            // Vérifier si le token est encore valide
            const refreshed = await keycloak.updateToken(30);
            if (refreshed) {
              console.log('[Keycloak] Token rafraîchi avec succès lors de la vérification');
            }
          } catch (error) {
            console.error('[Keycloak] Erreur lors de la vérification du token:', error);
            authState.isInitialized = false; // Permettre une nouvelle initialisation en cas d'erreur
          }
        } else {
          console.warn('[Keycloak] L\'utilisateur n\'est pas authentifié');
        }
      }
      
      authState.isAuthenticating = false;
    } catch (err) {
      console.error('[Keycloak] Échec de l\'initialisation', err);
      console.log('[Keycloak] URL actuelle lors de l\'erreur:', window.location.href);
      
      authState.isAuthenticating = false;
      authState.isInitialized = false; // Permettre une nouvelle initialisation en cas d'erreur
      
      if (err.error === 'login_required') {
        console.log('[Keycloak] Login requis, redirection possible...');
        // Ne pas automatiquement rediriger - laisser le bouton de connexion dans l'interface
      }
    }
  })();

  // Fournir l'instance Keycloak et les fonctions utilitaires à l'application
  nuxtApp.provide('keycloak', keycloak);
  nuxtApp.provide('keycloakReady', keycloakReady);
  
  // Utilitaire de débogage
  nuxtApp.provide('debugKeycloak', () => {
    const detailedInfo = {
      authenticated: keycloak.authenticated,
      token: keycloak.token ? 'Présent' : 'Absent',
      tokenExpired: keycloak.isTokenExpired(),
      tokenParsed: keycloak.tokenParsed,
      subject: keycloak.subject,
      idToken: keycloak.idToken ? 'Présent' : 'Absent',
      refreshToken: keycloak.refreshToken ? 'Présent' : 'Absent',
      realmAccess: keycloak.realmAccess,
      resourceAccess: keycloak.resourceAccess,
      timeSkew: keycloak.timeSkew,
      responseMode: keycloak.responseMode,
      flow: keycloak.flow,
      adapter: keycloak.adapter,
      authState: { ...authState, refreshInterval: authState.refreshInterval !== null },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };
    
    console.log('[Keycloak Debug]', detailedInfo);
    return detailedInfo;
  });
  
  // Ajouter une fonction pour vérifier l'état d'authentification sans réinitialiser
  nuxtApp.provide('reinitKeycloak', async () => {
    console.log('[Keycloak] Réinitialisation manuelle...');
    
    try {
      // Si Keycloak n'est pas encore initialisé, l'initialiser
      if (!authState.isInitialized) {
        await keycloak.init({
          checkLoginIframe: false,
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          pkceMethod: 'S256',
        });
        authState.isInitialized = true;
        
        // Configurer le rafraîchissement si authentifié
        if (keycloak.authenticated) {
          setupTokenRefresh();
        }
      } 
      // Sinon, juste vérifier/rafraîchir le token
      else if (keycloak.authenticated) {
        try {
          const refreshed = await keycloak.updateToken(30);
          if (refreshed) {
            console.log('[Keycloak] Token rafraîchi avec succès lors de la vérification manuelle');
          }
        } catch (error) {
          console.error('[Keycloak] Erreur lors du rafraîchissement du token:', error);
          // En cas d'erreur grave, réinitialiser l'état
          authState.isInitialized = false;
          throw error;
        }
      }
      
      console.log('[Keycloak] Vérification terminée. Authentifié:', keycloak.authenticated);
      return keycloak.authenticated;
    } catch (error) {
      console.error('[Keycloak] Erreur lors de la réinitialisation:', error);
      // Réinitialiser l'état pour permettre de nouvelles tentatives
      authState.isInitialized = false;
      return false;
    }
  });
});