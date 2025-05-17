<template lang="pug">
div.flex.flex-col.h-screen
    ft-sticky
        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2
            span Livraison offerte avec le code FETEDESMAMANS
        div.h-4
        ft-header
        div.h-2
    div.flex.flex-col.flex-grow.bg-background.p-3
        div(class='h-[13vh]')
        slot
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'cat' });
</script>
