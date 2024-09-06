<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-20(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slidetop
                        div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Connexion
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="heroicons-outline:x")
                            div.mt-8
                            ft-input(
                                for="email-address"
                                require
                                type='email'
                                name='email-address'
                                autocomplete='email'
                                @input="emailChanged"
                            )
                                span.font-semibold.text-sm E-mail
                            ft-input(
                                for="email-address"
                                require
                                type='email'
                                name='email-address'
                                autocomplete='email'
                                @input="emailChanged"
                            )
                                span.font-semibold.text-sm Mot de passe
                            div.mt-8
                            ft-button.button-solid.w-full.text-lg(@click='connect')
                                span Connexion
                            div.mt-4.flex.items-center.justify-center.text-sm
                                ft-button Mot de passe oublie ?
                            div.mt-8
                            span.font-semibold.text-lg Ou connectez-vous avec...
                            div.mt-8
                            div.flex.flex-col.items-center.gap-4
                                ft-button.bg-contrast.w-full.text-xl(@click='connect')
                                    img.block.h-6.w-auto(
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                                        alt="logo"
                                    )
                                    span Google
                                ft-button.bg-contrast.w-full.text-xl(@click='connect')
                                    img.block.h-6.w-auto(
                                        src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-16.png"
                                        alt="logo"
                                        )
                                    span Apple
</template>

<script lang="ts" setup>
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

function connect() {
  close()
}
</script>
