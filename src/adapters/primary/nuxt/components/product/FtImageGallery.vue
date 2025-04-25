<template lang="pug">
  tab-group.flex.flex-col(as='div').bg-white.rounded-xl.p-2
      tab-panels(class='max-h-[45vh]')
          tab-panel.flex.justify-center(v-if="images && images.length > 0" class='h-[45vh]' v-for='(image, index) in images' :key='index')
              img.object-cover.object-center(
                class='' 
                :src='image' 
                :alt='altText || `${index === 0 ? productName : productName + " - Vue " + (index + 1)}` + " - Pharmacie Agnès Praden à Alès"'
                loading='lazy'
              )
          tab-panel.flex.justify-center(v-else)
              img.object-cover.object-center(
                class='' 
                src='https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg' 
                :alt='altText || "Image par défaut - Pharmacie Agnès Praden"'
              )
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
    altText: {
      type: String,
      default: '',
    },
    productName: {
      type: String,
      default: 'Produit',
    },
  });
  </script>