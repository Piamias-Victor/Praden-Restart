<template lang="pug">
ft-header
ft-child-categories(:categoriesVM="categoriesVM")
div.flex.px-2.flex.items-center.justify-end.gap-4.mt-4
  ft-button.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
    span.text-main.font-semibold.hidden(class='sm:block') Filtres
    icon.icon-lg(name="mdi:filter-outline")
  div(v-for='option in categoryVM.sortOptions' :key='option.name').cursor-pointer
    ft-button.bg-white.rounded-full(@click="sortBy(option.sortType)")
      img.icon-md.text-main(:src="option.name")
ft-product-cat-list(:products="categoryVM.products")
ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" :facetsVM="facetsVM" :sortType="sortType")  <!-- Passer sortType ici -->
</template>

<script lang="ts" setup>
import {
  getCategory,
  getCategoryVM
} from '@adapters/primary/viewModels/get-category/getCategoryVM'
import { categoryGateway } from '../../../../../../gateways/categoryGateway'
import { searchGateway } from '../../../../../../gateways/searchGateway'
import { SortType } from '@utils/sort'
import { onMounted, ref, computed } from 'vue'
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM'
import { listCategories } from '@core/usecases/list-categories/listCategories'
import { getChildCategoriesVM } from '@adapters/primary/viewModels/get-category/getChildCategoryVM'

definePageMeta({ layout: 'main' })

const route = useRoute()
const categoryUuid = route.params.uuid

const sortType = ref(SortType.None)

const sortBy = (st: number) => {
  console.log('ca redescend bien', st)
  // Vérifiez que props.sortType est bien défini et est réactif
  if (sortType && typeof sortType.value !== 'undefined') {
    if (sortType.value === st) {
      sortType.value = SortType.None
    } else {
      sortType.value = st
    }
  } else {
    console.error('props.sortType is not defined or is not reactive.')
  }
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
