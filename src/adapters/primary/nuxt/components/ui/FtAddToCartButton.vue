<template lang="pug">
  div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
    // Afficher "Bientôt de retour" si le stock est négatif ou nul
    div.flex.flex-center.gap-4.text-white.group.flex.items-center.justify-center.p-2.transition-colors.rounded-xl(v-if="availableStock !== undefined && availableStock <= 0")
      p.font-semibold.text-white Bientôt de retour
  
    div.flex.flex-center.gap-4.text-white(v-else-if="cartQuantity && cartQuantity.items && cartQuantity.items[productUuid]")
      ft-button.flex-shrink-0(@click='removeItemFromCart(productUuid)')
        icon.icon-sm(name="ph:minus-bold")
      p.text-lg.font-semibold {{ cartQuantity.items[productUuid] }}
  
      // Bouton d'ajout avec condition sur le productUuid et la quantité
      ft-button(@click='addItemToCart(productUuid)').flex-shrink-0(v-if="!isAddButtonHidden(productUuid)")
        icon.icon-sm(name="ph:plus-bold")
  
    ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold(
      v-else-if="cartQuantity && cartQuantity.items && !cartQuantity.items[productUuid]" 
      @click='addItemToCart(productUuid)' 
      :disabled="availableStock !== undefined && availableStock <= 0"
    )
      span Ajouter au panier
      icon.icon-sm(name="ph:plus-bold")
      
    // Message de limite atteinte si nécessaire
    div.text-xs.text-white.text-center.mt-1(v-if="showMaxQuantityMessage")
      p {{ maxQuantityMessage }}
  </template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { addToCart } from '@core/usecases/add-to-cart/addToCart';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart';
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { trackAddToCart } from '@utils/dataLayer';
import { useProductStore } from '@store/productStore';

const props = defineProps({
  productUuid: { type: String, required: true },
  isMedicine: { type: Boolean, default: false },
  availableStock: { type: Number, default: undefined },
  maxQuantity: { type: Number, default: undefined }
});

const cartQuantity = ref(null);
const showMaxQuantityMessage = ref(false);
const maxQuantityMessage = ref('');
const productGateway = useProductGateway();
const productStore = useProductStore();

// Récupérer la quantité du panier au montage
onMounted(async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
  } catch (error) {
    console.error('Erreur lors de la récupération de la quantité du panier:', error);
    cartQuantity.value = { items: {}, totalQuantity: 0 };
  }
});

// Fonction pour supprimer un article du panier
const removeItemFromCart = (uuid) => {
  showMaxQuantityMessage.value = false;
  removeFromCart(uuid);
  
  // Mise à jour locale de la quantité dans le panier
  setTimeout(async () => {
    try {
      cartQuantity.value = await getCartQuantityVM(useProductGateway());
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la quantité du panier:', error);
    }
  }, 100);
};

// Fonction pour ajouter un article au panier
const addItemToCart = async (uuid) => {
  try {
    const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;
    
    // Cas 1: C'est un médicament (limite fixe de 5)
    if (props.isMedicine && currentQuantity >= 5) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = 'Quantité maximale atteinte pour ce médicament (5 par commande)';
      return;
    }
    
    // Cas 2: Une quantité maximale est spécifiée
    if (props.maxQuantity !== undefined && currentQuantity >= props.maxQuantity) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = `Quantité maximale atteinte (${props.maxQuantity} par commande)`;
      return;
    }
    
    // Cas 3: Vérifier le stock disponible
    if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = 'Stock maximum atteint';
      return;
    }
    
    // Ajouter au panier
    await addToCart(uuid, productGateway);
    
    // Notifications
    sendUserNotif();
    
    // Mettre à jour la quantité dans le panier
    setTimeout(async () => {
      try {
        cartQuantity.value = await getCartQuantityVM(useProductGateway());
        
        // Vérifier à nouveau les limites après l'ajout
        const updatedQuantity = cartQuantity.value?.items?.[uuid] || 0;
        
        if (props.isMedicine && updatedQuantity >= 5) {
          showMaxQuantityMessage.value = true;
          maxQuantityMessage.value = 'Quantité maximale atteinte pour ce médicament (5 par commande)';
        } else if (props.maxQuantity !== undefined && updatedQuantity >= props.maxQuantity) {
          showMaxQuantityMessage.value = true;
          maxQuantityMessage.value = `Quantité maximale atteinte (${props.maxQuantity} par commande)`;
        } else if (props.availableStock !== undefined && updatedQuantity >= props.availableStock) {
          showMaxQuantityMessage.value = true;
          maxQuantityMessage.value = 'Stock maximum atteint';
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la quantité du panier:', error);
      }
    }, 100);
    
    // Tracking dataLayer add_to_cart (si possible)
    try {
      const product = productStore.getById(uuid);
      if (product) {
        trackAddToCart(product, 1);
      }
    } catch (err) {
      console.error('Erreur lors du tracking add_to_cart:', err);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout au panier:', error);
  }
};

// Fonction pour vérifier si le bouton d'ajout doit être caché
const isAddButtonHidden = (uuid) => {
  if (!uuid || !cartQuantity.value || !cartQuantity.value.items) return true;
  
  const currentQuantity = cartQuantity.value.items[uuid] || 0;
  
  // Cas 1: C'est un médicament (limite fixe de 5)
  if (props.isMedicine && currentQuantity >= 5) return true;
  
  // Cas 2: Une quantité maximale est spécifiée
  if (props.maxQuantity !== undefined && currentQuantity >= props.maxQuantity) return true;
  
  // Cas 3: Vérifier le stock disponible
  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) return true;
  
  // Aucune limite atteinte, afficher le bouton
  return false;
};

// Notification pour l'utilisateur
const sendUserNotif = () => {
  setTimeout(sendNotifCart, 0);
  setTimeout(removeFirstNotification, 1500);
};
</script>