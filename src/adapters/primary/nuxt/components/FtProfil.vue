<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-20(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideleft
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                            span Livraison offerte pour 69 € d'achat
                        div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Mon profil
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="heroicons-outline:x")
                            div.mt-4
                            div(v-if="user.photo")
                              div.flex.flex-col.items-center.justify-center
                                img.rounded-full.border.border-main.border-2(class='w-[110px] h-[110px]' :src='user.photo', alt='Profile Picture')
                                div.mt-4.text-lg Bonjour,
                                div.font-semibold.text-xl {{user.name}}
                              div.mt-4
                              div.flex.flex-col.gap-4
                                ft-button.button-solid.w-full
                                  icon.icon-md(name="akar-icons:shopping-bag")
                                  span Mes commandes
                                ft-button.button-solid.w-full(@click="openAddress")
                                  icon.icon-md(name="material-symbols:supervised-user-circle-outline")
                                  span Mon profil
                                ft-button.button-solid.w-full(@click="openOrdo")
                                  icon.icon-md(name="iconoir:page")
                                  span Déposer une ordo
                                ft-button.button-solid.w-full(@click="openContact")
                                  icon.icon-md(name="bx:message")
                                  span Nous contacter
                                nuxt-link.w-full(
                                  href="http://search.google.com/local/writereview?placeid=ChIJuZQjzvRCtBIRfsJukIkyXLY"
                                  target="_blank"
                                  @click="clicked"
                                )
                                  ft-button.button-solid.w-full
                                    icon.icon-md(name="ion:logo-google")
                                    span Laisser un avis
                                ft-button.button-solid.w-full(@click='logout')
                                  icon.icon-md(name="tabler:logout")
                                  span Déconnexion
                              ft-contact(v-if="contactOpened" @close="closeContact")
                              ft-ordo(v-if="ordoOpened" @close="closeOrdo")
                              ft-address(v-if="addressOpened" @close="closeAddress")
                            div(v-if="!user.photo").flex.flex-col.items-center
                                div.mt-4
                                img.block.h-48.w-auto(
                                    src="https://www.pharma365.fr/wp-content/uploads/2023/11/logo_Pharmabest.png"
                                    alt="logo"
                                    )
                                div.mt-10
                                span.font-semibold.text-xl REJOIGNEZ-NOUS
                                div.mt-2
                                span.px-4.font-semibold.text-contrast.text Voir vos commandes, mettre à jour vos infos et profiter des meilleures réductions
                                div.mt-10
                                ft-button.button-solid.text-xl.w-full(@click='openConnexion')
                                    span Connexion
                                div.mt-4
                                ft-button.bg-contrast.text-xl.w-full(@click='openSubscribe')
                                    span S'inscrire
                                ft-connexion(v-if="connexionOpened" @close="closeConnexion")
                                ft-subscribe(v-if="subscribeOpened" @close="closeSubscribe")
</template>

<script lang="ts" setup>
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { logoutUser } from '@core/usecases/user/logout';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const connexionOpened = ref(false)

const subscribeOpened = ref(false)

const contactOpened = ref(false)

const ordoOpened = ref(false)

const addressOpened = ref(false)

const fileInput = ref(null)

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

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
