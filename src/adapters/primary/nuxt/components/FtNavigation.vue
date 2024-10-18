<template lang="pug">
div.fixed.w-full.flex.justify-center.z-10.bottom-5.left-0
    //- pre {{cartQuantity}}
    div.bg-white.rounded-full.p-2.flex.items-center.justify-center.shadow-xl(class='w-[90vw] sm:w-[40vw]')
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openLike" :class='color2')
            icon.icon-lg(name="ph:heart-bold")
            span(v-if="likeQuantity && likeQuantity.totalQuantity") {{ likeQuantity.totalQuantity }}
        ft-button.w-full.text-primary11.flex.items-center.justify-center
            icon.icon-lg(name="iconamoon:home-bold")
        ft-button.w-full.text-contrast.flex.items-center.justify-center(@click="openCart" :class='color')
            icon.icon-lg(name="akar-icons:shopping-bag")
            span(v-if="cartQuantity && cartQuantity.totalQuantity") {{ cartQuantity.totalQuantity }}
ft-panel(v-if="cartOpened" @close="closeCart")
ft-like(v-if="likeOpened" @close="closeLike")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm'
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM'

export interface CartQuantityVM {
  items: HashTable<number>
  totalQuantity: number
  medecine: boolean
}

export interface LikeQuantityVM {
  items: HashTable<number>
  totalQuantity: number
}
const color = ref('text-contrast')

const color2 = ref('text-contrast')

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

watchEffect(async () => {
  if (
    cartQuantity.value &&
    cartQuantity.value.totalQuantity &&
    cartQuantity.value.totalQuantity === 0
  )
    color.value = 'text-contrast'
  else if (
    cartQuantity.value &&
    cartQuantity.value.totalQuantity &&
    cartQuantity.value.totalQuantity !== 0
  )
    color.value = 'text-main'
  else color.value = 'text-contrast'
})

watchEffect(async () => {
  if (
    likeQuantity.value &&
    likeQuantity.value.totalQuantity &&
    likeQuantity.value.totalQuantity === 0
  )
    color2.value = 'text-contrast'
  else if (
    likeQuantity.value &&
    likeQuantity.value.totalQuantity &&
    likeQuantity.value.totalQuantity !== 0
  )
    color2.value = 'text-main'
  else color2.value = 'text-contrast'
})

// Watch for like quantity changes
watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway())
})
</script>
