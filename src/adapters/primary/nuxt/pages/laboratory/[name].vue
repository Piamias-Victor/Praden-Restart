<template lang="pug">
span test
ft-laboratory-categories(:categoriesVM="facetsVM.categories")
div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Avene
    div.flex.items-center.gap-4
        div.relative
            ft-button-animate.text-main.flex.items-center.justify-center.bg-white.px-6(@click="toggleDropdown")
                span.text-main.font-semibold(class='sm:hidden') Trier
                span.text-main.font-semibold.hidden(class='sm:block') Trier par
                icon.icon-lg(name="mdi:chevron-down")
            div.p-2(v-if="dropdownOpen" class="absolute bg-white rounded-xl shadow-md mt-2 w-full left-0 z-10")
                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(0)")
                    icon.icon-sm.text-main.hidden(class='sm:block' name="bi:alphabet")
                    span.ml-2.text-xs(class='sm:text-sm') Nom
                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(2)")
                    icon.icon-sm.text-main.hidden(class='sm:block' name="mdi:tag-arrow-up-outline")
                    span.ml-2.text-xs(class='sm:text-sm') Croissant
                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(1)")
                    icon.icon-sm.text-main.hidden(class='sm:block' name="mdi:tag-arrow-down-outline")
                    span.ml-2.text-xs(class='sm:text-sm') Décroissant
                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(3)")
                    icon.icon-sm.text-main.hidden(class='sm:block' name="teenyicons:discount-outline")
                    span.ml-2.text-xs(class='sm:text-sm') Promotion
        ft-button-animate.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
            span.text-main.font-semibold.hidden(class='sm:block') Filtres
            icon.icon-lg(name="mdi:filter-outline")
ft-navigation
div(v-if="filteredProducts.length")
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

const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const sortBy = (st: number) => {
  if (sortType && typeof sortType.value !== 'undefined') {
    if (sortType.value === st) {
      sortType.value = SortType.None
    } else {
      sortType.value = st
    }
  }
  dropdownOpen.value = false // Fermer le dropdown après avoir sélectionné une option
}

const searchLaboratory = (labo: string | null) => {
  laboratoryFilter.value = labo // Mettez à jour le filtre de laboratoire
}

const filteredProducts = computed(() => {
  let res
  // Vérifie si `searchVM.value.items` est défini
  if (searchVM.value && searchVM.value.items) {
    if (!laboratoryFilter.value) {
      res = searchVM.value.items // Retourne tous les produits si aucun filtre
    } else {
      res = searchVM.value.items.filter(
        (product) => product.laboratory === laboratoryFilter.value
      )
    }
  } else {
    console.warn('searchVM.value.items est undefined')
    res = [] // Retourne un tableau vide si `items` n'est pas défini
  }
  return res
})

onMounted(() => {})

const searchVM = computed(() => {
  const result = getSearchResultVM(sortType.value)
  if (!result) {
    console.warn('getSearchResultVM() a retourné undefined')
  }
  return result || { items: [] } // Retourne un objet par défaut si `result` est `undefined`
})

const facetsVM = computed(() => {
  const result = getFacetsVM()
  if (!result) {
    console.warn('getFacetsVM() a retourné undefined')
  }
  return result || { categories: [] } // Retourne un objet par défaut si `result` est `undefined`
})

const filterOpened = ref(false)

const openFilter = () => {
  filterOpened.value = true
}

const closeCart = () => {
  filterOpened.value = false
}
</script>
