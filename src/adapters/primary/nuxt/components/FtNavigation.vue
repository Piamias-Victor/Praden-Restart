<template lang="pug">
div.fixed.w-full.flex.justify-center.z-10.bottom-5.left-0
    div.bg-white.rounded-full.p-2.flex.items-center.justify-center.shadow-xl(class='w-[90vw] sm:w-[40vw]')
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openLike")
            icon.icon-lg(name="ph:heart-bold")
            span(v-if="likeQuantity && likeQuantity.totalQuantity") {{ likeQuantity.totalQuantity }}
        ft-button.w-full.text-primary11.flex.items-center.justify-center
            icon.icon-lg(name="iconamoon:home-bold")
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openCart")
            icon.icon-lg(name="akar-icons:shopping-bag")
            span(v-if="cartQuantity && cartQuantity.totalQuantity") {{ cartQuantity.totalQuantity }}
ft-panel(v-if="cartOpened" @close="closeCart")
ft-like(v-if="likeOpened" @close="closeLike")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm'

export interface CartQuantityVM {
  items: HashTable<number>
  totalQuantity: number
  medecine: boolean
}

export interface LikeQuantityVM {
  items: HashTable<number>
  totalQuantity: number
}

const cartOpened = ref(false)

const likeOpened = ref(false)

const cartQuantity = ref<CartQuantityVM | null>(null)

const likeQuantity = ref<LikeQuantityVM | null>(null)

const openCart = () => {
  cartOpened.value = true
}

const closeCart = () => {
  cartOpened.value = false
}

const openLike = () => {
  likeOpened.value = true
}

const closeLike = () => {
  likeOpened.value = false
}

// Watch for cart quantity changes
watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})

// Watch for like quantity changes
watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway())
})
</script>
