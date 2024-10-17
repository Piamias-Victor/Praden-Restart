<template lang="pug">
div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
  div.flex.flex-center.gap-4.text-white(v-if="cartQuantity && cartQuantity.items && cartQuantity.items[productUuid]")
    ft-button.flex-shrink-0(@click='removeItemFromCart(productUuid)')
        //- icon.icon-sm(name="ph:minus-bold")
        span -
    p.text-lg.font-semibold {{ cartQuantity.items[productUuid] }}
    ft-button.flex-shrink-0(@click='addItemToCart(productUuid)')
      //- icon.icon-sm(name="ph:plus-bold")
      span +
  ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold(v-if="cartQuantity && cartQuantity.items && !cartQuantity.items[productUuid]" @click='addItemToCart(productUuid)')
      span Ajouter au panier
      //- icon.icon-sm(name="ph:plus-bold")
      span +
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { addToCart } from '@core/usecases/add-to-cart/addToCart'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart'
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';

defineProps({
  productUuid: { type: String, required: true }
})

const cartQuantity = ref<CartQuantityVM | null>(null)

const removeItemFromCart = (uuid: string) => {
  removeFromCart(uuid)
}

const addItemToCart = (uuid: string) => {
  addToCart(uuid, useProductGateway())
  sendUserNotif()
}

const sendUserNotif = () => {
  setTimeout(sendNotifCart)
  setTimeout(removeFirstNotification, 1500)
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})
</script>
