<template lang="pug">
tab-group.flex.flex-col(as='div').bg-white.rounded-xl.p-2
    //- div.mx-auto.mt-6.hidden.w-full.max-w-2xl(class='sm:block lg:max-w-none')
    //-     tab-list.grid.grid-cols-4.gap-6
    //-         tab.relative.flex.h-24.cursor-pointer.items-center.justify-center.rounded-md.bg-primary.text-sm.font-medium.uppercase.text-primary(
    //-         v-for='(image, index) in images'
    //-         :key='index'
    //-         v-slot='{ selected }'
    //-         class="hover:bg-gray-50 focus:outline-none focus:ring ring-colored ring-opacity-50 ring-offset-4"
    //-         )
    tab-panels(class='max-h-[45vh]')
        tab-panel.flex.justify-center(v-if="images && images.length > 0" class='h-[45vh]' v-for='(image, index) in images' :key='index')
            img.object-cover.object-center(class='' :src='image' alt='produit')
        tab-panel.flex.justify-center(v-else)
            img.object-cover.object-center(class='' src='https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg' alt='image')
    section.mb-2
        div.flex.justify-center.p-1.gap-1
            div.h-1.w-5.bg-black.rounded-full
            div.h-1.w-1.bg-gray-400.rounded-full
            div.h-1.w-1.bg-gray-400.rounded-full
</template>

<script lang="ts" setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';

defineProps({
  images: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>
