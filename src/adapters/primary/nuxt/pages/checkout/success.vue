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
  
  // Fonction pour nettoyer toutes les données du panier dans le localStorage
  const cleanCartLocalStorage = () => {
    try {
      console.log('[Success] Nettoyage du panier dans le localStorage...');
      
      // Supprimer les différentes versions du panier stockées
      localStorage.removeItem('persistent_cart');
      localStorage.removeItem('persistent_cart_timestamp');
      localStorage.removeItem('cart');
      localStorage.removeItem('cart_before_logout');
      
      // Supprimer toute autre clé liée au panier que vous pourriez utiliser
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.includes('cart') || 
          key.includes('panier') ||
          key.includes('product_') ||
          key.includes('quantity_')
        )) {
          keysToRemove.push(key);
        }
      }
      
      // Supprimer les clés identifiées
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
      
      console.log('[Success] Panier nettoyé dans le localStorage');
    } catch (error) {
      console.error('[Success] Erreur lors du nettoyage du localStorage:', error);
    }
  };
  
  // Fonction pour vider le panier dans le store
  const clearCartStore = () => {
    try {
      console.log('[Success] Vidage du panier dans le store...');
      const cartStore = useCartStore();
      
      // Vider le panier
      if (cartStore && typeof cartStore.removeAll === 'function') {
        cartStore.removeAll();
        console.log('[Success] Panier vidé avec succès dans le store');
      } else {
        console.warn('[Success] Méthode removeAll non disponible sur cartStore');
      }
    } catch (error) {
      console.error('[Success] Erreur lors du vidage du panier dans le store:', error);
    }
  };
  
  // Fonction pour nettoyer complètement le panier
  const cleanCart = () => {
    // Nettoyer le localStorage
    cleanCartLocalStorage();
    
    // Vider le panier dans le store
    clearCartStore();
  };
  
  onMounted(() => {
    console.log('[Success] Page de succès chargée');
    
    // Nettoyer immédiatement le panier dans tous les cas
    cleanCart();
    
    // Récupérer les données de la commande pour le tracking
    const order = orderStore.current;
    
    // Vérifier si nous avons un identifiant de commande et une commande valide
    if (order && order.uuid) {
      console.log('[Success] Traitement de l\'événement purchase pour la commande:', order.uuid);
      
      // Tracking de l'achat
      try {
        trackPurchase(order);
        console.log('[Success] Événement d\'achat suivi avec succès');
      } catch (error) {
        console.error('[Success] Erreur lors du suivi de l\'événement d\'achat:', error);
      }
    } else {
      console.warn('[Success] Aucune donnée de commande disponible pour le tracking purchase');
    }
  });
  
  const backToHome = () => {
    // Nettoyer à nouveau le panier avant de retourner à l'accueil
    cleanCart();
    
    // Rediriger vers la page d'accueil
    console.log('[Success] Redirection vers la page d\'accueil');
    router.push('/');
  };
  </script>