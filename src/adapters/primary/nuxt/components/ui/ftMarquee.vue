<template lang="pug">
div(v-if="isLoading" class="h-7 w-[33vw] sm:w-[33vw] inline-block rounded-md bg-main")
Vue3Marquee(v-else)
    div(class='sm:w-[50vw]')
      span Avec le code WEEKENDMAI, du 8 au 11 mai, la livraison est OFFERTE
      span.text-xs * en point relais - de 5 kg
    div.hidden(class='sm:w-[50vw]')
      span Avec le code WEEKENDMAI, du 8 au 11 mai, la livraison est OFFERTE 
      span.text-xs * en point relais - de 5 kg
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee';

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 1000);
</script>
