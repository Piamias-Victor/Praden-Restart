<template lang="pug">
div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4
    span.text-xl.text-main.font-semibold.capitalize(v-if='laboratoryInfo && laboratoryInfo.item' class='lg:text-3xl') {{ laboratoryInfo.item.name }}
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
div.h-4
div.px-2.flex.flex-col.gap-2(v-if='laboratoryInfo && laboratoryInfo.item && laboratoryInfo.item.description')
    span.text-sm.prose-xl.line-clamp-2.text-contrast(v-if='laboratoryInfo && laboratoryInfo.item' v-html="laboratoryInfo.item.description")
    span.text-sm.text-main.cursor-pointer.underline.text-center(@click="scrollToDescription") Voir Plus
div(v-if="filteredProducts.length")
    ft-product-search-list(:products="filteredProducts" @close='close').px-4
div.h-4
div.px-2.mt-2.w-full.flex.items-center.flex-col.justify-center.gap-2(ref='description' v-if='laboratoryInfo && laboratoryInfo.item && laboratoryInfo.item.description')
    span.text-center.text-main.text-4xl.font-semibold Description
    span.text-sm.prose-xl(v-if='laboratoryInfo && laboratoryInfo.item' v-html="laboratoryInfo.item.description")
div.h-10
ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory" @searchPrice="searchPrice" :facetsVM="facetsVM" :sortType="sortType")
</template>

<script lang="ts" setup>
import { getCategory, getCategoryVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';
import { categoryGateway } from '../../../../../../gateways/categoryGateway';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { SortType } from '@utils/sort';
import { onMounted, ref, computed, watchEffect } from 'vue';
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getChildCategoriesVM } from '@adapters/primary/viewModels/get-category/getChildCategoryVM';
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { getLaboratoryInfo, listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { getLaboratory } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';

definePageMeta({ layout: 'main' });

onMounted(async () => {
  listLaboratories(laboratoryGateway());
  getLaboratory(categoryUuid, laboratoryGateway(), searchGateway());
  try {
    laboratoryInfo.value = await getLaboratoryInfo(laboratoryGateway(), categoryUuid);
  } catch (error) {
    console.error('Erreur lors de la récupération des infos laboratoire :', error);
  }
});

const route = useRoute();
const categoryUuid = route.params.uuid;

const sortType = ref(SortType.None);
const dropdownOpen = ref(false);
const filterOpened = ref(false);
const description = ref(null);
const laboratoryFilter = ref<string | null>(null);
const priceFilter = ref<string | null>(null);
const laboratoryInfo = ref(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const scrollToDescription = () => {
  if (description.value) {
    description.value.scrollIntoView({ behavior: 'smooth' });
  }
};

const sortBy = (st: number) => {
  if (sortType.value === st) {
    sortType.value = SortType.None;
  } else {
    sortType.value = st;
  }
  dropdownOpen.value = false;
};

const searchLaboratory = (labo: string | null) => {
  laboratoryFilter.value = labo;
};

const searchPrice = (price: any) => {
  priceFilter.value = price; // Mettez à jour le filtre de laboratoire
};

const searchVM = computed(() => {
  const result = getSearchResultVM(sortType.value);
  return result || { items: [] };
});

const filteredProducts = computed(() => {
  let res = searchVM.value.items || [];
  // Filtrer les produits en fonction du laboratoire
  if (!laboratoryFilter.value) {
  } else {
    res = searchVM.value.products.filter((product) => product.laboratory === laboratoryFilter.value);
  }
  // if (!categoryFilter.value) {
  //   return res // Retourner tous les produits si aucun filtre
  // }
  if (!priceFilter.value) {
  } else {
    res = res.filter(
      (product) =>
        parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1],
    );
  }
  // res = searchVM.value.items.filter(
  //   (product) => product.laboratory === laboratoryFilter.value
  // )
  return res;
});

const parsePrice = (priceString) => {
  // Enlever les espaces et le symbole de l'euro
  const cleanedString = priceString.replace(/[^0-9,]/g, '').replace(',', '.');

  // Convertir la chaîne en nombre flottant
  const priceNumber = parseFloat(cleanedString);

  // Convertir le prix en centimes (multiplication par 100 et arrondi)
  return Math.round(priceNumber * 100);
};

const facetsVM = computed(() => {
  const result = getFacetsVM();
  return result || { categories: [] };
});

const openFilter = () => {
  filterOpened.value = true;
};

const closeCart = () => {
  filterOpened.value = false;
};
</script>
