<template lang="pug">
  div.px-6.py-2(v-if='isLoading')
    div(class='rounded-xl min-h-[335px] bg-gray-200 animate-pulse')
  
  div(v-else class='relative px-4') 
    swiper-container(
      class='lg:p-2'
      slides-per-view="1"
      speed="1000"
      loop="true"
      css-mode="true"
      autoplay-delay="5000"
      autoplay-disable-on-interaction="true"
      navigation="true"
    )
      swiper-slide(v-for="banner in bannerVM.items" :key="banner.uuid")
        div
          a(v-if="banner.href" :href="banner.href")
            img.block.rounded-xl.w-full(
              :src="banner.image"
              :alt="`Banner ${banner.order}`"
            )
          img.block.rounded-xl.w-full(
            v-else
            :src="banner.image"
            :alt="`Banner ${banner.order}`"
          )
  </template>
  
  <script lang="ts" setup>
  import { register } from 'swiper/element/bundle';
  import { ref, onMounted } from 'vue';
  
  const props = defineProps<{
    bannerVM: any;
  }>();
  
  register();
  
  const isLoading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  });
  </script>
  
  <style scoped>
  /* 🔴 Rendre les flèches roses */
  swiper-container::part(button-prev),
  swiper-container::part(button-next) {
    color: #e91e63 !important; /* Rose vif */
    font-size: 24px; /* Ajuste la taille */
  }
  
  /* Optionnel : Changer la couleur de fond des flèches */
  swiper-container::part(button-prev),
  swiper-container::part(button-next) {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>