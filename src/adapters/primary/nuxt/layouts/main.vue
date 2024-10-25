<template lang="pug">
ft-notif
div.flex.flex-col.h-screen.bg-background
    ft-sticky
        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2
            ft-marquee
        div.h-4
        ft-header
        div.h-2
    div.flex.flex-col.flex-grow.bg-background.p-3
        div(class='h-[17vh]')
        slot
    ft-footer
    div(class='min-h-[13vh]').bg-main
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })
</script>
