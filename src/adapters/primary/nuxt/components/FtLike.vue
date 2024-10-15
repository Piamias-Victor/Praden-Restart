<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-20(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideleft
                        ft-like2(@close="closeCart")
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

const closeCart = () => {
  closeModal()
}

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

const connexionOpened = ref(false)

const subscribeOpened = ref(false)

const contactOpened = ref(false)

const ordoOpened = ref(false)

const addressOpened = ref(false)

const fileInput = ref(null)

function closeModal() {
  emit('close')
}

const openConnexion = () => {
  connexionOpened.value = true
}

const closeConnexion = () => {
  connexionOpened.value = false
}

const openSubscribe = () => {
  subscribeOpened.value = true
}

const closeSubscribe = () => {
  subscribeOpened.value = false
}

const openContact = () => {
  contactOpened.value = true
}

const closeContact = () => {
  contactOpened.value = false
}

const openOrdo = () => {
  ordoOpened.value = true
}

const closeOrdo = () => {
  ordoOpened.value = false
}

const openAddress = () => {
  addressOpened.value = true
}

const closeAddress = () => {
  addressOpened.value = false
}

const logout = () => {
  logoutUser()
}

const user = computed(() => {
  return getUserVM()
})
</script>
