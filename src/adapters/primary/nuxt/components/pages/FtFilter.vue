<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Avec le code WEEKENDMAI, du 8 au 11 mai, la livraison est OFFERTE
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes filtres
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.h-4
    h2.font-medium.text-gray-900 Filtre de prix
    div.h-4
    div.px-4
      VueSlider(
        v-model="rangeValues" 
        :min="minMaxValues[0]" 
        :max="minMaxValues[1]" 
        :clickable="true" 
        :dragOnClick="true" 
        :dotSize="17" 
        :height="7" 
        tooltip="always" 
        :tooltip-formatter="(value) => `${Math.floor(value / 100)} €`" 
        :tooltipStyle="{backgroundColor:'#e5017d'}" 
        :lazy="true" 
        :processStyle="{backgroundColor:'#e5017d'}" 
        :dotStyle="{backgroundColor:'#e5017d'}"
        :interval="1"
        @change="(value) => searchPrice(value)")
    div.h-4(v-if="props.facetsVM?.laboratory?.values?.length > 1")
    h2.font-medium.text-gray-900(v-if="props.facetsVM?.laboratory?.values?.length > 1") Filtre marque
    div(v-if="props.facetsVM && props.facetsVM.laboratory && props.facetsVM?.laboratory?.values?.length > 1") 
        div.grid.grid-cols-2.gap-4.mt-4.justify-items-center
            ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='laboratory in props.facetsVM.laboratory.values' :key="laboratory.key" @click='searchLaboratory(laboratory.key)' class="w-full text-center relative"
              :class="{ 'button-solid': laboratoryFilter && laboratoryFilter.includes(laboratory.key) }" 
              @mouseover="setHoveredLaboratory(laboratory.key)" 
              @mouseleave="clearHoveredLaboratory")
                span.text-sm.line-clamp-1 {{ laboratory.key }}
                span.tooltip-text(v-if="hoveredLaboratory === laboratory.key && isTruncated(laboratory.key)") {{ laboratory.key }}

    div.h-4
    ft-button.button-solid.w-full(@click='searchLaboratory(null)' v-if="props.facetsVM?.laboratory?.values?.length > 1")
      icon.icon-md(name="tabler:category")
      span Afficher toutes les marques
    div.h-4
</template>

<script lang="ts" setup>
import VueSlider from 'vue-3-slider-component';
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { ref, computed, watchEffect } from 'vue';

const props = defineProps<{
  facetsVM: any;
  sortType: any;
  laboratoryFilter: any;
}>();

const hoveredLaboratory = ref<string | null>(null); // Variable pour suivre le laboratoire survolé

const setHoveredLaboratory = (key: string) => {
  hoveredLaboratory.value = key;
};

const clearHoveredLaboratory = () => {
  hoveredLaboratory.value = null;
};

const isTruncated = (text: string) => {
  const span = document.createElement('span');
  span.style.display = 'inline-block';
  span.style.width = '140px';
  span.style.whiteSpace = 'nowrap';
  span.innerText = text;
  document.body.appendChild(span);
  const truncated = span.scrollWidth > span.clientWidth;
  document.body.removeChild(span);
  return truncated;
};

const rangeValues = ref(
  props.facetsVM &&
    props.facetsVM.price &&
    props.facetsVM.price.values &&
    props.facetsVM.price.values[0] &&
    props.facetsVM.price.values[1]
    ? [props.facetsVM.price.values[0].count, props.facetsVM.price.values[1].count]
    : [0, 100],
);

const minMaxValues = ref(
  props.facetsVM &&
    props.facetsVM.price &&
    props.facetsVM.price.values &&
    props.facetsVM.price.values[0] &&
    props.facetsVM.price.values[1]
    ? [props.facetsVM.price.values[0].count, props.facetsVM.price.values[1].count]
    : [0, 100],
);

// Initialisation dynamique des valeurs de rangeValues lorsque facetsVM est prêt
watchEffect(() => {
  if (
    props.facetsVM?.price?.values?.[0]?.count !== undefined &&
    props.facetsVM?.price?.values?.[1]?.count !== undefined
  ) {
    rangeValues.value = [props.facetsVM.price.values[0].count, props.facetsVM.price.values[1].count];
  }
});

const cartQuantity = ref(null);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'sortBy', st: number): void;
  (e: 'searchLaboratory', labo: string | null): void;
  (e: 'searchCategory', cat: string | null): void;
  (e: 'searchPrice', price: any): void;
}>();

const close = () => {
  emit('close');
};

const searchLaboratory = (labo: string | null) => {
  emit('searchLaboratory', labo);
  // close();
};

const searchCategory = (cat: string | null) => {
  emit('searchCategory', cat);
  // close();
};

const searchPrice = (price: any) => {
  emit('searchPrice', price);
};

const sortBy = (st: number) => {
  emit('sortBy', st);
  // close();
};
</script>

<style scoped>
.relative {
  position: relative;
}

.tooltip-text {
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.vue-slider-dot-tooltip-inner {
  border-color: #e5017d !important; /* Ajout du border-color personnalisé */
  background-color: #e5017d !important;
  color: #e5017d !important;
}

/* Afficher l'infobulle seulement quand hoveredLaboratory est défini */
.relative:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
