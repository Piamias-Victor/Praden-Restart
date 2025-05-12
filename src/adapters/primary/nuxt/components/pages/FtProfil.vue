<template lang="pug">
  TransitionRoot(appear='' :show='true' as='template')
      Dialog.relative.z-40(as='div' @close='closeModal')
          TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
              div.fixed.inset-0.bg-black.bg-opacity-25
          div.fixed.inset-0.overflow-y-auto
              div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                  TransitionChild(as='template' class="w-full")
                      DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideleft
                          div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                              span Livraison offerte pour 69 € d'achat
                          div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                              div.flex.items-start.justify-between
                                  h2.text-lg.font-semibold Mon profil
                                  div.ml-3.flex.h-7.items-center
                                      ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                          icon.icon-sm(name="ph:x-bold")
                              div.mt-4
                              div(v-if="isAuthenticated")
                                div.flex.flex-col.items-center.justify-center
                                  div.mt-4.text-lg Bonjour,
                                  div.font-semibold.text-xl {{ user.firstName }}
                                div.mt-4
                                div.flex.flex-col.gap-4
                                  ft-button.button-solid.w-full(@click="openOrder")
                                    icon.icon-md(name="akar-icons:shopping-bag")
                                    span Mes commandes
                                  //- ft-button.button-solid.w-full(@click="openAddress")
                                  //-   icon.icon-md(name="material-symbols:supervised-user-circle-outline")
                                  //-   span Mon profil
                                  ft-button.button-solid.w-full(@click="openContact")
                                    icon.icon-md(name="bx:message")
                                    span Nous contacter
                                  nuxt-link.w-full(
                                    href="https://www.maiia.com/pharmacie/30100-ales/pharmacie-agnes-praden"
                                    target="_blank"
                                  )
                                    ft-button.button-solid.w-full
                                      icon.icon-md(name="mdi:paper-outline")
                                      span Envoyer une ordo
                                  nuxt-link.w-full(
                                    href="http://search.google.com/local/writereview?placeid=ChIJuZQjzvRCtBIRfsJukIkyXLY"
                                    target="_blank"
                                  )
                                    ft-button.button-solid.w-full
                                      icon.icon-md(name="ion:logo-google")
                                      span Laisser un avis
                                  ft-button.button-solid.w-full(@click="logout")
                                    icon.icon-md(name="tabler:logout")
                                    span Déconnexion
                                ft-contact(v-if="contactOpened" @close="closeContact")
                                ft-ordo(v-if="ordoOpened" @close="closeOrdo")
                                ft-address(v-if="addressOpened" @close="closeAddress")
                                ft-order(v-if="orderOpened" @close="closeOrder")
                              div(v-else).flex.flex-col.items-center
                                  div.mt-4
                                  img.block.h-48.w-auto(
                                      src="https://www.pharma365.fr/wp-content/uploads/2023/11/logo_Pharmabest.png"
                                      alt="logo"
                                  )
                                  div.mt-10
                                  span.font-semibold.text-xl REJOIGNEZ-NOUS
                                  div.mt-2
                                  span.px-4.font-semibold.text-contrast.text Voir vos commandes, mettre à jour vos infos et profiter des meilleures réductions
                                  div.mt-10
                                  ft-button.button-solid.text-xl.w-full(@click="login")
                                      span Connexion
                                  div.mt-4
                                  ft-button.bg-contrast.text-xl.w-full(@click="register")
                                      span S'inscrire
                                  ft-connexion(v-if="connexionOpened" @close="closeConnexion")
                                  ft-subscribe(v-if="subscribeOpened" @close="closeSubscribe")
  </template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch, nextTick, onBeforeUnmount } from 'vue';
import { useNuxtApp } from '#app';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';

// Modaux
const connexionOpened = ref(false);
const subscribeOpened = ref(false);
const contactOpened = ref(false);
const ordoOpened = ref(false);
const addressOpened = ref(false);
const orderOpened = ref(false);

// Fermeture modale
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

function closeModal() {
  emit('close');
}

// Gestion de Keycloak
const nuxtApp = useNuxtApp();
const keycloak = nuxtApp.$keycloak;
const keycloakReady = nuxtApp.$keycloakReady;
const reinitKeycloak = nuxtApp.$reinitKeycloak;

const isAuthenticated = ref(false);
const user = ref<{ firstName?: string }>({});
const isCheckingAuth = ref(false);

// Variable pour contrôler l'intervalle de vérification
let authCheckInterval: number | null = null;

// Fonction pour vérifier l'authentification
const checkAuthentication = async () => {
  if (isCheckingAuth.value) return;
  
  isCheckingAuth.value = true;
  console.log('[FtProfil] Vérification de l\'authentification...');
  
  try {
    // Simplement mettre à jour l'état d'authentification sans réinitialiser
    // Nous n'utilisons plus reinitKeycloak qui cause des erreurs
    isAuthenticated.value = keycloak?.authenticated || false;
    
    if (isAuthenticated.value && keycloak?.tokenParsed) {
      user.value = {
        firstName: keycloak.tokenParsed?.given_name || '',
      };
      console.log('[FtProfil] Utilisateur authentifié:', user.value.firstName);
    } else {
      console.log('[FtProfil] Utilisateur non authentifié');
    }
  } catch (error) {
    console.error('[FtProfil] Erreur lors de la vérification de l\'authentification:', error);
  } finally {
    isCheckingAuth.value = false;
  }
};

// Surveiller les changements de Keycloak
watch(() => keycloak?.authenticated, (newValue) => {
  if (newValue !== undefined) {
    isAuthenticated.value = newValue;
    
    if (newValue && keycloak?.tokenParsed) {
      user.value = {
        firstName: keycloak.tokenParsed?.given_name || '',
      };
    }
  }
});

// Vérification périodique de l'authentification
const setupAuthCheck = () => {
  // Nettoyer l'intervalle existant s'il y en a un
  if (authCheckInterval !== null) {
    clearInterval(authCheckInterval);
  }
  
  // Vérifier toutes les 10 secondes (moins fréquent pour éviter trop d'appels)
  authCheckInterval = window.setInterval(() => {
    if (!isCheckingAuth.value) {
      checkAuthentication();
    }
  }, 10000);
};

// Nettoyage de l'intervalle lors de la destruction du composant
onBeforeUnmount(() => {
  if (authCheckInterval !== null) {
    clearInterval(authCheckInterval);
    authCheckInterval = null;
  }
});

// Initialisation au montage du composant
onMounted(async () => {
  console.log('[FtProfil] Composant monté, initialisation...');
  
  try {
    // Attendre que Keycloak soit prêt
    await keycloakReady;
    
    // Petite pause pour éviter des conflits d'initialisation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simplement mettre à jour l'état d'authentification sans réinitialiser
    isAuthenticated.value = keycloak?.authenticated || false;
    
    if (isAuthenticated.value && keycloak?.tokenParsed) {
      user.value = {
        firstName: keycloak.tokenParsed?.given_name || '',
      };
      console.log('[FtProfil] Utilisateur authentifié après initialisation:', user.value.firstName);
    }
    
    // Mettre en place la vérification périodique
    setupAuthCheck();
  } catch (error) {
    console.error('[FtProfil] Erreur lors de l\'initialisation:', error);
    
    // Mettre en place la vérification périodique même en cas d'erreur
    setupAuthCheck();
  }
});

// Détection si appareil mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Fonction de connexion
// Fonction de connexion sécurisée
const login = () => {
  console.log('[FtProfil] Tentative de connexion...');
  
  try {
    // Récupérer le panier actuel de manière sécurisée
    let cartItems = {};
    
    try {
      const cartVM = getCartVM();
      if (cartVM && cartVM.items) {
        cartItems = cartVM.items;
      }
    } catch (cartError) {
      console.warn('[FtProfil] Erreur lors de la récupération du panier via getCartVM:', cartError);
      
      // Alternative : utiliser directement le store si getCartVM échoue
      try {
        const cartStore = useCartStore();
        if (cartStore && cartStore.items) {
          // Convertir en format compatible
          cartItems = cartStore.items.reduce((acc, uuid) => {
            if (!acc[uuid]) {
              acc[uuid] = { quantity: 0 };
            }
            acc[uuid].quantity += 1;
            return acc;
          }, {});
        }
      } catch (storeError) {
        console.error('[FtProfil] Erreur lors de la récupération du panier depuis le store:', storeError);
      }
    }
    
    // Sauvegarder le panier (même s'il est vide)
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log('[FtProfil] Panier sauvegardé dans localStorage:', Object.keys(cartItems).length, 'articles différents');
    
    // Nettoyer et sauvegarder l'URL actuelle
    let currentUrl = window.location.href;
    // Nettoyer les fragments d'authentification
    const hashIndex = currentUrl.indexOf('#state=');
    if (hashIndex !== -1) {
      currentUrl = currentUrl.substring(0, hashIndex);
    }
    
    console.log('[FtProfil] URL de redirection sauvegardée:', currentUrl);
    localStorage.setItem('redirectAfterLogin', currentUrl);
    
    // Si nous sommes sur la page de recherche, sauvegarder les paramètres de recherche
    if (window.location.pathname === '/search') {
      const searchParamsString = window.location.search.substring(1); // Supprimer le '?' initial
      localStorage.setItem('searchParams', searchParamsString);
      console.log('[FtProfil] Paramètres de recherche sauvegardés:', searchParamsString);
    }

    // Redirection pour la connexion avec la page de callback
    if (keycloak) {
      keycloak.login({
        redirectUri: window.location.origin + '/callback',
        prompt: 'login'  // Force le rafraîchissement de la session
      }).catch((error) => {
        console.error('[FtProfil] Erreur lors de la connexion:', error);
      });
    } else {
      console.error('[FtProfil] Keycloak n\'est pas initialisé');
    }
  } catch (error) {
    console.error('[FtProfil] Erreur lors de la préparation de la connexion:', error);
    
    // En cas d'erreur, essayer de se connecter quand même sans sauvegarder le panier
    if (keycloak) {
      keycloak.login({
        redirectUri: window.location.origin + '/callback'
      }).catch((loginError) => {
        console.error('[FtProfil] Erreur lors de la tentative de connexion après erreur:', loginError);
      });
    }
  }
};

// Fonction d'inscription
const register = () => {
  try {
    // Sauvegarder le panier actuel
    const cartVM = getCartVM();
    if (cartVM && cartVM.items) {
      localStorage.setItem('cart', JSON.stringify(cartVM.items));
      console.log('[FtProfil] Panier sauvegardé avant inscription:', Object.keys(cartVM.items).length, 'articles');
    }

    // Sauvegarder l'URL actuelle pour redirection post-inscription
    const currentUrl = window.location.href;
    localStorage.setItem('redirectAfterLogin', currentUrl);
    
    // Si nous sommes sur la page de recherche, sauvegarder les paramètres de recherche
    if (window.location.pathname === '/search') {
      const searchParamsString = window.location.search.substring(1);
      localStorage.setItem('searchParams', searchParamsString);
    }
    
    if (keycloak) {
      keycloak.register({
        redirectUri: window.location.origin + '/callback'
      }).catch((error) => {
        console.error("[FtProfil] Erreur lors de l'inscription :", error);
      });
    } else {
      console.error('[FtProfil] Keycloak n\'est pas initialisé');
    }
  } catch (error) {
    console.error('[FtProfil] Erreur lors de la préparation de l\'inscription:', error);
  }
};

// Fonction déconnexion
const logout = () => {
  try {
    // Sauvegarder le panier actuel avant la déconnexion
    const cartVM = getCartVM();
    if (cartVM && cartVM.items) {
      localStorage.setItem('cart_before_logout', JSON.stringify(cartVM.items));
      console.log('[FtProfil] Panier sauvegardé avant déconnexion:', Object.keys(cartVM.items).length, 'articles');
    }
    
    if (keycloak) {
      keycloak.logout({ 
        redirectUri: window.location.origin 
      }).catch((error) => {
        console.error('[FtProfil] Erreur lors de la déconnexion :', error);
      });
    } else {
      console.error('[FtProfil] Keycloak n\'est pas initialisé');
    }
  } catch (error) {
    console.error('[FtProfil] Erreur lors de la déconnexion:', error);
  }
};

// Ouverture/Fermeture modaux secondaires
const openConnexion = () => {
  connexionOpened.value = true;
};

const closeConnexion = () => {
  connexionOpened.value = false;
};

const openSubscribe = () => {
  subscribeOpened.value = true;
};

const closeSubscribe = () => {
  subscribeOpened.value = false;
};

// Autres modaux
const openContact = () => {
  contactOpened.value = true;
};

const closeContact = () => {
  contactOpened.value = false;
};

const openOrdo = () => {
  ordoOpened.value = true;
};

const closeOrdo = () => {
  ordoOpened.value = false;
};

const openAddress = () => {
  addressOpened.value = true;
};

const closeAddress = () => {
  addressOpened.value = false;
};

const openOrder = () => {
  orderOpened.value = true;
};

const closeOrder = () => {
  orderOpened.value = false;
};
</script>