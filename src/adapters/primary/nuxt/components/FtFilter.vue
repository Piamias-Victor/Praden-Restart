<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes filtres
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="heroicons-outline:x")

    // Vérification si facetsVM et laboratory existent avant d'afficher
    div.h-4
    h2.font-medium.text-gray-900 1 - Filtre de prix
    div.h-4
    ft-button.button-solid.w-full(@click='sortBy(2)')
      icon.icon-md(name="mdi:tag-arrow-up-outline")
      span Plus chère au moins chère
    div.h-4
    ft-button.button-solid.w-full(@click='sortBy(1)')
      icon.icon-md(name="mdi:tag-arrow-down-outline")
      span Moins chère au plus chère
    div.h-4
    h2.font-medium.text-gray-900 2 - Filtre laboratoire
    div(v-if="props.facetsVM && props.facetsVM.laboratory")
        div.grid.grid-cols-2.gap-4.mt-4.justify-items-center
            ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='laboratory in props.facetsVM.laboratory.values' :key="laboratory.key" @click='searchLaboratory(laboratory.key)' class="w-full text-center")
                span.whitespace-nowrap {{ laboratory.key }}
    div.h-4
    ft-button.button-solid.w-full(@click='searchLaboratory(null)')
      icon.icon-md(name="tabler:category")
      span Afficher tout les labos
    div.mt-8
</template>

<script lang="ts" setup>
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

const cart = computed(() => {
  return getCartVM()
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'sortBy', st: number): void
  (e: 'searchLaboratory', labo: string | null): void
}>()

const close = () => {
  emit('close')
}

const searchLaboratory = (labo: string | null) => {
  emit('searchLaboratory', labo)
  close()
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
