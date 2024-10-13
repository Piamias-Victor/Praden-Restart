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
    div.mt-4
    div(v-if="!user.photo").flex.flex-col.items-center.gap-4
      ft-button.bg-contrast.w-full.text-xl(@click='connectWithGoogle')
          img.block.h-6.w-auto(
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt="logo"
          )
          span Préremplissez avec Google
    div.mt-4
    h2.font-medium.text-gray-900 1 - Informations de contact
    .mt-2
        ft-input(
        for="email-address"
        require
        type='email'
        name='email-address'
        autocomplete='email'
        @input="emailChanged"
        :value="email"
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
        :value="phone"
        ) 
            span.font-semibold.text-sm Téléphone
    div.h-4
    h2.font-medium.text-gray-900 2 - Informations de livraison
    ft-address-form(
        :firstName="firstName"
        :lastName="lastName"
        @firstname-changed="firstnameChanged"
        @lastname-changed="lastnameChanged"
        @country-changed="countryChanged"
        @address-changed="addressChanged"
        @appartement-changed="appartementChanged"
        @city-changed="cityChanged"
        @zip-changed="zipChanged"
    )
                
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    div.flex.items-center.gap-2.text-left.px-3
        div(v-if='newsletter').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchNewsletter')
            icon.icon-xs(name="iconamoon:check-bold")
        div(v-if='!newsletter').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchNewsletter')
        span.text-sm(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
    div(v-if="!user.photo").mt-4
        ft-button.bg-contrast.w-full.text-xl(@click="validateUser") Se connecter
    div(v-if="!user.photo").mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateUser") Créer un compte
    div(v-if="user.photo").mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateUser") Choisir ma livraison
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
import { createGoogleUser } from '@core/usecases/user/createGoogleUser'
import { signInWithGoogle } from '@utils/google'
import { ref } from 'vue'
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM'

const router = useRouter()

const newsletter = ref(false)

const user = computed(() => {
  return getUserVM()
})

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const phone = ref('')

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

const switchNewsletter = () => {
  newsletter.value = !newsletter.value
}

const validateUser = () => {
  emit('move-stepper')
}

const connectWithGoogle = async () => {
  try {
    const user = await signInWithGoogle()
    createGoogleUser(user)
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google: ', error)
  }
}

watchEffect(() => {
  if (user.value) {
    email.value = user.value.mail || ''; // Assurez-vous que le champ existe

    const fullName = user.value.name || ''; // Récupérer le nom complet
    const trimmedStr = fullName.trim(); // Supprimer les espaces inutiles

    // Trouver l'index de l'espace
    const spaceIndex = trimmedStr.indexOf(' ');

    // Assignation des valeurs pour le prénom et le nom
    firstName.value = spaceIndex === -1 ? trimmedStr : trimmedStr.substring(0, spaceIndex);
    lastName.value = spaceIndex === -1 ? '' : trimmedStr.substring(spaceIndex + 1);

    phone.value = user.value.phoneNumber || ''; // Assurez-vous que le champ existe
  }
});</script>
