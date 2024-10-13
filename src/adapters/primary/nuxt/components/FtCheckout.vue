<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mon Compte
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="heroicons-outline:x")
    div.mt-8
    ft-stepper(:step=2)
    div.mt-8
    h2.font-medium.text-gray-900 1 - Informations de contact
    .mt-2
        ft-input(
        for="email-address"
        require
        type='email'
        name='email-address'
        autocomplete='email'
        @input="emailChanged"
        ) 
            span.font-semibold.text-sm E-mail
        div.h-2
        ft-input(
        for="phone"
        require
        type='text'
        name='phone'
        autocomplete='tel'
        @input="phoneChanged"
        ) 
            span.font-semibold.text-sm Téléphone
    div.h-4
    h2.font-medium.text-gray-900 2 - Informations de livraison
    ft-address-form(
        @firstname-changed="firstnameChanged"
        @lastname-changed="lastnameChanged"
        @country-changed="countryChanged"
        @address-changed="addressChanged"
        @appartement-changed="appartementChanged"
        @city-changed="cityChanged"
        @zip-changed="zipChanged"
    )
                
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    //- div.flex.items-center.gap-2.text-left.px-3
    //-     div(v-if='user').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchUser')
    //-         icon.icon-xs(name="iconamoon:check-bold")
    //-     div(v-if='!user').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchUser')
    //-     span.text-sm(@click='switchNewsletter') Créer un compte pour enregistrer toutes mes informations
    //- div.mt-4
    div.flex.items-center.gap-2.text-left.px-3
        div(v-if='newsletter').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchNewsletter')
            icon.icon-xs(name="iconamoon:check-bold")
        div(v-if='!newsletter').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchNewsletter')
        span.text-sm(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
    div.mt-4
        ft-button.bg-contrast.w-full.text-xl(@click="validateUser") Se connecter
    div.mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateUser") Créer un compte
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

const newsletter = ref(false)
const user = ref(false)

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

const switchUser = () => {
  user.value = !user.value
}

const switchNewsletter = () => {
  newsletter.value = !newsletter.value
}

const validateUser = () => {
  emit('move-stepper')
}
</script>
