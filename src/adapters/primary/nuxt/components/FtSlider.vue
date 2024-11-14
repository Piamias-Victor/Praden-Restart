<template lang="pug">
div(class='').px-4
    <swiper-container class='lg:p-2' slides-per-view="1" speed="500" loop="true"  css-mode="true" autoplay-delay="3000" autoplay-disable-on-interaction="true">
        <swiper-slide>
            div
                img.block.rounded-xl.w-full(
                        class='min-h-[100px]'
                        src="https://www.pharmacieagnespraden.com/modules/homeslider/images/5f9ac4dc41bb82bb9190848f261abccd82e3c9b1_2.png"
                        alt="pub"
                        )
        </swiper-slide>
        <swiper-slide>
            div
                img.block.rounded-xl.w-full(
                        class='min-h-[100px]'
                        src="https://www.pharmacieagnespraden.com/modules/homeslider/images/a0f205f092f2c7af41e026eb5307e67611bf0a22_41.png"
                        alt="pub"
                        )
        </swiper-slide>
        <swiper-slide>
            div
                img.block.rounded-xl.w-full(
                        class='min-h-[100px]'
                        src="https://www.pharmacieagnespraden.com/modules/homeslider/images/a292af67d1b798717a60aa1d9b4ce4670a82ccfd_43.png"
                        alt="pub"
                        )
        </swiper-slide>
        <swiper-slide>
            div
                img.block.rounded-xl.w-full(
                        class='min-h-[100px]'
                        src="https://www.pharmacieagnespraden.com/modules/homeslider/images/7644931474904135efcfeeedcfa5301b20de2803_image_123650291.JPG"
                        alt="pub"
                        )
        </swiper-slide>
        <swiper-slide>
            div
                img.block.rounded-xl.w-full(
                        class='min-h-[100px]'
                        src="https://www.pharmacieagnespraden.com/modules/homeslider/images/35e0a49792e43ac7793708d3e84d9c85c35c13f4_image_123650291%20(4).JPG"
                        alt="pub"
                        )
        </swiper-slide>
    </swiper-container>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
</script>

<style scoped>
.swiper-container {
  max-width: 100%;
  margin: auto;
}

.swiper-slide img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

::deep.vue-slider-dot-tooltip-inner {
  border-color: #E5017D !important;
}

/* Si le précédent ne fonctionne pas, essayer un sélecteur plus précis */
::deep.vue-slider-dot-tooltip.vue-slider-dot-tooltip-inner {
  border-color: #E5017D !important;
}

/* Tenter de modifier aussi les autres propriétés qui affectent l'apparence */
::deep.vue-slider-dot-tooltip-inner {
  background-color: #E5017D !important;
  color: #fff !important;
}

@media (max-width: 640px) {
  .swiper-container {
    padding: 0 10px;
  }
  .swiper-slide img {
    height: auto;
    object-fit: cover;
  }
}
</style>
