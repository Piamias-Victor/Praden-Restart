<template lang="pug">
div.bg-white.rounded-xl.pt-2
    div.flex.flex-col.items-center.justify-center.gap-4(class='w-[50vw]')
        nuxt-link.h-full.flex.items-center(
        :href="product.href"
        @click="clicked")
            img(
                :src="product.images[0]"
                :alt="product.name")
    div.w-full.flex.flex-col.px-4
        span.w-full.text-xs.font-semibold.mb-1.line-clamp-2(class='min-h-[8vw]') {{product.name}}
        div.flex.items-center.justify-between.gap-2
            span.font-bold.text-main {{product.price}}
    ft-add-to-cart-button
</template>

<script lang="ts" setup>
defineProps({
  product: { type: Object, required: true }
})
</script>
