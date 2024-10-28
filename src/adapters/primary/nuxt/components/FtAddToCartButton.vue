<template lang="pug">
div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
  div.flex.flex-center.gap-4.text-white(v-if="cartQuantity && cartQuantity.items && cartQuantity.items[productUuid]")
    ft-button.flex-shrink-0(@click='removeItemFromCart(productUuid)')
      icon.icon-sm(name="ph:minus-bold")
    p.text-lg.font-semibold {{ cartQuantity.items[productUuid] }}

    // Bouton d'ajout avec condition sur le productUuid et la quantité
    ft-button(@click='addItemToCart(productUuid)').flex-shrink-0(v-if="!isAddButtonHidden(productUuid)")
      icon.icon-sm(name="ph:plus-bold")

  ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold(v-if="cartQuantity && cartQuantity.items && !cartQuantity.items[productUuid]" @click='addItemToCart(productUuid)')
    span Ajouter au panier
    icon.icon-sm(name="ph:plus-bold")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { addToCart } from '@core/usecases/add-to-cart/addToCart'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart'
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif'
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification'

defineProps({
  productUuid: { type: String, required: true }
})

const cartQuantity = ref<CartQuantityVM | null>(null)
const limit = ref(false)

const removeItemFromCart = (uuid: string) => {
  if (
    uuid === '81b02fbc-9cbd-49c9-8a7b-ecd8451b289e' &&
    cartQuantity &&
    cartQuantity.value &&
    cartQuantity.value.items &&
    cartQuantity.value.items[uuid] <= 6
  ) {
    limit.value = false
  }
  removeFromCart(uuid)
}

const addItemToCart = (uuid: string) => {
  if (
    uuid === '81b02fbc-9cbd-49c9-8a7b-ecd8451b289e' &&
    cartQuantity &&
    cartQuantity.value &&
    cartQuantity.value.items &&
    cartQuantity.value.items[uuid] >= 5
  ) {
    limit.value = true
  } else {
    limit.value = false
  }
  addToCart(uuid, useProductGateway())
  sendUserNotif()
}

const isAddButtonHidden = (uuid: string) => {
  return (
    uuid === '81b02fbc-9cbd-49c9-8a7b-ecd8451b289e' &&
    cartQuantity.value &&
    cartQuantity.value.items &&
    cartQuantity.value.items[uuid] >= 6
  )
}

const sendUserNotif = () => {
  setTimeout(sendNotifCart)
  setTimeout(removeFirstNotification, 1500)
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})
</script>
