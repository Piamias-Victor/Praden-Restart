<template lang="pug">
  ft-child-categories(:categoriesVM="categoriesVM")
  div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') {{categoryVM.name}}
    div.flex.items-center.gap-4
      div.relative
          ft-button-animate.text-main.flex.items-center.justify-center.bg-white.px-6(@click="toggleDropdown")
              span.text-main.font-semibold(class='sm:block') Trier par
              icon.icon-lg(name="mdi:chevron-down")
          div.p-2(v-if="dropdownOpen" class="absolute bg-white rounded-xl shadow-md mt-2 w-full left-0 z-10")
              div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(0)")
                  icon.icon-sm.text-main(name="bi:alphabet")
                  span.ml-2.text-sm Nom
              div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(2)")
                  icon.icon-sm.text-main(name="mdi:tag-arrow-up-outline")
                  span.ml-2.text-sm Croissant
              div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(1)")
                  icon.icon-sm.text-main(name="mdi:tag-arrow-down-outline")
                  span.ml-2.text-sm Décroissant
              div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(3)")
                  icon.icon-sm.text-main(name="teenyicons:discount-outline")
                  span.ml-2.text-sm Promotion
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
    span.text-sm.text-contrast {{text}}
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

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar velit sit amet imperdiet viverra. Nullam ullamcorper, urna et egestas ultricies, est dolor porta felis, non placerat metus nulla eu libero. Donec felis velit, tincidunt vitae euismod sed, consequat in arcu. Aenean tincidunt auctor sem, ut porta nisl facilisis in. Nunc ut commodo dolor. Vivamus a laoreet nunc, vitae gravida enim. Praesent hendrerit lobortis porttitor. Fusce augue metus, efficitur in gravida in, tempor gravida augue. Nam vel odio in augue gravida cursus vel sit amet orci. Etiam a tellus accumsan, finibus tellus et, efficitur eros. Donec blandit at leo ut auctor. Vivamus odio quam, vestibulum sit amet sem a, finibus imperdiet arcu. Nulla pharetra nulla porttitor metus maximus, in vulputate risus lacinia. Vestibulum eu massa condimentum, consectetur ex at, pretium odio. Quisque at dui bibendum, consequat magna in, tempus massa. Donec gravida arcu quis lacinia tristique. Morbi sit amet porta velit. Praesent quis nisl vulputate diam auctor rutrum. Mauris est eros, hendrerit sit amet mi non, consectetur tristique ante. Sed facilisis mauris elit, eu iaculis justo semper vel. Praesent eu aliquet massa, vitae mattis nisi. Donec rhoncus metus sagittis metus venenatis, at egestas nulla dignissim. Duis convallis sem vel purus ornare, id sodales enim viverra. Nam ornare tortor id luctus interdum. Proin pharetra dictum turpis sed cursus. Morbi pretium dolor ex, eget aliquet sapien vulputate at. Aenean vitae rhoncus dui. Pellentesque tincidunt arcu nec orci feugiat laoreet. Proin gravida eros mi. Mauris a est nisl. Morbi maximus ligula et libero pellentesque elementum. In vitae iaculis risus, in gravida dolor. Proin efficitur scelerisque suscipit. Aliquam pharetra magna eu metus dignissim, at dapibus sem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisl eu ante convallis sollicitudin sit amet at magna. Nulla hendrerit enim vel quam finibus, ac rhoncus turpis rutrum. Sed finibus commodo tellus rhoncus accumsan.'

function scrollToDescription() {
  if (description.value) {
    description.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
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
  dropdownOpen.value = false
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
