<template lang="pug">
  div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
    // Afficher "Bientôt de retour" si le stock est négatif
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
      :disabled="props.availableStock !== undefined && props.availableStock < 0"
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
const maxQuantity = ref(0);
const hasMaxQuantity = ref(false);
const showMaxQuantityMessage = ref(false);

// Essayez de récupérer maxQuantityForOrder seulement si nécessaire
onMounted(async () => {
  try {
    // Seulement si l'UUID est valide
    if (props.productUuid) {
      const productDetail = await productGateway.getByUuid(props.productUuid);
      if (productDetail && productDetail.maxQuantityForOrder) {
        maxQuantity.value = productDetail.maxQuantityForOrder;
        hasMaxQuantity.value = true;
      }
    }
    
    // Initialisation sécurisée de cartQuantity
    updateCartQuantity();
  } catch (error) {
    // Ignorer silencieusement, la limite ne sera tout simplement pas appliquée
    console.warn("Impossible de récupérer la quantité maximale pour ce produit", error);
  }
});

// Fonction pour mettre à jour la quantité du panier de manière sécurisée
const updateCartQuantity = async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
    
    // Vérifier si la quantité actuelle a atteint la limite
    if (cartQuantity.value?.items) {
      const currentQuantity = cartQuantity.value.items[props.productUuid] || 0;
      
      if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
        showMaxQuantityMessage.value = true;
      } else if (props.isMedicine && currentQuantity >= 5) {
        showMaxQuantityMessage.value = true;
      } else {
        showMaxQuantityMessage.value = false;
      }
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la quantité du panier:', error);
    // Initialiser avec des valeurs par défaut en cas d'erreur
    cartQuantity.value = { items: {}, total: 0, medicineInfo: {} };
  }
};

const removeItemFromCart = (uuid: string) => {
  showMaxQuantityMessage.value = false;
  removeFromCart(uuid);
  // Mettre à jour le panier après suppression
  setTimeout(() => updateCartQuantity(), 100);
};

const addItemToCart = async (uuid: string) => {
  try {
    const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

    // Pour les médicaments, limite fixe de 5
    if (props.isMedicine && currentQuantity >= 5) {
      limit.value = true;
      showMaxQuantityMessage.value = true;
      return;
    }

    // Limite personnalisée seulement si elle a été récupérée
    if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
      limit.value = true;
      showMaxQuantityMessage.value = true;
      return;
    }

    // Vérifier le stock disponible
    if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
      limit.value = true;
      showMaxQuantityMessage.value = true;
      return;
    }

    limit.value = false;
    await addToCart(uuid, productGateway);
    sendUserNotif();
    
    // Mettre à jour le panier après ajout
    setTimeout(() => updateCartQuantity(), 100);
    
    // Tracking dataLayer add_to_cart
    try {
      const product = await productGateway.getByUuid(uuid);
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

const isAddButtonHidden = (uuid: string) => {
  if (!uuid || !cartQuantity.value || !cartQuantity.value.items) return true;
  
  const currentQuantity = cartQuantity.value.items[uuid] || 0;

  // Pour les médicaments, limite fixe
  if (props.isMedicine && currentQuantity >= 6) return true;
  
  // Limite personnalisée seulement si elle a été récupérée
  if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) return true;
  
  // Stock disponible
  if (props.availableStock !== undefined && props.availableStock <= 0) return true;
  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) return true;

  return false;
};

const sendUserNotif = () => {
  setTimeout(sendNotifCart);
  setTimeout(removeFirstNotification, 1500);
};

watchEffect(async () => {
  try {
    await updateCartQuantity();
  } catch (error) {
    console.error('Erreur dans watchEffect:', error);
  }
});
</script>