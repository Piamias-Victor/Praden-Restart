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
import { trackAddToCart } from '@utils/dataLayer';
import { useProductStore } from '@store/productStore';

// Cache global des produits pour éviter les requêtes répétées
const productCache = new Map();

const props = defineProps({
  productUuid: { type: String, required: true },
  isMedicine: { type: Boolean, required: true },
  availableStock: { type: Number, required: false },
});

const cartQuantity = ref(null);
const maxQuantity = ref(0);
const hasMaxQuantity = ref(false);
const showMaxQuantityMessage = ref(false);
const productGateway = useProductGateway();
const productStore = useProductStore();

// Récupérer la quantité du panier au montage (une seule fois)
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
    
    // Pour les médicaments, limite fixe de 5
    if (props.isMedicine && currentQuantity >= 5) {
      showMaxQuantityMessage.value = true;
      return;
    }
    
    // Vérifier si la limite de quantité est déjà connue
    if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) {
      showMaxQuantityMessage.value = true;
      return;
    }
    
    // Vérifier le stock disponible
    if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
      showMaxQuantityMessage.value = true;
      return;
    }
    
    // Si on n'a pas encore vérifié les limites de quantité pour ce produit
    if (!hasMaxQuantity.value && !productCache.has(uuid)) {
      try {
        // Vérifier d'abord si le produit est dans le store
        let product = productStore.getById(uuid);
        
        // Si non, faire une requête API (seulement au moment du clic)
        if (!product) {
          product = await productGateway.getByUuid(uuid);
        }
        
        // Mettre en cache le produit
        if (product) {
          productCache.set(uuid, product);
          
          // Vérifier les limites de quantité
          if (product.maxQuantityForOrder) {
            maxQuantity.value = product.maxQuantityForOrder;
            hasMaxQuantity.value = true;
            
            // Vérifier à nouveau si on a atteint la limite
            if (currentQuantity >= maxQuantity.value) {
              showMaxQuantityMessage.value = true;
              return;
            }
          }
        }
      } catch (error) {
        console.error('Erreur lors de la vérification des limites de quantité:', error);
      }
    }
    
    // Ajouter au panier
    await addToCart(uuid, productGateway);
    
    // Notifications
    sendUserNotif();
    
    // Mettre à jour la quantité dans le panier
    setTimeout(async () => {
      try {
        cartQuantity.value = await getCartQuantityVM(useProductGateway());
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la quantité du panier:', error);
      }
    }, 100);
    
    // Tracking dataLayer add_to_cart (seulement si on a le produit)
    try {
      const product = productCache.get(uuid) || productStore.getById(uuid);
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
  
  // Pour les médicaments, limite fixe
  if (props.isMedicine && currentQuantity >= 5) return true;
  
  // Limite personnalisée seulement si elle a été récupérée
  if (hasMaxQuantity.value && currentQuantity >= maxQuantity.value) return true;
  
  // Stock disponible
  if (props.availableStock !== undefined && props.availableStock <= 0) return true;
  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) return true;
  
  return false;
};

// Notification pour l'utilisateur
const sendUserNotif = () => {
  setTimeout(sendNotifCart, 0);
  setTimeout(removeFirstNotification, 1500);
};
</script>