<template lang="pug">
  ft-navigation
  div.mt-6
  div.flex.flex-col.items-center
      img.block.h-48.w-auto(
          class="sm:h-[30vw]"
          src="https://ep-website-media.s3.ap-southeast-1.amazonaws.com/my/wp-content/uploads/2024/04/truck-full-of-parcels.webp"
          alt="logo"
          )
      span.font-semibold.text-xl.text-center Votre commande est en cours de préparation!
      div.mt-2
      span.px-4.font-semibold.text-contrast.text-center Toute l'équipe de la pharmacie vous remercie et met tout en oeuvre pour vous offrir un service de qualité.
      div.mt-6
      ft-button.button-solid.w-full.text-xl(@click="backToHome" class='sm:w-[30vw]') Retourner sur le site
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useOrderStore } from '@store/orderStore';
  import { useCartStore } from '@store/cartStore';
  import { trackPurchase } from '@utils/dataLayer';
  
  definePageMeta({ layout: 'main' });
  
  const router = useRouter();
  const route = useRoute();
  const orderStore = useOrderStore();
  
  onMounted(() => {
    // Récupérer les données de la commande
    const order = orderStore.current;
    
    // Vérifier si nous avons un identifiant de commande et une commande valide
    if (order && order.uuid) {
      console.log('Traitement de l\'événement purchase pour la commande:', order.uuid);
      
      // Tracking de l'achat
      trackPurchase(order);
      
      // Vider le panier après un achat réussi
      const cartStore = useCartStore();
      cartStore.removeAll();
    } else {
      console.warn('Aucune donnée de commande disponible pour le tracking purchase');
    }
  });
  
  const backToHome = () => {
    router.push('/');
  };
  </script>