<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-20(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.bg-background.shadow-xl.animate-slideleft
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                            span Livraison offerte pour 69 € d'achat
                        div.flex-1.overflow-y-auto.py-6.px-4.flex-grow(class="sm:px-6")
                            input(ref="fileInput" type="file" accept=".pdf, .png, .jpg, .jpeg").hidden
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Ordonnance
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
                              span.font-semibold Ordonnance*
                              ft-button.button-solid.w-full(@click="triggerFileInput")
                                  icon.icon-md(name="iconoir:page")
                                  span Déposer une ordo
                              div.mt-2
                              span.font-semibold(v-if='fileIsValid') Votre ordonnance est preste à être envoyée
                              span.font-semibold(v-if='!fileIsValid') Aucun fichier sélectionné
                        div.w-full.justify-end.flex-shrink-0.p-4
                            span.text-xs.font-semibold Vous recevrez un mail quand votre ordonnance sera prête
                            div.mt-2
                            ft-button.button-solid.text-xl.w-full(@click='sendMessage')
                              span Envoyer mon ordonnace
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

const sendMessage = () => {
  close()
}

const fileInput = ref(null)
const fileIsValid = ref(false)

const triggerFileInput = () => {
  fileInput.value.click()
  fileIsValid.value = true
}
</script>
