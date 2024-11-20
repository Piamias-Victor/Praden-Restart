<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slidetop
                        div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Inscription
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="ph:x-bold")
                            div.mt-4
                            span.font-semibold.text-lg S'inscrire avec...
                            div.mt-4
                            div.flex.flex-col.items-center.gap-4
                                ft-button.bg-contrast.w-full.text-xl(@click='connectWithGoogle')
                                    img.block.h-6.w-auto(
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                                        alt="logo"
                                    )
                                    span Google
                            div.mt-4
                            span.font-semibold.text-lg Ou avec une adresse mail...
                            div.mt-6
                            h2.font-medium.text-gray-900 1 - Informations de contact
                            .mt-4
                                ft-input(
                                for="email-address"
                                require
                                type='email'
                                name='email-address'
                                autocomplete='email'
                                @input="emailChanged"
                                ) 
                                    span.font-semibold.text-sm E-mail
                                div.h-6
                                ft-input(
                                for="phone"
                                require
                                type='text'
                                name='phone'
                                autocomplete='tel'
                                @input="phoneChanged"
                                ) 
                                    span.font-semibold.text-sm Téléphone
                                div.h-6
                            ft-divider.mt-3.pt-6
                            h2.font-medium.text-gray-900 2 - Informations de livraison
                            ft-address-form(
                                :user='user'
                                @firstname-changed="firstnameChanged"
                                @lastname-changed="lastnameChanged"
                                @country-changed="countryChanged"
                                @address-changed="addressChanged"
                                @appartement-changed="appartementChanged"
                                @city-changed="cityChanged"
                                @zip-changed="zipChanged"
                            )
                            div.mt-4
                            div.flex.items-center.gap-2.text-left
                                div(v-if='newsletter').flex.items-center.justify-center.bg-main.border.border-2.border-main.h-6.w-6.rounded-md.text-white(@click='switchNewsletter')
                                    icon.icon-xs(name="iconamoon:check-bold")
                                div(v-if='!newsletter').bg-white.border.border-2.border-main.h-6.w-6.rounded-md(@click='switchNewsletter')
                                span(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
                            div.mt-4
                            ft-button.button-solid.w-full(@click='connect')
                                span.text-lg S'inscrire
</template>

<script lang="ts" setup>
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM'
import { createGoogleUser } from '@core/usecases/user/createGoogleUser'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'
import { signInWithGoogle } from '@utils/google'
import { ref } from 'vue'

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

const newsletter = ref(false)

const connect = () => {
  close()
}

const connectWithGoogle = async () => {
  try {
    const user = await signInWithGoogle()
    createGoogleUser(user)
    close()
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google: ', error)
  }
}

const switchNewsletter = () => {
  newsletter.value = !newsletter.value
}

const emailChanged = (e: any) => {}

const phoneChanged = (e: any) => {}

const firstnameChanged = (value: string) => {}

const lastnameChanged = (value: string) => {}

const countryChanged = (value: string) => {}

const addressChanged = (value: string) => {}

const appartementChanged = (value: string) => {}

const cityChanged = (value: string) => {}

const zipChanged = (value: string) => {}
</script>
