<template lang="pug">
section.px-2
    div.flex.items-center.justify-between
        span.text-lg.font-semibold
            slot
        span.text-xs.text-contrast Voir tout
section.py-4.flex.gap-4.overflow-hidden.overflow-x-auto.no-scrollbar(class='max-w-[200vw]')
    div(v-for='product in products' :key="product.uuid")
        ft-product-card(:product="product")
</template>

<script lang="ts" setup>
defineProps({
  products: { type: Array, required: true }
})
</script>
