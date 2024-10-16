<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat

div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes filtres
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="heroicons-outline:x")

    // Slider de prix
    div.mt-4
        vue-slider(
            v-model="priceRange"
            :min="minPrice"
            :max="maxPrice"
            :tooltip="'always'"
            :step="1"
        )

    // Affichage des laboratoires
    div(v-if="props.facetsVM && props.facetsVM.laboratory && props.facetsVM.laboratory.values.length")
        div.grid.grid-cols-2.gap-4.mt-4.justify-items-center
            ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='laboratory in props.facetsVM.laboratory.values' :key="laboratory.key" class="w-full text-center")
                span.whitespace-nowrap {{ laboratory.key }}

    div.mt-8
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import VueSlider from "vue-3-slider-component"; // Import de la bibliothèque

const props = defineProps<{
  facetsVM: any
}>();

const priceRange = ref([0, 100]); // Remplace par les valeurs par défaut
const minPrice = computed(() => props.facetsVM.price.values[0]?.count || 0);
const maxPrice = computed(() => props.facetsVM.price.values[1]?.count || 100);

const emit = defineEmits<{
  (e: 'close'): void
}>();

const close = () => {
  emit('close');
}
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
