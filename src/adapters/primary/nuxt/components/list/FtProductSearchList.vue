<template lang="pug">
section.px-2.flex.justify-center
    section.py-4.grid.gap-10.w-full(class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5")
        div.px-8.flex.justify-center.items-center(v-for='product in sanitizedProducts' :key="product.uuid")
            ft-product-card(:product="product" @close='close')
</template>

<script lang="ts" setup>
const props = defineProps({
  products: { type: Array, required: true },
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  console.log('ca doit fermer ici aussi en 2')
  emit('close');
};

const sanitizedProducts = computed(() => props.products.map(({ category, ...product }) => product));
</script>
