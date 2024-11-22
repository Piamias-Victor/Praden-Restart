<script setup lang="ts">
import { ref } from 'vue';
import VueSlider from 'vue-3-slider-component';

const rangeValues = ref([20, 80]); // Initialiser avec deux valeurs pour la fourchette de prix
</script>

<template>
  <div>
    <VueSlider v-model="rangeValues" />
    <p>
      Valeur minimum : {{ rangeValues[0] }} - Valeur maximum :
      {{ rangeValues[1] }}
    </p>
  </div>
</template>
