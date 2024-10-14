<template lang="pug">
ft-header
ft-child-categories(:categoriesVM="categoriesVM")
div.flex.px-2.flex.items-center.justify-end.gap-4
  div(v-for='option in categoryVM.sortOptions' :key='option.name').cursor-pointer
    ft-button.bg-white.rounded-full(@click="sortBy(option.sortType)")
      img.icon-md.text-main(:src="option.name")
ft-product-cat-list(:products="categoryVM.products")
//- pre {{facetsVM}}
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

onMounted(() => {
  listCategories(categoryGateway())
  getCategory(categoryUuid, categoryGateway(), searchGateway())
})

const sortBy = (st: SortType) => {
  if (sortType.value === st) sortType.value = SortType.None
  else sortType.value = st
}

const sortType = ref(SortType.None)

const categoriesVM = computed(() => {
  return getChildCategoriesVM(categoryUuid)
})

const categoryVM = computed(() => {
  return getCategoryVM(sortType.value)
})

const facetsVM = computed(() => {
  return getFacetsVM()
})
</script>
