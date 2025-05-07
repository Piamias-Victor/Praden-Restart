<template lang="pug">
  div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
    // Afficher "Bientôt de retour" si le stock est négatif ou zéro
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
      v-else-if="cartQuantity && cartQuantity.items" 
      @click='addItemToCart(productUuid)' 
      :disabled="props.availableStock !== undefined && props.availableStock <= 0"
    )
      span Ajouter au panier
      icon.icon-sm(name="ph:plus-bold")
      
    // Message de limite atteinte si nécessaire
    div.text-xs.text-white.text-center.mt-1(v-if="showMaxQuantityMessage")
      p {{ maxQuantityMessage }}
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
const productGateway = useProductGateway();
const maxQuantity = ref(0);
const hasMaxQuantity = ref(false);
const showMaxQuantityMessage = ref(false);
const maxQuantityMessage = ref("Quantité maximale atteinte");
const isLoadingProduct = ref(false);
const productLoadError = ref(false);

// Fonction pour récupérer les informations du produit de façon sécurisée
const fetchProductInfo = async () => {
  if (!props.productUuid || isLoadingProduct.value) return;
  
  isLoadingProduct.value = true;
  productLoadError.value = false;
  
  try {
    const productDetail = await productGateway.getByUuid(props.productUuid);
    
    if (productDetail) {
      // Définir la quantité maximale si disponible
      if (productDetail.maxQuantityForOrder) {
        maxQuantity.value = productDetail.maxQuantityForOrder;
        hasMaxQuantity.value = true;
        maxQuantityMessage.value = `Quantité maximale atteinte (${maxQuantity.value} par commande)`;
      } else if (props.isMedicine) {
        // Pour les médicaments sans limite spécifique, on utilise 5 par défaut
        maxQuantity.value = 5;
        hasMaxQuantity.value = true;
        maxQuantityMessage.value = "Limite atteinte (5 médicaments max par commande)";
      }
    }
  } catch (error) {
    console.warn("Erreur lors de la récupération des détails du produit:", error);
    productLoadError.value = true;
    
    // Utiliser des valeurs par défaut en cas d'erreur
    if (props.isMedicine) {
      maxQuantity.value = 5;
      hasMaxQuantity.value = true;
      maxQuantityMessage.value = "Limite atteinte (5 médicaments max par commande)";
    }
  } finally {
    isLoadingProduct.value = false;
  }
};

// Fonction pour mettre à jour la quantité du panier de manière sécurisée
const updateCartQuantity = async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
    
    // Vérifier si la quantité actuelle a atteint la limite
    checkQuantityLimits();
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la quantité du panier:', error);
    // Initialiser avec des valeurs par défaut en cas d'erreur
    cartQuantity.value = { items: {}, total: 0, medicineInfo: {} };
  }
};

// Vérifier si les limites de quantité sont atteintes
const checkQuantityLimits = () => {
  if (!cartQuantity.value?.items || !props.productUuid) return;
  
  const currentQuantity = cartQuantity.value.items[props.productUuid] || 0;
  
  // Vérifier les différentes limites
  if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
    showMaxQuantityMessage.value = true;
  } else if (props.isMedicine && currentQuantity >= 5) {
    showMaxQuantityMessage.value = true;
    maxQuantityMessage.value = "Limite atteinte (5 médicaments max par commande)";
  } else if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
    showMaxQuantityMessage.value = true;
    maxQuantityMessage.value = "";
  } else {
    showMaxQuantityMessage.value = false;
  }
};

const removeItemFromCart = (uuid: string) => {
  removeFromCart(uuid);
  // Masquer le message de limite
  showMaxQuantityMessage.value = false;
  // Mettre à jour le panier après suppression
  setTimeout(() => updateCartQuantity(), 100);
};

const addItemToCart = async (uuid: string) => {
  try {
    const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

    // Pour les médicaments, limite fixe de 5
    if (props.isMedicine && currentQuantity >= 5) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = "Limite atteinte (5 médicaments max par commande)";
      return;
    }

    // Limite personnalisée seulement si elle a été récupérée
    if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
      showMaxQuantityMessage.value = true;
      return;
    }

    // Vérifier le stock disponible
    if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
      showMaxQuantityMessage.value = true;
      maxQuantityMessage.value = "Stock disponible limité";
      return;
    }

    await addToCart(uuid, productGateway);
    sendUserNotif();
    
    // Mettre à jour le panier après ajout
    setTimeout(() => updateCartQuantity(), 100);
    
    // Tracking dataLayer add_to_cart
    try {
      if (!productLoadError.value) {
        const product = await productGateway.getByUuid(uuid);
        if (product) {
          trackAddToCart(product, 1);
        }
      }
    } catch (err) {
      console.error('Erreur lors du tracking add_to_cart:', err);
      // Ne pas bloquer l'ajout si le tracking échoue
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout au panier:', error);
  }
};

const isAddButtonHidden = (uuid: string) => {
  if (!uuid || !cartQuantity.value || !cartQuantity.value.items) return true;
  
  const currentQuantity = cartQuantity.value.items[uuid] || 0;

  // Pour les médicaments, limite fixe
  if (props.isMedicine && currentQuantity >= 5) return true;
  
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

// Initialisation du composant
onMounted(async () => {
  // Essayer de récupérer les informations du produit
  if (props.productUuid) {
    fetchProductInfo();
  }
  
  // Initialiser la quantité du panier
  updateCartQuantity();
});

// Surveiller les changements dans le panier
watchEffect(async () => {
  try {
    await updateCartQuantity();
  } catch (error) {
    console.error('Erreur dans watchEffect:', error);
  }
});

// Surveiller les changements de productUuid
watch(() => props.productUuid, (newValue) => {
  if (newValue) {
    fetchProductInfo();
  }
});
</script>