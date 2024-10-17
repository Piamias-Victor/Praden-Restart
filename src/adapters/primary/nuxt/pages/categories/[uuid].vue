<template lang="pug">
  ft-child-categories(:categoriesVM="categoriesVM")
  div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') {{Name}}
    ft-button.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
      span.text-main.font-semibold.hidden(class='sm:block') Filtres
      icon.icon-lg(name="mdi:filter-outline")
  ft-navigation
  ft-product-cat-list(:products="filteredProducts")  <!-- Utilisez les produits filtrés ici -->
  ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory" :facetsVM="facetsVM" :sortType="sortType")
</template>

<script lang="ts" setup>
import {
  getCategory,
  getCategoryVM
} from '@adapters/primary/viewModels/get-category/getCategoryVM'
import { categoryGateway } from '../../../../../../gateways/categoryGateway'
import { searchGateway } from '../../../../../../gateways/searchGateway'
import { SortType } from '@utils/sort'
import { onMounted, ref, computed, watchEffect } from 'vue'
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM'
import { listCategories } from '@core/usecases/list-categories/listCategories'
import { getChildCategoriesVM } from '@adapters/primary/viewModels/get-category/getChildCategoryVM'

definePageMeta({ layout: 'main' })

const route = useRoute()
const categoryUuid = route.params.uuid
const Name = computed(() => {
  return route.fullPath.split('?')[1] || '' // Récupère la chaîne après le "?"
})

const sortType = ref(SortType.None)
const displayProduct = ref<any | null>(null)
const laboratoryFilter = ref<string | null>(null) // Variable pour le laboratoire filtré

const sortBy = (st: number) => {
  if (sortType && typeof sortType.value !== 'undefined') {
    if (sortType.value === st) {
      sortType.value = SortType.None
    } else {
      sortType.value = st
    }
  }
}

const searchLaboratory = (labo: string | null) => {
  laboratoryFilter.value = labo // Mettez à jour le filtre de laboratoire
}

const filteredProducts = computed(() => {
  // Filtrer les produits en fonction du laboratoire
  if (!laboratoryFilter.value) {
    return categoryVM.value.products // Retourner tous les produits si aucun filtre
  }
  return categoryVM.value.products.filter(
    (product) => product.laboratory === laboratoryFilter.value
  )
})

onMounted(() => {
  listCategories(categoryGateway())
  getCategory(categoryUuid, categoryGateway(), searchGateway())
})

const categoriesVM = computed(() => {
  return getChildCategoriesVM(categoryUuid)
})

const categoryVM = computed(() => {
  return getCategoryVM(sortType.value)
})

const facetsVM = computed(() => {
  return getFacetsVM()
})

const filterOpened = ref(false)

const openFilter = () => {
  filterOpened.value = true
}

const closeCart = () => {
  filterOpened.value = false
}
</script>
