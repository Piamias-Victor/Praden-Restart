<template lang="pug">
div.fixed.inset-0.z-50.flex.items-center.justify-center.bg-black.bg-opacity-50(v-if="show")
    div.relative.bg-white.p-4.rounded-lg.shadow-lg.overflow-hidden.h-screen.w-screen(class='sm:h-auto sm:w-auto')
      div.flex.items-center.justify-between.gap-8
        span.mb-4.text-xl.font-semibold.hidden(class='sm:block') Sélectionnez un point relais
        ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="closePopup")
          icon.icon-sm(name="ph:x-bold")
      
      // Afficher un loader tant que le widget n'est pas chargé
      div(v-if="isLoading" class="absolute inset-0 bg-white flex items-center justify-center")
        div(class="loader")
      
      div(id="monIdDeWidgetColissimo")
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { onMounted } from 'vue';

// Fonction pour récupérer le token Colissimo
import { getColissimoTokenVM } from '@adapters/primary/viewModels/get-delivery/getColissimoTokenVM';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { getDeliveryVM } from '@adapters/primary/viewModels/get-delivery/getDeliveryVM';
import { useDeliveryStore } from '@store/deliveryStore';

const props = defineProps<{ show: boolean }>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const closePopup = () => {
  emit('close');
};

const token = computed(async () => {
  const tokenValue = await getColissimoTokenVM(); // Récupérer le token
  return tokenValue;
});

// Variable pour suivre l'état du chargement
const isLoading = ref(true);

const user = computed(() => {
  return getUserVM();
});

const updateWidgetText = () => {
  // Créer un observer pour attendre que le texte soit chargé dans le DOM
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      // Vérifie si le noeud a bien été ajouté
      if (mutation.type === 'childList') {
        const widgetTextElement = document.querySelector('.widget_colissimo_text_bouton');
        if (widgetTextElement) {
          widgetTextElement.innerHTML = 'Ton nouveau texte ici'; // Change le texte
          observer.disconnect(); // Arrêter l'observation une fois le texte changé
        }
      }
    }
  });

  // Observer les changements dans l'élément parent du texte
  const targetNode = document.querySelector('.widget_colissimo_bouton_validation');
  if (targetNode) {
    observer.observe(targetNode, { childList: true, subtree: true });
  }
};

const loadColissimoWidget = async () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css';
  document.head.appendChild(link);

  // Ajouter le script Colissimo
  const script = document.createElement('script');
  script.src = 'https://ws.colissimo.fr/widget-colissimo/js/jquery.plugin.colissimo.min.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);

  const style = document.createElement('style');
  style.innerHTML = `
  .widget_colissimo_bouton_validation {
    height: 65px !important; /* Nouvelle hauteur */
    display: flex; /* Utilisation de Flexbox pour aligner le contenu */
    justify-content: center; /* Centrer horizontalement */
    align-items: center; /* Centrer verticalement */
  }
`;
  document.head.appendChild(style);

  script.onload = () => {
    token.value.then((token) => {
      const url_serveur = 'https://ws.colissimo.fr';
      const ceCountry = 'FR';
      const ceAddress = user.value.address.address;
      const ceZipCode = user.value.address.zip;
      const ceTown = user.value.address.city;
      const deliveryMethodsStore = useDeliveryStore();

      window.maMethodeDeCallBack = function (point) {
        console.log('Call back frame');
        console.log('point', point.identifiant);
        deliveryMethodsStore.selected!.point = point.identifiant;
        console.log('deliveryMethods', deliveryMethodsStore);
        // deliveryMethods.selected.point = point.identifiant;
        user.value.billingAddress = {
          firstname: user.value.firstName,
          lastname: user.value.lastName,
          country: user.value.address.country,
          address: user.value.address.address,
          city: user.value.address.city,
          zip: user.value.address.zip,
        };

        user.value.deliveryAddress = {
          firstname: user.value.firstName,
          lastname: user.value.lastName,
          country: user.value.address.country,
          address: point.adresse1,
          city: point.localite,
          zip: point.codePostal,
        };
        // Fermer le widget Colissimo
        jQuery('#monIdDeWidgetColissimo').frameColissimoClose();

        // Fermer le popup également
        closePopup(); // Ferme le popup après la sélection du point relais
      };

      $('#monIdDeWidgetColissimo').frameColissimoOpen({
        URLColissimo: url_serveur,
        callBackFrame: 'maMethodeDeCallBack',
        ceCountry: ceCountry,
        ceAddress: ceAddress,
        ceZipCode: ceZipCode,
        ceTown: ceTown,
        token: token,
      });

      // Mettre à jour le texte après le chargement du widget
      updateWidgetText();

      // Lorsque le widget est chargé, cacher le loader
      isLoading.value = false;
    });
  };
};

watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      isLoading.value = true; // Afficher le loader lors de l'ouverture du popup
      loadColissimoWidget();
    }
  },
);
</script>

<style scoped>
/* Utilisation de ::deep pour cibler l'élément dans le widget Colissimo */
::deep .widget_colissimo_bouton_validation {
  height: 80px !important; /* Nouvelle hauteur */
}

/* Style pour le loader */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #e5017d;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

/* Animation pour le loader */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
