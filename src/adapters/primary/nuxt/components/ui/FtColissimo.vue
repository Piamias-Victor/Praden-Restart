<template lang="pug">
div Test colissimo
div(id="monIdDeWidgetColissimo")
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

// Fonction pour récupérer le token Colissimo
import { getColissimoTokenVM } from '@adapters/primary/viewModels/get-delivery/getColissimoTokenVM';

const token = computed(async () => {
  const tokenValue = await getColissimoTokenVM(); // Récupérer le token
  return tokenValue;
});

// Ajouter dynamiquement le CSS de Mapbox dans le <head>
onMounted(() => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css';
  document.head.appendChild(link);

  // Ajouter le script Colissimo
  const script = document.createElement('script');
  script.src = 'https://ws.colissimo.fr/widget-colissimo/js/jquery.plugin.colissimo.min.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);

  script.onload = () => {
    // Une fois que le script est chargé, on peut initialiser le widget
    token.value.then((token) => {
      const url_serveur = 'https://ws.colissimo.fr';
      const ceCountry = 'FR';
      const ceAddress = '165 chemin des negadoux';
      const ceZipCode = '83140';
      const ceTown = 'Six-Fours-les-Plages';

      // Définir la fonction callback dans le scope global
      window.maMethodeDeCallBack = function (point) {
        console.log('Call back frame');
        console.log(point);
        jQuery('#monIdDeWidgetColissimo').frameColissimoClose();
      };

      // Ouvrir le widget Colissimo avec le token et autres informations
      $('#monIdDeWidgetColissimo').frameColissimoOpen({
        URLColissimo: url_serveur,
        callBackFrame: 'maMethodeDeCallBack',
        ceCountry: ceCountry,
        ceAddress: ceAddress,
        ceZipCode: ceZipCode,
        ceTown: ceTown,
        token: token,
      });
    });
  };
});
</script>

<style scoped>
/* Si tu as des styles spécifiques à ajouter, mets-les ici */
</style>
