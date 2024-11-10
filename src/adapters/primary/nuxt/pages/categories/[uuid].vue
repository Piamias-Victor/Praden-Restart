<template lang="pug">
  ft-child-categories(:categoriesVM="categoriesVM")
  div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') {{categoryVM.name}}
    div.flex.items-center.gap-4
      ft-button-animate.w-full.bg-white(@click='sortBy(2)')
          icon.icon-md.text-main(name="mdi:tag-arrow-up-outline")
      ft-button-animate.w-full.bg-white(@click='sortBy(1)')
          icon.icon-md.text-main(name="mdi:tag-arrow-down-outline")
      ft-button-animate.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
        span.text-main.font-semibold.hidden(class='sm:block') Filtres
        icon.icon-lg(name="mdi:filter-outline")
  ft-navigation
  div.h-2
  div.px-2.flex.flex-col.gap-2
    span.text-sm.text-contrast Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and when an u...
    span.text-sm.text-main.cursor-pointer.underline.text-center(@click="scrollToDescription") Voir Plus
  ft-product-cat-list(:products="filteredProducts")
  div.px-2.mt-2.w-full.flex.items-center.flex-col.justify-center.gap-2(ref='description')
    span.text-center.text-main.text-xl.font-semibold Description
    span.text-sm.text-contrast Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
  ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory"  @searchPrice="searchPrice" :facetsVM="facetsVM" :sortType="sortType")
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
import { parsePrice } from '@utils/formater'

definePageMeta({ layout: 'main' })

const description = ref(null);

function scrollToDescription() {
  if (description.value) {
    description.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const route = useRoute()
const categoryUuid = route.params.uuid
const priceFilter = ref<string | null>(null)
const Name = computed(() => {
  return route.fullPath.split('?')[1] || '' // Récupère la chaîne après le "?"
})

const sortType = ref(SortType.None)
const displayProduct = ref<any | null>(null)
const laboratoryFilter = ref<string | null>(null) // Variable pour le laboratoire filtré

const searchPrice = (price: any) => {
  priceFilter.value = price // Mettez à jour le filtre de laboratoire
}

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
  let res = categoryVM.value.products
  // Filtrer les produits en fonction du laboratoire
  if (!laboratoryFilter.value) {
  } else {
    res = categoryVM.value.products.filter(
      (product) => product.laboratory === laboratoryFilter.value
    )
  }
  // if (!categoryFilter.value) {
  //   return res // Retourner tous les produits si aucun filtre
  // }
  if (!priceFilter.value) {
  } else {
    res = res.filter(
      (product) =>
        parsePrice(product.price) >= priceFilter.value[0] &&
        parsePrice(product.price) <= priceFilter.value[1]
    )
  }
  // res = searchVM.value.items.filter(
  //   (product) => product.laboratory === laboratoryFilter.value
  // )
  return res
})

const parsePrice = (priceString) => {
  // Enlever les espaces et le symbole de l'euro
  const cleanedString = priceString.replace(/[^0-9,]/g, '').replace(',', '.')

  // Convertir la chaîne en nombre flottant
  const priceNumber = parseFloat(cleanedString)

  // Convertir le prix en centimes (multiplication par 100 et arrondi)
  return Math.round(priceNumber * 100)
}

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
