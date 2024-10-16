<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.bg-background.shadow-xl.animate-slidetop
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                            span Livraison offerte pour 69 € d'achat
                        div.flex-1.overflow-y-auto.py-6.px-4.flex-grow(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Contact
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="heroicons-outline:x")
                            div.mt-4
                            ft-input(
                              :value="user.mail"
                              for="email-address"
                              require
                              type='email'
                              name='email-address'
                              autocomplete='email'
                              @input="emailChanged"
                            ) 
                              span.font-semibold E-mail
                            ft-input(
                              :value="user.phone"
                              for="email-address"
                              require
                              type='text'
                              name='email-address'
                              autocomplete='email'
                              @input="emailChanged"
                            ) 
                              span.font-semibold Téléphone
                            div.px-3
                              span.font-semibold Message*
                              textarea.block.w-full.rounded-md.border-light.shadow-sm
                            div.mt-2
                            div.px-3
                              span.font-semibold Sujet*
                              div.w-full.grid.grid-cols-3.gap-4
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!order" @click="selectOrder")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="akar-icons:shopping-bag")
                                    span.text-main.font-semibold Commande
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="order")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="akar-icons:shopping-bag")
                                    span.text-white.font-semibold Commande
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!product" @click="selectProduct")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="mdi:drugs")
                                    span.text-main.font-semibold Produits
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="product")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="mdi:drugs")
                                    span.text-white.font-semibold Produits
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!orderReturn" @click="selectReturn")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="hugeicons:delivery-return-01")
                                    span.text-main.font-semibold Retour
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="orderReturn")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="hugeicons:delivery-return-01")
                                    span.text-white.font-semibold Retour
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!pharmacy" @click="selectPharmacy")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="iconoir:pharmacy-cross-circle")
                                    span.text-main.font-semibold Pharmacie
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="pharmacy")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="iconoir:pharmacy-cross-circle")
                                    span.text-white.font-semibold Pharmacie
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!promo" @click="selectPromo")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="ic:outline-discount")
                                    span.text-main.font-semibold Promotion
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="promo")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="ic:outline-discount")
                                    span.text-white.font-semibold Promotion
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main(v-if="!other" @click="selectOther")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-main(name="tabler:world")
                                    span.text-main.font-semibold Autre
                                button.group.flex.flex-col.items-center.p-2.transition-colors.rounded-xl.border.border-2.border-main.bg-main(v-if="other")
                                  div.flex.flex-col.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
                                    icon.w-16.h-16.text-white(name="tabler:world")
                                    span.text-white.font-semibold Autre
                        div.w-full.justify-end.flex-shrink-0.p-4
                            ft-button.button-solid.text-xl.w-full(@click='sendMessage')
                              span Envoyer mon message
</template>

<script lang="ts" setup>
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM'
import { logoutUser } from '@core/usecases/user/logout'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

function closeModal() {
  emit('close')
}

const user = computed(() => {
  return getUserVM()
})

const order = ref(false)
const product = ref(false)
const orderReturn = ref(false)
const pharmacy = ref(false)
const promo = ref(false)
const other = ref(false)

const deselectAll = () => {
  order.value = false
  product.value = false
  orderReturn.value = false
  pharmacy.value = false
  promo.value = false
  other.value = false
}

const selectOrder = () => {
  deselectAll()
  order.value = true
}

const selectProduct = () => {
  deselectAll()
  product.value = true
}

const selectReturn = () => {
  deselectAll()
  orderReturn.value = true
}

const selectPharmacy = () => {
  deselectAll()
  pharmacy.value = true
}

const selectPromo = () => {
  deselectAll()
  promo.value = true
}

const selectOther = () => {
  deselectAll()
  other.value = true
}

const sendMessage = () => {
  close()
}
</script>
