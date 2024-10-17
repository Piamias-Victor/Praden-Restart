<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mon panier
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
    ft-stepper(:step=1)
    div.mt-8
        div.flow-root
            ul.-my-6.divide-y.divide-gray12.text-left
                div(v-for='item in cart.items' :key="item.uuid")
                    ft-product-cart(:item="item")
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    div.flex.justify-between.items-center.text-lg
        p.font-semibold.text-main.text Total panier
        div.flex.flex-col.pl-2
            span.text-sm(:class="cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPrice }}
            span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
    p.text-xs(class="mt-0.5").text-left Les frais de port ne sont pas compris
    div.mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateCart" :disabled="cartQuantity && cartQuantity.totalQuantity === 0") Paiement <!-- Vérification ajoutée ici -->
    div.mt-2.flex.justify-center.text-xs
        ft-button.w-full.font-semibold.flex.items-center.gap-1.bg-background(class="hover:text-main" @click="close")
            span Reprendre mes achats
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

const router = useRouter()

const cartQuantity = ref<CartQuantityVM | null>(null)

const cart = computed(() => {
  return getCartVM()
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'move-stepper'): void
}>()

const close = () => {
  emit('close')
}

const validateCart = () => {
  emit('move-stepper')
}

watchEffect(async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway())
  } catch (error) {
    console.error('Erreur lors de la récupération de la quantité du panier', error)
    cartQuantity.value = { totalQuantity: 0 } // Assurer une valeur par défaut si l'appel échoue
  }
})

const removeAllItemFromCart = () => {
  removeAllFromCart()
}
</script>
