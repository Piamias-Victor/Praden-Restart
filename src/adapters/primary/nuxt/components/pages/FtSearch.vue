<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.items-center.justify-center.text-center.fixed.inset-y-0.right-0.flex.w-screen(class="md:")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideright
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2
                            span Livraison offerte pour 69 € d'achat
                        div.py-4.px-4.flex.items-center.gap-4
                            div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast
                                icon.icon-md(name="lucide:search")
                                input#search.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none(
                                    name='search'
                                    class='focus:text-default focus:outline-none sm:text-sm focus:ring-0 w-[62vw]'
                                    placeholder='Recherche'
                                    type='search'
                                    autocomplete='off'
                                    @input="searchChanged"
                                )
                            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                icon.icon-md(name="ph:x-bold")
                        ft-navigation
                        div.px-4(v-if='query !== ""')
                            ft-categories-search(:categoriesVM="categoriesVM" :laboratoriesVM="laboratoriesVM" @close='close')
                        div.flex.px-8.flex.items-center.justify-between.gap-4.my-4(v-if='query !== ""' ref='top')
                          span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Recherche
                          div.flex.items-center.gap-4
                            div.relative
                              ft-button-animate.text-main.flex.items-center.justify-center.bg-white.px-6(@click="toggleDropdown")
                                  span.text-main.font-semibold(class='sm:hidden') Trier
                                  span.text-main.font-semibold.hidden(class='sm:block') Trier par
                                  icon.icon-lg(name="mdi:chevron-down")
                              div.p-2(v-if="dropdownOpen" class="absolute bg-white rounded-xl shadow-md mt-2 w-full left-0 z-10")
                                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(0)")
                                    icon.icon-sm.text-main.hidden(name="bi:alphabet" class='sm:block')
                                    span.ml-2.text-xs(class='sm:text-sm') Nom
                                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(2)")
                                    icon.icon-sm.text-main.hidden(name="mdi:tag-arrow-up-outline" class='sm:block')
                                    span.ml-2.text-xs(class='sm:text-sm') Croissant
                                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(1)")
                                    icon.icon-sm.text-main.hidden(class='sm:block' name="mdi:tag-arrow-down-outline")
                                    span.ml-2.text-xs(class='sm:text-sm') Décroissant
                                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(3)")
                                    icon.icon-sm.text-main.hidden(name="teenyicons:discount-outline" class='sm:block')
                                    span.ml-2.text-xs(class='sm:text-sm') Promotion
                            ft-button-animate.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
                              span.text-main.font-semibold.hidden(class='sm:block') Filtres
                              icon.icon-lg(name="mdi:filter-outline")
                        div.flex-1.overflow-y-auto
                            ft-product-search-list(:products="filteredProducts" @close='close').px-4
                            ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory" @searchCategory="searchCategory" @searchPrice="searchPrice" :facetsVM="searchVM.facets" :sortType="sortType" :laboratoryFilter="laboratoryFilter")
                            div.px-4(
                                v-if='query === ""'
                                @click="clicked").flex.flex-col.items-center.justify-center.gap-4.w-full
                                nuxt-link.flex.flex-col.items-center.bg-main.text-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' href='https://2f440074.praden-restart.pages.dev/categories/03c3ddc9-7616-48df-9bf7-3290da61b23b?Promotions')
                                    span.font-semibold.w-full.text-left.px-4 DES PROMOTIONS ALLANT JUSQU'À -20%
                                nuxt-link.border-2.border-main.flex.flex-col.items-center.justify-center.bg-cover.bg-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(href='https://2f440074.praden-restart.pages.dev/categories/7480b66f-d589-42de-a122-3cff0590dd40?Dermocosm%C3%A9tique' class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/kMtWv1gV/new.png')")
                                    span.font-semibold.w-full.text-left.px-4 DERMOCOSMETIQUE
                                nuxt-link.border-2.border-main.flex.flex-col.items-center.justify-center.bg-cover.bg-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(href='https://2f440074.praden-restart.pages.dev/categories/19730921-246e-4eec-9a3b-17b49e416c82?B%C3%A9b%C3%A9' class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/vDFr59VS/1.png')")
                                    span.font-semibold.w-full.text-left.px-4 MAMAN & BEBE
                                nuxt-link.border-2.border-main.flex.flex-col.items-center.justify-center.bg-cover.bg-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(href='https://2f440074.praden-restart.pages.dev/categories/aadb1ea0-3961-46c8-8005-172779c74756?Bien%20%C3%AAtre' class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/1zkwkwWR/56.png')")
                                    span.font-semibold.w-full.text-left.px-4 BIEN ETRE
                                nuxt-link.border-2.border-main.flex.flex-col.items-center.justify-center.bg-cover.bg-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(href='https://2f440074.praden-restart.pages.dev/categories/9869193d-f291-4a74-9d29-b09429b7f81d?Nature' class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/5yBnS04L/009.png')")
                                    span.font-semibold.w-full.text-left.px-4 NATURE & SANTE
                                nuxt-link.border-2.border-main.flex.flex-col.items-center.justify-center.bg-cover.bg-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(href='https://2f440074.praden-restart.pages.dev/categories/0f4946ae-2e5f-46e8-86a7-fb6d3ae8d75f?V%C3%A9t%C3%A9rinaire' class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/Bvb7f4pf/10.png')")
                                    span.font-semibold.w-full.text-left.px-4 VETERINAIRE
                                div(class='min-h-[13vh]').bg-main
                            ft-footer
                            div(class='min-h-[13vh]').bg-main
</template>

<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { searchProduct } from '@core/usecases/search-product/searchProduct';
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import {
  getSearchCategoriesVM,
  getSearchLaboratoriesVM,
} from '@adapters/primary/viewModels/get-category/getSearchCategoryVM';
import { SortType } from '@utils/sort';
import { parsePrice } from '@utils/formater';
import { getLaboratory, getLaboratoryByName } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
const props = defineProps<{
  categoriesVM: any;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

function closeModal() {
  emit('close');
}

const filterOpened = ref(false);

const openFilter = () => {
  filterOpened.value = true;
};

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const sortType = ref(SortType.None);

const laboratoryFilter = ref<Array<string> | null>(null); // Variable pour le laboratoire filtré

const categoryFilter = ref<string | null>(null);

const priceFilter = ref<string | null>(null);

const displayProduct = ref<any | null>(null);

const filteredProducts = computed(() => {
  getLaboratoryByName(laboratoryFilter.value, query.value, searchGateway());
  let res = searchVM.value.items;
  // Filtrer les produits en fonction du laboratoire
  // if (!laboratoryFilter.value) {
  // } else {
  //   res = searchVM.value.items.filter((product) => product.laboratory === laboratoryFilter.value);
  // }
  // // if (!categoryFilter.value) {
  // //   return res // Retourner tous les produits si aucun filtre
  // // }
  // if (!priceFilter.value) {
  // } else {
  //   res = res.filter(
  //     (product) =>
  //       parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1],
  //   );
  // }
  // res = searchVM.value.items.filter(
  //   (product) => product.laboratory === laboratoryFilter.value
  // )
  return res;
});

const sortBy = (st: number) => {
  if (sortType && typeof sortType.value !== 'undefined') {
    if (sortType.value === st) {
      sortType.value = SortType.None;
    } else {
      sortType.value = st;
    }
  }
  dropdownOpen.value = false;
};

const searchLaboratory = (labo: string | null) => {
  if (!labo) {
    laboratoryFilter.value = null; // Réinitialiser le filtre si labo est null
  } else {
    if (!laboratoryFilter.value) {
      laboratoryFilter.value = [labo]; // Initialiser le tableau si null
    } else if (!laboratoryFilter.value.includes(labo)) {
      laboratoryFilter.value.push(labo); // Ajouter si non déjà présent
    } else {
      // Retirer le labo s'il est déjà dans le tableau (toggle)
      laboratoryFilter.value = laboratoryFilter.value.filter((item) => item !== labo);
    }
  }
};

const searchCategory = (cat: string | null) => {
  categoryFilter.value = cat; // Mettez à jour le filtre de laboratoire
};

const searchPrice = (price: any) => {
  priceFilter.value = price; // Mettez à jour le filtre de laboratoire
};

const query = ref('');
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

const categoriesVM = computed(() => {
  return getSearchCategoriesVM(query.value);
});

const laboratoriesVM = computed(() => {
  return getSearchLaboratoriesVM(query.value);
});

const searchChanged = (e: any) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  query.value = e.target.value;
  debounceTimeout = setTimeout(() => {
    searchProduct(query.value, searchGateway());
  }, 500);
};

const searchVM = computed(() => {
  return getSearchResultVM(sortType.value);
});

const closeCart = () => {
  filterOpened.value = false;
};
</script>
