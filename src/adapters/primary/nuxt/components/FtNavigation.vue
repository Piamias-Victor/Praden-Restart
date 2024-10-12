<template lang="pug">
div.fixed.w-full.flex.justify-center.z-10.bottom-5.left-0
    div.bg-white.rounded-full.p-2.flex.items-center.justify-center.shadow-xl(class='w-[90vw] sm:w-[40vw]')
        ft-button.w-full.text-contrast.flex.items-center.justify-center
            icon.icon-lg(name="ph:heart-bold")
        ft-button.w-full.text-primary11.flex.items-center.justify-center
            icon.icon-lg(name="iconamoon:home-bold")
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openCart")
            icon.icon-lg(name="akar-icons:shopping-bag")
            span(v-if="cartQuantity && cartQuantity.totalQuantity") {{ cartQuantity.totalQuantity }}
ft-panel(v-if="cartOpened" @close="closeCart")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { useProductGateway } from '../../../../../gateways/productGateway'

export interface CartQuantityVM {
  items: HashTable<number>
  totalQuantity: number
  medecine: boolean
}

const cartOpened = ref(false)

const cartQuantity = ref<CartQuantityVM | null>(null)

const openCart = () => {
  cartOpened.value = true
}

const closeCart = () => {
  cartOpened.value = false
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})
</script>
