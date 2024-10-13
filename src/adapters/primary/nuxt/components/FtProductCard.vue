<template lang="pug">
div.bg-white.rounded-xl.pt-2.bg-red-40(class='w-[50vw] sm:w-[15vw]')
    div.flex.flex-col.items-center.justify-center.gap-4
        nuxt-link.h-full.flex.items-center(
        :href="product.href"
        @click="clicked")
            img(
                class='max-h-[200px]'
                :src="product.images[0]"
                :alt="product.name")
    div.w-full.flex.flex-col.px-4
        span.w-full.text-xs.font-semibold.mb-1.line-clamp-2(class='min-h-[5vh] sm:min-h-[3vh]') {{product.name}}
        div.flex.items-center.justify-between.gap-2
            span.font-bold.text-main {{product.price}}
    ft-add-to-cart-button(:product-uuid="product.uuid")
</template>

<script lang="ts" setup>
defineProps({
  product: { type: Object, required: true }
})

console.log('ici')
</script>
