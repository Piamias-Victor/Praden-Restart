<template lang="pug">
div(v-if="isLoading" class="h-7 w-[33vw] sm:w-[33vw] inline-block rounded-md bg-main")
Vue3Marquee(v-else)
    span(class='text-lg sm:inline sm:w-[33vw]') Livraison offerte pour 69 € d'achat
    span(class='text-lg sm:inline sm:w-[33vw]') Livraison offerte pour 69 € d'achat
    span(class='sm:text-lg sm:inline sm:w-[33vw]') Livraison offerte pour 69 € d'achat
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>
