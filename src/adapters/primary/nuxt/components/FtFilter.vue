<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes filtres
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")

    // Vérification si facetsVM et laboratory existent avant d'afficher
    div.h-4
    h2.font-medium.text-gray-900 1 - Filtre de prix
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
        :tooltip-formatter="(value) => `${value / 100} €`" 
        :tooltipStyle="{backgroundColor:'#e5017d'}" 
        :lazy="true" 
        :processStyle="{backgroundColor:'#e5017d'}" 
        :dotStyle="{backgroundColor:'#e5017d'}"
        :interval="1"
        @change="(value) => searchPrice(value)")
    //- ft-button.button-solid.w-full(@click='sortBy(2)')
    //-   icon.icon-md(name="mdi:tag-arrow-up-outline")
    //-   span Plus chèr au moins chère
    //- div.h-4
    //- ft-button.button-solid.w-full(@click='sortBy(1)')
    //-   icon.icon-md(name="mdi:tag-arrow-down-outline")
    //-   span Moins chèr au plus chère
    div.h-4
    h2.font-medium.text-gray-900 2 - Filtre marque
    div(v-if="props.facetsVM && props.facetsVM.laboratory")
        div.grid.grid-cols-2.gap-4.mt-4.justify-items-center
            ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='laboratory in props.facetsVM.laboratory.values' :key="laboratory.key" @click='searchLaboratory(laboratory.key)' class="w-full text-center")
                span.text-sm.line-clamp-1 {{ laboratory.key }}
    div.h-4
    ft-button.button-solid.w-full(@click='searchLaboratory(null)')
      icon.icon-md(name="tabler:category")
      span Afficher toutes les marques
    div.h-4
    h2.font-medium.text-gray-900 3 - Filtre categories
    div(v-if="props.facetsVM && props.facetsVM.categories")
        div.grid.grid-cols-2.gap-4.mt-4.justify-items-center
            ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='category in props.facetsVM.categories.values' :key="category.key" @click='searchCategory(category.key)' class="w-full text-center")
                span.text-sm.line-clamp-1 {{ category.key }}
    div.h-4
    ft-button.button-solid.w-full(@click='searchLaboratory(null)')
      icon.icon-md(name="tabler:category")
      span Afficher toutes les categories
    div.mt-8
</template>

<script lang="ts" setup>
import VueSlider from "vue-3-slider-component";
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM'
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart'
import { SortType } from '@utils/sort'
import { ref, computed, watchEffect } from 'vue'

const props = defineProps<{
  facetsVM: any
  sortType: any
}>()

const router = useRouter()

const cartQuantity = ref<CartQuantityVM | null>(null)

const rangeValues = ref(
  props.facetsVM && 
  props.facetsVM.price && 
  props.facetsVM.price.values &&
  props.facetsVM.price.values[0] && 
  props.facetsVM.price.values[1]
    ? [props.facetsVM.price.values[0].count, props.facetsVM.price.values[1].count]
    : [0, 100]
);

const minMaxValues = ref(
  props.facetsVM && 
  props.facetsVM.price && 
  props.facetsVM.price.values &&
  props.facetsVM.price.values[0] && 
  props.facetsVM.price.values[1]
    ? [props.facetsVM.price.values[0].count, props.facetsVM.price.values[1].count]
    : [0, 100]
);

// Initialisation dynamique des valeurs de rangeValues lorsque facetsVM est prêt
watchEffect(() => {
  if (
    props.facetsVM?.price?.values?.[0]?.count !== undefined &&
    props.facetsVM?.price?.values?.[1]?.count !== undefined
  ) {
    rangeValues.value = [
      props.facetsVM.price.values[0].count,
      props.facetsVM.price.values[1].count
    ];
  }
});


const cart = computed(() => {
  return getCartVM()
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'sortBy', st: number): void
  (e: 'searchLaboratory', labo: string | null): void
  (e: 'searchCategory', cat: string | null): void
  (e: 'searchPrice', price: any): void
}>()

const close = () => {
  emit('close')
}

const searchLaboratory = (labo: string | null) => {
  emit('searchLaboratory', labo)
  close()
}

const searchCategory = (cat: string | null) => {
  emit('searchCategory', cat)
  close()
}

const searchPrice = (price: any) => {
  emit('searchPrice', price)
}

const sortBy = (st: number) => {
  emit('sortBy', st)
  close()
}

function closeModal() {
  emit('close')
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})

const removeAllItemFromCart = () => {
  removeAllFromCart()
}
</script>
