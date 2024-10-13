<template lang="pug">
section.px-2.flex.justify-center
    section.py-4.grid.gap-10(class="grid-cols-1 lg:grid-cols-4 xl:grid-cols-5")
        div(v-for='product in products' :key="product.uuid")
            ft-product-card(:product="product")
</template>

<script lang="ts" setup>
defineProps({
  products: { type: Array, required: true }
})
</script>
