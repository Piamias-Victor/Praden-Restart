<template lang="pug">
ft-header
ft-divider.mt-3.pt-6
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
ft-divider.mt-3.pt-6
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
div.mt-4
div.flex.items-center.gap-2.text-left.px-3
    div(v-if='user').flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchUser')
        icon.icon-xs(name="iconamoon:check-bold")
    div(v-if='!user').bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchUser')
    span(@click='switchNewsletter') Créer un compte pour enregistrer toutes mes informations
div.mt-4
div.flex.items-center.gap-2.text-left.px-3
    div(v-if='newsletter').flex.items-center.justify-center.bg-main.border.border-2.border-main.h-6.w-6.rounded-md.text-white(@click='switchNewsletter')
        icon.icon-xs(name="iconamoon:check-bold")
    div(v-if='!newsletter').bg-white.border.border-2.border-main.h-6.w-6.rounded-md(@click='switchNewsletter')
    span(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
div.mt-4
    ft-button.button-solid.w-full.text-xl(@click="validateCart") Paiement
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })

const newsletter = ref(false)
const user = ref(false)
const router = useRouter()

const validateCart = () => {
  router.push('/checkout/success')
}

const switchUser = () => {
  user.value = !user.value
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
