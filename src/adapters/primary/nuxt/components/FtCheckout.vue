<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mon Compte
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
    ft-stepper(:step=2)
    div.mt-4
    div(v-if="!user.firstName").flex.flex-col.items-center.gap-4
      ft-button.bg-contrast.w-full.text-xl(@click='connectWithGoogle')
          img.block.h-6.w-auto(
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt="logo"
          )
          span Préremplissez avec Google
    div.mt-4
    div(v-if="!user.firstName").mt-4
        ft-button.button-solid.w-full.text-xl Se connecter
    div.mt-4
    h2.font-medium.text-gray-900 1 - Informations de contact
    .mt-2
        ft-input(
        for="email-address"
        require
        type='email'
        name='email-address'
        autocomplete='email'
        @input="mailChanged"
        :value="user.mail"
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
        :user='newUser'
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
    div().mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateUser" :disabled="!isFormValid") Choisir ma livraison
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
import { ref, computed, watchEffect } from 'vue'
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM'
import { updateUser } from '@core/usecases/user/updateUser'

const router = useRouter()

const newsletter = ref(false)

const user = computed(() => {
  return getUserVM()
})

const newUser = ref({
  firstName: '',
  lastName: '',
  phone: '',
  mail: '',
  country: '',
  postal: '',
  address: '',
  appartement: '',
  city: ''
})

const email = ref('')
const phone = ref('')

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'move-stepper'): void
}>()

const close = () => {
  emit('close')
}

const switchNewsletter = () => {
  newsletter.value = !newsletter.value
}

// Fonctions pour mettre à jour newUser
const firstnameChanged = (value: string) => {
  newUser.value.firstName = value
}

const mailChanged = (e: any) => {
  newUser.value.mail = e.target.value
}

const phoneChanged = (e: any) => {
  newUser.value.phone = e.target.value
}

const lastnameChanged = (value: string) => {
  newUser.value.lastName = value
}

const countryChanged = (value: string) => {
  newUser.value.country = value
}

const addressChanged = (value: string) => {
  newUser.value.address = value
}

const appartementChanged = (value: string) => {
  newUser.value.appartement = value
}

const cityChanged = (value: string) => {
  newUser.value.city = value
}

const zipChanged = (value: string) => {
  newUser.value.postal = value
}

const isFormValid = computed(() => {
  return newUser.value.firstName && 
         newUser.value.lastName && 
         newUser.value.phone && 
         newUser.value.mail && 
         newUser.value.country && 
         newUser.value.postal && 
         newUser.value.city
})

watchEffect(() => {
  if (user.value) {
    newUser.value.firstName = user.value.firstName || ''
    newUser.value.lastName = user.value.lastName || ''
    newUser.value.phone = user.value.phoneNumber || ''
    newUser.value.mail = user.value.mail || ''
    newUser.value.country = user.value.country || ''
    newUser.value.postal = user.value.postal || ''
    newUser.value.address = user.value.address || ''
    newUser.value.city = user.value.city || ''
    newUser.value.appartement = user.value.appartement || ''
  }
})

const validateUser = () => {
  const photo =
    user.value.photo !== ''
      ? user.value.photo
      : 'https://media1.vetsecurite.com/img/cms/BLOG/Workwear/Pr%C3%A9parateur%20pharmacie/Logo-Pharmacie.png'

  updateUser({
    firstName: newUser.value.firstName,
    lastName: newUser.value.lastName,
    phone: newUser.value.phone,
    mail: newUser.value.mail,
    country: newUser.value.country,
    postal: newUser.value.postal,
    address: newUser.value.address,
    appartement: newUser.value.appartement,
    city: newUser.value.city,
    photo
  })
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
</script>
