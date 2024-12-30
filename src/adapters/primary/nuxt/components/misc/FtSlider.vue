<template lang="pug">
    div.px-6.py-2(v-if='isLoading')
      div(class='rounded-xl min-h-[335px] bg-gray-200 animate-pulse')
    div(v-else class='').px-4
      swiper-container(
        class='lg:p-2'
        slides-per-view="1"
        speed="500"
        loop="true"
        css-mode="true"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="true"
      )
        swiper-slide(v-for="banner in bannerVM.items" :key="banner.uuid")
          div
            a(v-if="banner.href" :href="banner.href" target="_blank")
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
