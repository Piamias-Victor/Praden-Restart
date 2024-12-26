<template lang="pug">
  button.btn-primary(@click="openPopup") Ouvrir le popup
  //- ft-popup(:show="showPopup" @close="closePopup")
  div(id="widget_colissimo_map") 
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from 'vue';
import { getColissimoTokenVM } from '@adapters/primary/viewModels/get-delivery/getColissimoTokenVM';

const showPopup = ref(false);

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

// Récupérer le token Colissimo
const token = computed(async () => {
  const tokenValue = await getColissimoTokenVM();
  return tokenValue;
});

// Fonction pour charger le script et le widget Colissimo
const loadColissimoWidget = async () => {
  // Ajouter le CSS de Mapbox
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css';
  document.head.appendChild(link);

  // Ajouter le script Colissimo
  const script = document.createElement('script');
  script.src = 'https://ws.colissimo.fr/widget-colissimo/js/jquery.plugin.colissimo.min.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);

  // Initialiser le widget une fois le script chargé
  script.onload = () => {
    token.value.then((token) => {
      const url_serveur = 'https://ws.colissimo.fr';
      const ceCountry = 'FR';
      const ceAddress = '165 chemin des negadoux';
      const ceZipCode = '83140';
      const ceTown = 'Six-Fours-les-Plages';

      // Définir la fonction callback dans le scope global
      window.maMethodeDeCallBack = function (point) {
        jQuery('#widget_colissimo_map').frameColissimoClose();
      };

      // Ouvrir le widget Colissimo avec le token et informations
      jQuery('#widget_colissimo_map').frameColissimoOpen({
        URLColissimo: url_serveur,
        callBackFrame: 'maMethodeDeCallBack',
        ceCountry,
        ceAddress,
        ceZipCode,
        ceTown,
        token,
        displayType: 'mapAndList',
      });
    });
  };
};

// Charger le widget seulement quand `show` devient vrai
watch(
  () => showPopup.value,
  (newValue) => {
    if (newValue) {
      loadColissimoWidget();
    }
  },
);
</script>
