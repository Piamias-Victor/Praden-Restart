<template lang="pug">
div(v-if="isLoading" class="h-7 w-[33vw] sm:w-[33vw] inline-block rounded-md bg-main")
Vue3Marquee(v-else)
    div(class='')
      span Avec le code WEEKENDMAI, du 8 au 11 mai, la livraison est OFFERTE (en point relais sans minimum d'achat MAX 5 Kg) 
      span.text-xs * en point relais - de 5 kg
    //- div.hidden(class='sm:text-lg sm:inline sm:w-[50vw]')
    //-   span Livraison offerte pour 69 € d'achat 
    //-   span.text-xs * en point relais - de 5 kg
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee';

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 1000);
</script>
