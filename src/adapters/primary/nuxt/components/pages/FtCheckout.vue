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
  
      div(v-if="!user.uuid").flex.flex-col.items-center
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
        ft-button.button-solid.text-xl.w-full(@click="login")
            span Connexion
        div.mt-4
        ft-button.bg-contrast.text-xl.w-full(@click="register")
            span S'inscrire
  
      div(v-else)
          h2.font-medium.text-gray-900 1 - Informations de contact
          .mt-2
              ft-input(
                  for="email-address"
                  require
                  type='email'
                  name='email-address'
                  autocomplete='email'
                  @input="mailChanged"
                  :value="user.email"
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
              :user='user'
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
import { ref, computed, watchEffect } from 'vue';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { updateUser } from '@core/usecases/user/updateUser';
import { signInWithGoogle } from '@utils/google';
import { createGoogleUser } from '@core/usecases/user/createGoogleUser';
import { useNuxtApp } from '#app';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';


const user = computed(() => {
  return getUserVM();
});

const nuxtApp = useNuxtApp();
const keycloak = nuxtApp.$keycloak;
const keycloakReady = nuxtApp.$keycloakReady;
const isAuthenticated = ref(false);

const login = () => {
    // Sauvegarder le panier dans le localStorage
    const cart = JSON.stringify(getCartVM().items);
    localStorage.setItem('cart', cart);

    // Redirection pour la connexion
    keycloak?.login().catch((error) => {
        console.error('Erreur lors de la connexion :', error);
    });
};


// Fonction inscription
const register = () => {
    keycloak?.register().catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
    });
};

// Fonction déconnexion
const logout = () => {
    keycloak?.logout({ redirectUri: window.location.origin }).catch((error) => {
        console.error('Erreur lors de la déconnexion :', error);
    });
};


const newsletter = ref(false);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'move-stepper'): void;
}>();

const close = () => {
  emit('close');
};

const switchNewsletter = () => {
  newsletter.value = !newsletter.value;
};

const mailChanged = (e: any) => {
  user.value.email = e.target.value;
};

const phoneChanged = (e: any) => {
  user.value.phone = e.target.value;
};

const firstnameChanged = (value: string) => {
  user.value.firstname = value;
};

const lastnameChanged = (value: string) => {
  user.value.lastname = value;
};

const countryChanged = (value: string) => {
  user.value.address.country = value;
};

const addressChanged = (value: string) => {
  user.value.address.address = value;
};

const appartementChanged = (value: string) => {
  user.value.address.appartement = value;
};

const cityChanged = (value: string) => {
  user.value.address.city = value;
};

const zipChanged = (value: string) => {
  user.value.address.zip = value;
};

const isFormValid = computed(() => {
  return (
    user.value.firstname &&
    user.value.lastname &&
    user.value.phone &&
    user.value.email &&
    user.value.address &&
    user.value.address.country &&
    user.value.address.zip &&
    user.value.address.city
  );
});

const validateUser = () => {
  updateUser(user.value);
  emit('move-stepper');
};

const connectWithGoogle = async () => {
  try {
    const googleUser = await signInWithGoogle();
    createGoogleUser(googleUser);
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google:', error);
  }
};

const openLoginPage = () => {
  window.location.href = '/login';
};

const openRegisterPage = () => {
  window.location.href = '/register';
};
</script>
