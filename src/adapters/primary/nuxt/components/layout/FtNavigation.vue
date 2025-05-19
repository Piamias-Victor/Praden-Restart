<template lang="pug">
  div.fixed.w-full.flex.justify-center.z-10.bottom-5.left-0
      div.bg-white.rounded-full.p-2.flex.items-center.justify-center.shadow-xl(class='w-[90vw] sm:w-[40vw]')
          ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openLike" :class='bagColor')
              icon.icon-lg(name="ph:heart-bold")
              span(v-if="likeQuantity && likeQuantity.totalQuantity") {{ likeQuantity.totalQuantity }}
          nuxt-link(href='/')
            ft-button.w-full.text-primary11.flex.items-center.justify-center
                icon.icon-lg(name="iconamoon:home-bold")
          ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openCart" :class='heartColor')
              icon.icon-lg(name="akar-icons:shopping-bag")
              span(v-if="cartQuantity && cartQuantity.totalQuantity") {{ cartQuantity.totalQuantity }}
  ft-cart-panel(v-if="showCart" @close="closeCart" @move-stepper="moveStepper")
  ft-profil(v-if="showProfil" @close="closeProfil")
  ft-like-panel(v-if="likeOpened" @close="closeLike")
  </template>
  
  <script lang="ts" setup>
  import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
  import { useProductGateway } from '../../../../../../gateways/productGateway';
  import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
  import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
  import { useNuxtApp } from '#app';
  
  export interface CartQuantityVM {
    items: HashTable<number>;
    totalQuantity: number;
    medecine: boolean;
  }
  
  export interface LikeQuantityVM {
    items: HashTable<number>;
    totalQuantity: number;
  }
  const heartColor = ref('text-contrast');
  const bagColor = ref('text-contrast');
  
  // Variables séparées pour les panneaux
  const showCart = ref(false);
  const showProfil = ref(false);
  
  const likeOpened = ref(false);
  const cartQuantity = ref<CartQuantityVM | null>(null);
  const likeQuantity = ref<LikeQuantityVM | null>(null);
  
  // Accès à Keycloak
  const nuxtApp = useNuxtApp();
  const keycloak = nuxtApp.$keycloak;
  const keycloakReady = nuxtApp.$keycloakReady;
  
  // Fonction de vérification d'authentification IDENTIQUE à celle de FtProfil
  const isUserAuthenticated = () => {
    try {
      console.log('🔍 [Auth Check] Keycloak authentifié?', keycloak?.authenticated);
      console.log('🔍 [Auth Check] Token Parsed:', keycloak?.tokenParsed?.given_name);
      
      // Utiliser exactement la même logique que FtProfil
      const isAuth = keycloak?.authenticated || false;
      
      return isAuth;
    } catch (error) {
      console.error('❌ [Auth Check] Erreur Keycloak:', error);
      return false;
    }
  };
  
  const openCart = async () => {
    console.log('🛒 [openCart] Début de la fonction');
    
    // Fermer tous les panneaux d'abord
    showCart.value = false;
    showProfil.value = false;
    
    console.log('🛒 [openCart] Vérification de l\'authentification via Keycloak...');
    
    // Attendre que Keycloak soit initialisé
    try {
      // Vérifier si Keycloak est prêt
      await keycloakReady;
      
      // Vérifier l'authentification avec Keycloak
      if (isUserAuthenticated()) {
        console.log('✅ [openCart] Utilisateur connecté via Keycloak → Affichage du panier');
        // Si l'utilisateur est authentifié, afficher le panier
        showCart.value = true;
      } else {
        console.log('⛔ [openCart] Utilisateur NON connecté → Affichage du profil');
        // Sinon, afficher le profil
        showProfil.value = true;
      }
      
      console.log('🛒 [openCart] État final - showCart:', showCart.value, ', showProfil:', showProfil.value);
    } catch (error) {
      console.error('❌ [openCart] Erreur lors de la vérification:', error);
      // En cas d'erreur, afficher le profil
      showProfil.value = true;
    }
  };
  
  const user = computed(() => {
    try {
      return getUserVM();
    } catch (error) {
      console.error('Erreur lors de la récupération des infos utilisateur:', error);
      return { uuid: null };
    }
  });
  
  const closeCart = () => {
    console.log('🔒 [closeCart] Fermeture du panier');
    showCart.value = false;
  };
  
  const closeProfil = () => {
    console.log('🔒 [closeProfil] Fermeture du profil');
    showProfil.value = false;
  };
  
  const openLike = () => {
    likeOpened.value = true;
  };
  
  const closeLike = () => {
    likeOpened.value = false;
  };
  
  const moveStepper = () => {
    // Votre logique de déplacement du stepper
  };
  
  // Fonction sécurisée pour récupérer la quantité du panier
  const updateCartQuantity = async () => {
    try {
      cartQuantity.value = await getCartQuantityVM(useProductGateway());
    } catch (error) {
      console.error('Erreur lors de la récupération de la quantité du panier:', error);
      cartQuantity.value = { items: {}, totalQuantity: 0, medecine: false };
    }
  };
  
  // Fonction sécurisée pour récupérer la quantité des favoris
  const updateLikeQuantity = async () => {
    try {
      likeQuantity.value = await getLikeQuantityVM(useProductGateway());
    } catch (error) {
      console.error('Erreur lors de la récupération de la quantité des favoris:', error);
      likeQuantity.value = { items: {}, totalQuantity: 0 };
    }
  };
  
  // Mise à jour de la couleur du cœur en fonction de la quantité du panier
  watchEffect(() => {
    if (cartQuantity.value && cartQuantity.value.totalQuantity && cartQuantity.value.totalQuantity === 0)
      heartColor.value = 'text-contrast';
    else if (cartQuantity.value && cartQuantity.value.totalQuantity && cartQuantity.value.totalQuantity !== 0)
      heartColor.value = 'text-main';
    else 
      heartColor.value = 'text-contrast';
  });
  
  // Mise à jour de la couleur du sac en fonction de la quantité des favoris
  watchEffect(() => {
    if (likeQuantity.value && likeQuantity.value.totalQuantity && likeQuantity.value.totalQuantity === 0)
      bagColor.value = 'text-contrast';
    else if (likeQuantity.value && likeQuantity.value.totalQuantity && likeQuantity.value.totalQuantity !== 0)
      bagColor.value = 'text-main';
    else 
      bagColor.value = 'text-contrast';
  });
  
  // Observer les changements de Keycloak - comme dans FtProfil
  watch(() => keycloak?.authenticated, (newValue) => {
    if (newValue !== undefined) {
      console.log('🔄 [Keycloak Watch] Changement d\'état d\'authentification:', newValue);
    }
  });
  
  // Récupérer les quantités du panier et des favoris de manière sécurisée
  watchEffect(async () => {
    await updateCartQuantity();
  });
  
  watchEffect(async () => {
    await updateLikeQuantity();
  });
  
  // Initialiser les valeurs au montage du composant
  onMounted(async () => {
    console.log('🚀 [onMounted] Composant FtNavMobile monté');
    updateCartQuantity();
    updateLikeQuantity();
    
    try {
      // Attendre que Keycloak soit prêt
      await keycloakReady;
      
      // Vérification initiale pour débogage
      console.log('🔍 [onMounted] État d\'authentification via Keycloak:', isUserAuthenticated());
      console.log('🔍 [onMounted] Keycloak authenticated:', keycloak?.authenticated);
      console.log('🔍 [onMounted] Keycloak token exists:', !!keycloak?.token);
      
      if (keycloak?.tokenParsed) {
        console.log('🔍 [onMounted] Nom utilisateur:', keycloak.tokenParsed.given_name);
      }
    } catch (error) {
      console.error('❌ [onMounted] Erreur lors de l\'initialisation de Keycloak:', error);
    }
  });
  </script>