<template lang="pug">
  div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
  
    // Afficher "Bientôt de retour" si le stock est négatif ou nul
    div.flex.flex-center.gap-4.text-white.group.flex.items-center.justify-center.p-2.transition-colors.rounded-xl(v-if="props.availableStock !== undefined && props.availableStock <= 0")
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
      :disabled="props.availableStock !== undefined && props.availableStock <= 0"
    )
      span Ajouter au panier
      icon.icon-sm(name="ph:plus-bold")
      
    // Message de limite atteinte si nécessaire
    div.text-xs.text-white.text-center.mt-1(v-if="showMaxQuantityMessage && hasMaxQuantity")
      p Quantité maximale atteinte ({{ maxQuantity }} par commande)
  </template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { addToCart } from '@core/usecases/add-to-cart/addToCart';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart';
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { trackAddToCart } from '@utils/dataLayer'; // Import fonction dataLayer

const props = defineProps({
  productUuid: { type: String, required: true },
  isMedicine: { type: Boolean, required: true },
  availableStock: { type: Number, required: false }, // Optionnel
});

const cartQuantity = ref<any | null>(null);
const limit = ref(false);
const productGateway = useProductGateway();
const maxQuantity = ref(999999); // Valeur très élevée par défaut (pas de limite)
const hasMaxQuantity = ref(false); // Flag pour savoir si une limite existe
const productDetail = ref<any | null>(null);
const showMaxQuantityMessage = ref(false);

// Récupérer les détails du produit pour obtenir maxQuantityForOrder
onMounted(async () => {
  try {
    productDetail.value = await productGateway.getByUuid(props.productUuid);
    if (productDetail.value && productDetail.value.maxQuantityForOrder) {
      maxQuantity.value = productDetail.value.maxQuantityForOrder;
      hasMaxQuantity.value = true; // Une limite existe
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du produit:', error);
  }
});

const removeItemFromCart = (uuid: string) => {
  showMaxQuantityMessage.value = false; // Masquer le message quand on diminue la quantité
  if (
    props.isMedicine &&
    cartQuantity &&
    cartQuantity.value &&
    cartQuantity.value.items &&
    cartQuantity.value.items[uuid] <= (props.isMedicine ? 5 : maxQuantity.value)
  ) {
    limit.value = false;
  }
  removeFromCart(uuid);
};

const addItemToCart = async (uuid: string) => {
  const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

  // Pour les médicaments, limite fixe de 5
  if (props.isMedicine && currentQuantity >= 5) {
    limit.value = true;
    showMaxQuantityMessage.value = true;
    return;
  }

  // Pour les autres produits, vérifier maxQuantityForOrder seulement s'il existe
  if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
    limit.value = true;
    showMaxQuantityMessage.value = true;
    return;
  }

  // Toujours vérifier le stock disponible
  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
    limit.value = true;
    showMaxQuantityMessage.value = true;
    return;
  }

  limit.value = false;
  addToCart(uuid, productGateway);
  sendUserNotif();
  
  // Tracking dataLayer add_to_cart
  try {
    const product = await productGateway.getByUuid(uuid);
    trackAddToCart(product, 1); // Envoyer événement add_to_cart
  } catch (err) {
    console.error('Erreur lors du tracking add_to_cart:', err);
  }
};

const isAddButtonHidden = (uuid: string) => {
  const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

  // Pour les médicaments, limite fixe de 6
  if (props.isMedicine && currentQuantity >= 6) return true;
  
  // Pour les autres produits, vérifier maxQuantityForOrder seulement s'il existe
  if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) return true;
  
  // Toujours vérifier le stock disponible
  if (props.availableStock !== undefined && props.availableStock <= 0) return true;
  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) return true;

  return false;
};

const sendUserNotif = () => {
  setTimeout(sendNotifCart);
  setTimeout(removeFirstNotification, 1500);
};

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway());

  // Vérifier si la quantité actuelle a atteint la limite
  if (hasMaxQuantity.value && cartQuantity.value?.items?.[props.productUuid] >= maxQuantity.value) {
    showMaxQuantityMessage.value = true;
  } else if (props.isMedicine && cartQuantity.value?.items?.[props.productUuid] >= 5) {
    showMaxQuantityMessage.value = true;
  } else {
    showMaxQuantityMessage.value = false;
  }
});
</script>