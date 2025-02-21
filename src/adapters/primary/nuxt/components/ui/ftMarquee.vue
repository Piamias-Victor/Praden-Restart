<template lang="pug">
  div(v-if="isLoading" class="h-7 w-[33vw] sm:w-[33vw] inline-block rounded-md bg-main")
  Vue3Marquee(v-else)
      div(class='sm:text-lg sm:inline sm:w-[50vw] font-bold')
        span 🚚 FRAIS DE PORT OFFERTS DÈS 39€ D'ACHAT ! 🔥 
        span.text-xs * En point relais, -5kg, hors médicaments.  
      div.hidden(class='sm:text-lg sm:inline sm:w-[50vw] font-bold')
        span 🚚 FRAIS DE PORT OFFERTS DÈS 39€ D'ACHAT ! 🔥 
        span.text-xs * En point relais, -5kg, hors médicaments.  
  </template>
  
  <script lang="ts" setup>
  import { Vue3Marquee } from 'vue3-marquee';
  
  const isLoading = ref(true);
  
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  </script>