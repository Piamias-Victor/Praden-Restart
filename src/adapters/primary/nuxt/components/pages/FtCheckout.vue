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
  
      div(v-if="!isAuthenticated").flex.flex-col.items-center
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
                  :value="userData.email"
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
                  :value="userData.phone"
              )
                  span.font-semibold.text-sm Téléphone
  
          div.h-4
          h2.font-medium.text-gray-900 2 - Informations de livraison
          ft-address-form(
              :user='userData'
              @firstname-changed="firstnameChanged"
              @lastname-changed="lastnameChanged"
              @country-changed="countryChanged"
              @address-changed="addressChanged"
              @appartement-changed="appartementChanged"
              @city-changed="cityChanged"
              @zip-changed="zipChanged"
          )
          p.text-red-500.text-sm.mt-1(v-if="zipError") {{ zipError }}
          p.text-red-500.text-sm.mt-1(v-if="countryError") {{ countryError }}
      
      // Section RGPD obligatoire
      div.mt-6.pt-4.border-t.border-gray-200.px-3
          h3.font-medium.text-gray-900.mb-3 Consentement et protection des données

          div.flex.items-center.gap-2.text-left.px-3
            div(v-if='newsletter').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchNewsletter')
                icon.icon-xs(name="iconamoon:check-bold")
            div(v-if='!newsletter').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchNewsletter')
            span.text-sm(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
          
          div.mt-4
          // Case à cocher obligatoire pour le traitement des données
          div.flex.items-center.gap-2.text-left.px-3
              div(v-if='dataProcessingConsent').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchDataProcessingConsent')
                  icon.icon-xs(name="iconamoon:check-bold")
              div(v-if='!dataProcessingConsent').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md.mt-1(@click='switchDataProcessingConsent')
              span.text-sm(@click='switchDataProcessingConsent') 
                  | J'accepte que mes données personnelles soient traitées pour la gestion de ma commande.
                  span.text-red-500.ml-1 *
          
          // Texte d'information RGPD
          div.text-xs.text-gray-600.leading-relaxed.mb-2
              | Les informations recueillies font l'objet d'un traitement informatique qui nous est destiné. 
              | Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, 
              | vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, 
              | que vous pouvez exercer en 
              a.text-main.underline(href="mailto:webpharmaciepraden@gmail.com?subject=Demande d'exercice de droits RGPD&body=Bonjour,%0A%0AJe souhaite exercer mes droits concernant mes données personnelles.%0A%0AMerci de me recontacter.%0A%0ACordialement") cliquant ici
          
          // Message d'erreur si consentement non donné
          div.text-red-500.text-xs.mt-1(v-if="showConsentError") 
              | Vous devez accepter le traitement de vos données pour continuer.

      div().mt-4
          ft-button.button-solid.w-full.text-xl(@click="validateUser" :disabled="!isFormValid") Choisir ma livraison
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { updateUser } from '@core/usecases/user/updateUser';
import { useNuxtApp } from '#app';
import { useCartStore } from '@store/cartStore';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';

// Accès à Keycloak via nuxtApp
const nuxtApp = useNuxtApp();
const keycloak = nuxtApp.$keycloak;
const keycloakReady = nuxtApp.$keycloakReady;

// État d'authentification basé sur Keycloak
const isAuthenticated = ref(false);

// Créer un objet utilisateur réactif que nous allons maintenir nous-mêmes
const userData = reactive({
  uuid: '',
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
  address: {
    address: '',
    appartement: '',
    city: '',
    firstname: '',
    lastname: '',
    zip: '',
    country: 'France'
  }
});

// Observer les changements de Keycloak
watch(() => keycloak?.authenticated, (newValue) => {
  if (newValue !== undefined) {
    console.log('[FtAccount] État Keycloak changé:', newValue);
    isAuthenticated.value = newValue;
    
    // Recharger les données utilisateur quand Keycloak change
    loadUserData();
  }
});

// Fonction pour charger les données utilisateur complètes
const loadUserData = () => {
  console.log('[FtAccount] Chargement des données utilisateur...');
  
  try {
    // Obtenir les données de l'utilisateur depuis getUserVM
    const vmUser = getUserVM();
    console.log('[FtAccount] Données getUserVM récupérées:', vmUser);
    
    // Transférer les données de base
    if (vmUser.uuid) userData.uuid = vmUser.uuid;
    if (vmUser.email) userData.email = vmUser.email;
    if (vmUser.firstname) userData.firstname = vmUser.firstname;
    if (vmUser.lastname) userData.lastname = vmUser.lastname;
    if (vmUser.phone) userData.phone = vmUser.phone;
    
    // Transférer les données d'adresse si disponibles
    if (vmUser.address) {
      if (vmUser.address.address) userData.address.address = vmUser.address.address;
      if (vmUser.address.appartement) userData.address.appartement = vmUser.address.appartement;
      if (vmUser.address.city) userData.address.city = vmUser.address.city;
      if (vmUser.address.firstname) userData.address.firstname = vmUser.address.firstname;
      if (vmUser.address.lastname) userData.address.lastname = vmUser.address.lastname;
      if (vmUser.address.zip) userData.address.zip = vmUser.address.zip;
      if (vmUser.address.country) userData.address.country = vmUser.address.country;
    }
    
    // Compléter avec les données de Keycloak si nécessaire
    if (keycloak?.authenticated && keycloak?.tokenParsed) {
      console.log('[FtAccount] Complément avec données Keycloak');
      
      // Utiliser l'ID de Keycloak si on n'a pas d'UUID
      if (!userData.uuid && keycloak.tokenParsed.sub) {
        userData.uuid = keycloak.tokenParsed.sub;
      }
      
      // Compléter l'email si manquant
      if (!userData.email && keycloak.tokenParsed.email) {
        userData.email = keycloak.tokenParsed.email;
      }
      
      // Compléter le prénom si manquant
      if (!userData.firstname && keycloak.tokenParsed.given_name) {
        userData.firstname = keycloak.tokenParsed.given_name;
        // Mettre à jour également dans l'adresse
        if (!userData.address.firstname) {
          userData.address.firstname = keycloak.tokenParsed.given_name;
        }
      }
      
      // Compléter le nom si manquant
      if (!userData.lastname && keycloak.tokenParsed.family_name) {
        userData.lastname = keycloak.tokenParsed.family_name;
        // Mettre à jour également dans l'adresse
        if (!userData.address.lastname) {
          userData.address.lastname = keycloak.tokenParsed.family_name;
        }
      }
      
      // Téléphone (si disponible via Keycloak - dépend de votre configuration)
      if (!userData.phone && keycloak.tokenParsed.phone_number) {
        userData.phone = keycloak.tokenParsed.phone_number;
      }
    }
    
    console.log('[FtAccount] Données utilisateur complètes après chargement:', userData);
  } catch (error) {
    console.error('[FtAccount] Erreur lors du chargement des données utilisateur:', error);
  }
};

const newsletter = ref(false);
const dataProcessingConsent = ref(false); // Nouveau: consentement obligatoire pour le traitement des données
const showConsentError = ref(false); // Pour afficher l'erreur
const zipError = ref<string | null>(null);
const countryError = ref<string | null>(null);
const isZipValid = ref(true);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'move-stepper'): void;
}>();

const close = () => emit('close');

const switchNewsletter = () => {
  newsletter.value = !newsletter.value;
};

const switchDataProcessingConsent = () => {
  dataProcessingConsent.value = !dataProcessingConsent.value;
  if (dataProcessingConsent.value) {
    showConsentError.value = false; // Masquer l'erreur si l'utilisateur coche
  }
};

// Fonctions pour la connexion et l'inscription utilisant Keycloak
const login = async () => {
  console.log('[FtAccount] Tentative de connexion...');
  
  try {
    // Sauvegarder le panier actuel
    const user = getUserVM();
    const cartVM = getCartVM(user.address);
    if (cartVM && cartVM.items) {
      localStorage.setItem('cart', JSON.stringify(cartVM.items));
      console.log('[FtAccount] Panier sauvegardé avant connexion:', Object.keys(cartVM.items).length, 'articles');
    }
    
    // Sauvegarder l'URL actuelle pour redirection post-connexion
    const currentUrl = window.location.href;
    localStorage.setItem('redirectAfterLogin', currentUrl);
    
    if (keycloak) {
      keycloak.login({
        redirectUri: window.location.origin + '/callback'
      }).catch((error) => {
        console.error('[FtAccount] Erreur lors de la connexion:', error);
      });
    } else {
      console.error('[FtAccount] Keycloak n\'est pas initialisé');
    }
  } catch (error) {
    console.error('[FtAccount] Erreur lors de la préparation de la connexion:', error);
  }
};

const register = () => {
  try {
    // Sauvegarder le panier actuel
    const user = getUserVM();
    const cartVM = getCartVM(user.address);
    if (cartVM && cartVM.items) {
      localStorage.setItem('cart', JSON.stringify(cartVM.items));
      console.log('[FtAccount] Panier sauvegardé avant inscription:', Object.keys(cartVM.items).length, 'articles');
    }
    
    // Sauvegarder l'URL actuelle pour redirection post-inscription
    const currentUrl = window.location.href;
    localStorage.setItem('redirectAfterLogin', currentUrl);
    
    if (keycloak) {
      keycloak.register({
        redirectUri: window.location.origin + '/callback'
      }).catch((error) => {
        console.error('[FtAccount] Erreur lors de l\'inscription:', error);
      });
    } else {
      console.error('[FtAccount] Keycloak n\'est pas initialisé');
    }
  } catch (error) {
    console.error('[FtAccount] Erreur lors de la préparation de l\'inscription:', error);
  }
};

// Fonctions d'édition des champs utilisateur
const mailChanged = (e: any) => userData.email = e.target.value;
const phoneChanged = (e: any) => userData.phone = e.target.value;
const firstnameChanged = (value: string) => {
  userData.firstname = value;
  userData.address.firstname = value; // Synchroniser avec l'adresse
};
const lastnameChanged = (value: string) => {
  userData.lastname = value;
  userData.address.lastname = value; // Synchroniser avec l'adresse
};
const countryChanged = (value: string) => {
  userData.address.country = value;
  if (!value) {
    countryError.value = "Veuillez sélectionner un pays";
  } else {
    countryError.value = null;
  }
};
const addressChanged = (value: string) => userData.address.address = value;
const appartementChanged = (value: string) => userData.address.appartement = value;
const cityChanged = (value: string) => userData.address.city = value;

// Validation du code postal
const validateFrenchZip = (zip: string) => {
  const regexFranceMetropole = /^(0[1-9]|[1-8]\d|9[0-5])\d{3}$/;

  if (!regexFranceMetropole.test(zip)) {
    zipError.value = "Nous ne livrons pas à cette adresse.";
    isZipValid.value = false;
  } else {
    zipError.value = null;
    isZipValid.value = true;
  }
};

const zipChanged = (value: string) => {
  userData.address.zip = value;
  validateFrenchZip(value);
};

// Vérification si le formulaire est valide
const isFormValid = computed(() => {
  return (
    dataProcessingConsent.value && // Consentement obligatoire
    userData.firstname &&
    userData.lastname &&
    userData.phone &&
    userData.email &&
    userData.address &&
    userData.address.country &&
    !countryError.value &&
    userData.address.zip &&
    userData.address.city &&
    isZipValid.value
  );
});

// Fonction de validation et envoi du formulaire
const validateUser = () => {
  // Vérifier le consentement avant de procéder
  if (!dataProcessingConsent.value) {
    showConsentError.value = true;
    return;
  }

  // Préparer l'objet utilisateur au format attendu par updateUser
  const userToUpdate = {
    uuid: userData.uuid,
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    phone: userData.phone,
    address: {
      address: userData.address.address,
      appartement: userData.address.appartement,
      city: userData.address.city,
      firstname: userData.address.firstname,
      lastname: userData.address.lastname,
      zip: userData.address.zip,
      country: userData.address.country
    },
    // Optionnel : enregistrer les préférences de consentement
    newsletterConsent: newsletter.value,
    dataProcessingConsent: dataProcessingConsent.value,
  };
  
  console.log('[FtAccount] Mise à jour des informations utilisateur:', userToUpdate);
  updateUser(userToUpdate);
  emit('move-stepper');
};

// Vérification de l'authentification au chargement du composant
onMounted(async () => {
  console.log('[FtAccount] Composant monté, vérification de l\'authentification...');
  
  try {
    // Attendre que Keycloak soit prêt
    await keycloakReady;
    
    // Vérifier l'état d'authentification
    isAuthenticated.value = keycloak?.authenticated || false;
    console.log('[FtAccount] État d\'authentification initial:', isAuthenticated.value);
    
    // Charger les données utilisateur (qu'il soit authentifié ou non)
    loadUserData();
  } catch (error) {
    console.error('[FtAccount] Erreur lors de l\'initialisation:', error);
    isAuthenticated.value = false;
  }
});
</script>