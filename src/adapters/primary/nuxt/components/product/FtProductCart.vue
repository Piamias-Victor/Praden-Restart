<template lang="pug">
li.flex.py-6
  div.h-24.w-24.flex-shrink-0.overflow-hidden.rounded-md.border
    img.h-full.w-full.object-cover.object-center(
      v-if="item && item.img && item.img.length > 0"
      :src="item.img"
      :alt="item.name"
    )
    img.h-full.w-full.object-cover.object-center(
      v-else
      src="https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg"
      :alt="item.name"
    )
  div.flex.justify-between.items-center.w-full
    div.ml-4.flex.flex-1.flex-col.items-start
      div.flex.justify-between.items-center.w-full
        span.text-sm(:class="item.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ item.totalPrice }}
        span.font-semibold.text-main(v-if="item.totalPriceWithPromotion") {{ item.totalPriceWithPromotion }}
      p.mr-1.text-sm.line-clamp-3 {{ item.name }}
      // Message de limite atteinte si nécessaire
      div.text-xs.text-red-500.text-left.mt-1(v-if="showMaxQuantityMessage")
        p {{ maxQuantityMessage }}
    div.flex.flex-1.items-center.justify-between
      div.flex.justify-end.gap-4.w-full
        ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click='removeItemFromCart(item.uuid)')
          icon.icon-xs(name="ph:minus-bold")
        p.text-xl.font-semibold {{ getCartQuantity(item.uuid) }}
        ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(v-if='!isAddButtonHidden(item.uuid)' @click='addItemToCart(item.uuid)')
          icon.icon-xs(name="ph:plus-bold")
</template>

<script lang="ts" setup>
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { addToCart } from '@core/usecases/add-to-cart/addToCart';
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart';
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { trackAddToCart } from '@utils/dataLayer';
import { useProductStore } from '@store/productStore';
import { ref, computed } from 'vue';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';

defineProps({
  item: { type: Object, required: true },
});

const showMaxQuantityMessage = ref(false);
const maxQuantityMessage = ref('');
const productGateway = useProductGateway();
const productStore = useProductStore();

const cart = computed(() => {
  const user = getUserVM();
  return getCartVM(user.address);
});

// Récupérer les données complètes du produit depuis le store
const getFullProductData = (uuid: string) => {
  return productStore.getByUuid(uuid);
};

const isAddButtonHidden = (uuid: string) => {
  if (!uuid) return true;
  
  try {
    const currentQuantity = getCartQuantity(uuid);
    const fullProduct = getFullProductData(uuid);
    
    if (!fullProduct) return true;
    
    // Cas 1: C'est un médicament (limite fixe de 5)
    if (fullProduct.isMedicine && currentQuantity >= 5) return true;
    
    // Cas 2: Une quantité maximale est spécifiée
    if (fullProduct.maxQuantityForOrder !== undefined && currentQuantity >= fullProduct.maxQuantityForOrder) return true;
    
    // Cas 3: Vérifier le stock disponible
    if (fullProduct.availableStock !== undefined && currentQuantity >= fullProduct.availableStock) return true;
    
    // Aucune limite atteinte, afficher le bouton
    return false;
  } catch (error) {
    console.error('Erreur lors de la vérification des limites:', error);
    return true; // En cas d'erreur, cacher le bouton par sécurité
  }
};

const getCartQuantity = (uuid: string) => {
  return cart.value.items[uuid]?.quantity || 0;
};

const addItemToCart = async (uuid: string) => {
  try {
    const currentQuantity = getCartQuantity(uuid);
    const fullProduct = getFullProductData(uuid);
    
    if (!fullProduct) {
      console.error('Produit non trouvé:', uuid);
      return;
    }
    
    // Réinitialiser le message d'erreur
    showMaxQuantityMessage.value = false;
    
    // Cas 1: C'est un médicament (limite fixe de 5)
    if (fullProduct.isMedicine && currentQuantity >= 5) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = 'Quantité maximale atteinte pour ce médicament (5 par commande)';
      return;
    }
    
    // Cas 2: Une quantité maximale est spécifiée
    if (fullProduct.maxQuantityForOrder !== undefined && currentQuantity >= fullProduct.maxQuantityForOrder) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = `Quantité maximale atteinte (${fullProduct.maxQuantityForOrder} par commande)`;
      return;
    }
    
    // Cas 3: Vérifier le stock disponible
    if (fullProduct.availableStock !== undefined && currentQuantity >= fullProduct.availableStock) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = 'Stock maximum atteint';
      return;
    }
    
    // Ajouter au panier
    await addToCart(uuid, productGateway);
    
    // Notifications
    sendUserNotif();
    
    // Vérifier à nouveau les limites après l'ajout (avec un petit délai pour que le store se mette à jour)
    setTimeout(() => {
      const updatedQuantity = getCartQuantity(uuid);
      
      if (fullProduct.isMedicine && updatedQuantity >= 5) {
        showMaxQuantityMessage.value = true;
        maxQuantityMessage.value = 'Quantité maximale atteinte pour ce médicament (5 par commande)';
      } else if (fullProduct.maxQuantityForOrder !== undefined && updatedQuantity >= fullProduct.maxQuantityForOrder) {
        showMaxQuantityMessage.value = true;
        maxQuantityMessage.value = `Quantité maximale atteinte (${fullProduct.maxQuantityForOrder} par commande)`;
      } else if (fullProduct.availableStock !== undefined && updatedQuantity >= fullProduct.availableStock) {
        showMaxQuantityMessage.value = true;
        maxQuantityMessage.value = 'Stock maximum atteint';
      }
    }, 100);
    
    // Tracking dataLayer add_to_cart
    try {
      trackAddToCart(fullProduct, 1);
    } catch (err) {
      console.error('Erreur lors du tracking add_to_cart:', err);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout au panier:', error);
  }
};

const removeItemFromCart = (uuid: string) => {
  // Réinitialiser le message d'erreur lors de la suppression
  showMaxQuantityMessage.value = false;
  removeFromCart(uuid);
};

// Notification pour l'utilisateur
const sendUserNotif = () => {
  setTimeout(sendNotifCart, 0);
  setTimeout(removeFirstNotification, 1500);
};
</script>