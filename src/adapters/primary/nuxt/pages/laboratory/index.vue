<template lang="pug">
  //- ft-child-categories(:categoriesVM="categoriesVM")
  div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Test
    ft-button-animate.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
      span.text-main.font-semibold.hidden(class='sm:block') Filtres
      icon.icon-lg(name="mdi:filter-outline")
  ft-navigation
  ft-product-search-list(:products="filteredProducts" @close='close').px-4
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
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM'

definePageMeta({ layout: 'main' })

const route = useRoute()
const categoryUuid = route.params.uuid

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
  let res
  // Filtrer les produits en fonction du laboratoire
  if (!laboratoryFilter.value) {
    res = searchVM.value.items // Retourner tous les produits si aucun filtre
  }
  else {
      res = searchVM.value.items.filter(
      (product) => product.laboratory === laboratoryFilter.value
    )
  }
  // if (!categoryFilter.value) {
  //   return res // Retourner tous les produits si aucun filtre
  // }
  // res = searchVM.value.items.filter(
  //   (product) => product.laboratory === laboratoryFilter.value
  // )
  return res
})

onMounted(() => {
})

const searchVM = computed(() => {
  return getSearchResultVM()
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
