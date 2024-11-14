<template lang="pug">
div.px-8.my-4.flex.flex-col.gap-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Marques
    div.flex.items-center.gap-2
        ft-button-animate(
        v-for="letter in alphabet"
        :key="letter"
        class="text-main flex items-center justify-center bg-white w-10 h-10"
        )
        span.text-main.font-semibold.hidden.text-xl {{ letter }}
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // Crée un tableau des lettres de A à Z
</script>
