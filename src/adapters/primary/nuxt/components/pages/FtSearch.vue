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
                              span Livraison offerte avec le code FETEDESMAMANS
                          div.py-4.px-4.flex.items-center.gap-4
                              // Input masqué pour forcer l'affichage du clavier
                              input#hiddenInput.opacity-0.h-0.w-0.absolute(
                                  type="text"
                                  ref="hiddenInput"
                                  autocomplete="off"
                              )
                              div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast
                                  icon.icon-md(name="lucide:search")
                                  input#search.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none(
                                      name='search'
                                      class='focus:text-default focus:outline-none sm:text-sm focus:ring-0 w-[62vw]'
                                      placeholder='Recherche par produits / marques / categoriesrche'
                                      type='search'
                                      autocomplete='off'
                                      @input="searchChanged"
                                      ref="searchInput"
                                  )
                              ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                  icon.icon-md(name="ph:x-bold")
                          ft-navigation
                          div.px-4(v-if='filteredProducts.length > 0')
                              ft-categories-search(:categoriesVM="categoriesVM" :laboratoriesVM="laboratoriesVM" @close='close')
                          div.flex.px-8.flex.items-center.justify-between.gap-4.my-4(v-if='filteredProducts.length > 0' ref='top')
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
                                v-if='filteredProducts.length === 0'
                                @click="clicked").grid.grid-cols-1(class='sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full')
                              div(class='min-h-[13vh]')
                              ft-footer
                              div(class='min-h-[13vh]').bg-main
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, onMounted } from 'vue';
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
  import { getSimpleCategoryVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';
  import { useRouter } from 'nuxt/app';
  const props = defineProps<{
    categoriesVM: any;
  }>();
  
  const searchInput = ref(null);
  const hiddenInput = ref(null);
  
  // Fonction pour vérifier si on est sur mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  
  // Fonction pour vérifier si on est sur iOS
  const isIOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };
  
  onMounted(() => {
    // Utiliser l'approche de l'input masqué
    setTimeout(() => {
      if (isMobile()) {
        // Sur mobile, d'abord utiliser l'input masqué
        if (hiddenInput.value) {
          hiddenInput.value.focus();
          
          // Pour iOS, simuler une interaction
          if (isIOS()) {
            hiddenInput.value.value = "a";
            hiddenInput.value.dispatchEvent(new Event('input', { bubbles: true }));
            hiddenInput.value.value = "";
          }
          
          // Puis transférer au vrai input
          setTimeout(() => {
            if (searchInput.value) {
              searchInput.value.focus();
              searchInput.value.click();
            }
          }, 50);
        }
      } else {
        // Sur desktop, focus simple
        if (searchInput.value) {
          searchInput.value.focus();
        }
      }
    }, 200);
  });
  
  const router = useRouter();
  
  const simpleCategory = computed(() => {
    return getSimpleCategoryVM();
  });
  
  const rootCategoriesVM = computed(() => {
    return getRootCategoriesVM();
  });
  
  const goToCat = (path: string) => {
    router.push('/categories/' + path);
    closeModal();
  };
  
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
  
  const clicked = () => {
    // Fonction vide pour l'événement
  };
  
  const filteredProducts = computed(() => {
    getLaboratoryByName(laboratoryFilter.value, query.value, searchGateway());
    let res = searchVM.value.items;
    if (!priceFilter.value) {
    } else {
      res = res.filter(
        (product) =>
          parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1],
      );
    }
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
    console.log('query.value', query.value);
    debounceTimeout = setTimeout(() => {
      searchProduct(query.value, searchGateway());
    }, 500);
  };
  
  const searchCategoryVM = computed(() => {
    return getSearchCategoriesVM();
  });
  
  const searchVM = computed(() => {
    return getSearchResultVM(sortType.value);
  });
  
  const closeCart = () => {
    filterOpened.value = false;
  };
  </script>