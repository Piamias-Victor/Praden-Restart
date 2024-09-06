<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-20(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.right-0.flex.max-w-full.w-screen.max-w-md(class="md:pl-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideright
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                            span Livraison offerte pour 69 € d'achat
                        div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Mon panier
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="heroicons-outline:x")
                            div.mt-4
                                div.flow-root
                                    ul.-my-6.divide-y.divide-gray12.text-left
                                        //- div(v-for='item in cart.items' :key="item.uuid")
                                        //-     product-cart(:item="item")
                        div.flex.justify-center.text-sm
                            ft-button.font-semibold.flex.items-center.gap-1.text-sm(class="hover:text-main")
                                span Supprimer mon panier
                                icon.icon-sm(name="heroicons:trash")
                        div.mt-2.border-t.py-6.px-4(class="sm:px-6")
                            div.flex.justify-between.items-center.text-lg
                                p.font-semibold.text-main.text Total panier
                                div.flex.flex-col.pl-2
                                    //- span.text-sm(:class="cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPrice }}
                                    //- span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
                            p.text-xs(class="mt-0.5").text-left Les frais de port ne sont pas compris
                            div.mt-4
                                ft-button.button-solid.w-full.text-xl(@click="validateCart") Paiement
                            div.mt-2.flex.justify-center.text-xs
                                ft-button.w-full.font-semibold.flex.items-center.gap-1.bg-background(class="hover:text-main" @click="close")
                                    span Reprendre mes achats
                                    icon.icon-xs(name="heroicons-outline:arrow-right")
</template>

<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const router = useRouter()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

function closeModal() {
  emit('close')
}

const validateCart = () => {
  router.push('/checkout/new')
  closeModal()
}
</script>
