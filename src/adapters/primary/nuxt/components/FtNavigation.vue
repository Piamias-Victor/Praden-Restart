<template lang="pug">
div.fixed.w-full.flex.justify-center.z-10.bottom-5.left-0
    div.bg-white.rounded-full.p-2.flex.items-center.justify-center.shadow-xl(class='w-[90vw]')
        ft-button.w-full.text-contrast.flex.items-center.justify-center
            icon.icon-lg(name="ph:heart-bold")
        ft-button.w-full.text-primary11.flex.items-center.justify-center
            icon.icon-lg(name="iconamoon:home-bold")
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openCart")
            icon.icon-lg(name="akar-icons:shopping-bag")
            span {{ cartQuantity.totalQuantity }}
ft-cart(v-if="cartOpened" @close="closeCart")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'

const cartOpened = ref(false)

const openCart = () => {
  cartOpened.value = true
}

const closeCart = () => {
  cartOpened.value = false
}

const cartQuantity = computed(() => {
  return getCartQuantityVM()
})
</script>
