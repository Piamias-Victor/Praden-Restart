<template lang="pug">
  div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
  
    // Afficher "Bientôt de retour" si le stock est négatif
    div.flex.flex-center.gap-4.text-white.group.flex.items-center.justify-center.p-2.transition-colors.rounded-xl(v-if="props.availableStock !== undefined && props.availableStock < 0")
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
  </template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { addToCart } from '@core/usecases/add-to-cart/addToCart';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart';
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';

const props = defineProps({
  productUuid: { type: String, required: true },
  isMedicine: { type: Boolean, required: true },
  availableStock: { type: Number, required: false }, // Optionnel
});

const cartQuantity = ref<CartQuantityVM | null>(null);

const limit = ref(false);

const removeItemFromCart = (uuid: string) => {
  if (
    props.isMedicine &&
    cartQuantity &&
    cartQuantity.value &&
    cartQuantity.value.items &&
    cartQuantity.value.items[uuid] <= 6
  ) {
    limit.value = false;
  }
  removeFromCart(uuid);
};

const addItemToCart = (uuid: string) => {
  const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

  if (props.isMedicine && currentQuantity >= 5) {
    limit.value = true;
    return;
  }

  if (props.availableStock !== undefined && currentQuantity >= props.availableStock) {
    limit.value = true;
    return;
  }

  limit.value = false;
  addToCart(uuid, useProductGateway());
  sendUserNotif();
};

const isAddButtonHidden = (uuid: string) => {
  const currentQuantity = cartQuantity.value?.items?.[uuid] || 0;

  console.log('props.availableStock', props.availableStock)

  if (props.isMedicine && currentQuantity >= 6) return true;
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
});
</script>
