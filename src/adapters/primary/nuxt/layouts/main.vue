<template lang="pug">
div.flex.flex-col.h-screen
    div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2
        span Livraison offerte pour 69 € d'achat
    div.flex.flex-col.flex-grow.bg-background.p-3
        slot
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })
</script>
