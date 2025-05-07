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
  ft-cart-panel(v-if="cartOpened && !needsAuth" @close="closeCart" @move-stepper="moveStepper")
  ft-profil(v-if="cartOpened && needsAuth" @close="closeProfil")
  ft-like-panel(v-if="likeOpened" @close="closeLike")
  </template>
  
  <script lang="ts" setup>
  import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
  import { useProductGateway } from '../../../../../../gateways/productGateway';
  import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
  import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
  
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
  const cartOpened = ref(false);
  const likeOpened = ref(false);
  const cartQuantity = ref<CartQuantityVM | null>(null);
  const likeQuantity = ref<LikeQuantityVM | null>(null);
  const needsAuth = ref(false);
  
  const openCart = () => {
    try {
      // Vérifier si l'utilisateur est authentifié
      const userInfo = getUserVM();
      needsAuth.value = !userInfo || !userInfo.uuid;
      cartOpened.value = true;
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'authentification:', error);
      // En cas d'erreur, supposer que l'utilisateur n'est pas authentifié
      needsAuth.value = true;
      cartOpened.value = true;
    }
  };
  
  const user = computed(() => {
    try {
      return getUserVM();
    } catch (error) {
      console.error('Erreur lors de la récupération des infos utilisateur:', error);
      // Retourner un objet utilisateur par défaut en cas d'erreur
      return { uuid: null };
    }
  });
  
  const closeCart = () => {
    cartOpened.value = false;
  };
  
  const closeProfil = () => {
    cartOpened.value = false;
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
      // Initialiser avec des valeurs par défaut en cas d'erreur
      cartQuantity.value = { items: {}, totalQuantity: 0, medecine: false };
    }
  };
  
  // Fonction sécurisée pour récupérer la quantité des favoris
  const updateLikeQuantity = async () => {
    try {
      likeQuantity.value = await getLikeQuantityVM(useProductGateway());
    } catch (error) {
      console.error('Erreur lors de la récupération de la quantité des favoris:', error);
      // Initialiser avec des valeurs par défaut en cas d'erreur
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
  
  // Récupérer les quantités du panier et des favoris de manière sécurisée
  watchEffect(async () => {
    await updateCartQuantity();
  });
  
  watchEffect(async () => {
    await updateLikeQuantity();
  });
  
  // Initialiser les valeurs au montage du composant
  onMounted(() => {
    updateCartQuantity();
    updateLikeQuantity();
  });
  </script>