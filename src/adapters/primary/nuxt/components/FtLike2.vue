<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes favoris
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
        div.flow-root
            ul.-my-6.divide-y.divide-gray12.text-left
                div(v-for='item in cart.items' :key="item.uuid")
                    ft-product-cart(:item="item")
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    div.mt-4
        ft-button.button-solid.w-full.text-xl(@click="close") Reprendre mes achats
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM'
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart'
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm'
import { getLikeVM } from '@adapters/primary/viewModels/get-like/getLikeVM'

const router = useRouter()

const likeQuantity = ref<LikeQuantityVM | null>(null)

const cart = computed(() => {
  return getLikeVM()
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'move-stepper'): void
}>()

const close = () => {
  emit('close')
}

function closeModal() {
  emit('close')
}

const validateCart = () => {
  emit('move-stepper')
}

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway())
})
</script>
