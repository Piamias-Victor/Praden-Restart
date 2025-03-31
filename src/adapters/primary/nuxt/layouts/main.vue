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
    noscript
      iframe(src="https://www.googletagmanager.com/ns.html?id=GTM-KC4Z26FT" height="0" width="0" style="display:none;visibility:hidden")
</template>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';

definePageMeta({ layout: 'main' });

useHead({
  script: [
    {
      hid: 'gtm-script',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KC4Z26FT');`,
      type: 'text/javascript'
    }
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'gtm-script': ['innerHTML']
  }
})
</script>
