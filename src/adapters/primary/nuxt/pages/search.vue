<template lang="pug">
  div.flex.flex-col.gap-10
      ft-categories(:categoriesVM="categoriesVM")
      
      // En-tête de recherche avec la requête actuelle
      div.px-8.my-4.flex.flex-col.gap-4
          h1.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') 
              span(v-if="query") Résultats pour "{{ query }}"
              span(v-else) Tous les produits
      
      // Barre de recherche intégrée à la page
      div.py-4.px-4.flex.items-center.gap-4.mb-4
          div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast
              icon.icon-md(name="lucide:search")
              input#search.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none(
                  name='search'
                  class='focus:text-default focus:outline-none sm:text-sm focus:ring-0 w-[62vw]'
                  placeholder='Recherche'
                  type='search'
                  autocomplete='off'
                  v-model="searchInput"
                  @input="debouncedSearch"
                  ref="searchInputElement"
              )
          ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="executeSearch")
              icon.icon-md(name="akar-icons:send")
      
      // Filtres et tri
      div(v-if='filteredProducts.length > 0').flex.px-2.flex.items-center.justify-between.gap-4.mt-4
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
      
      // Résultats de recherche
      div(v-if="filteredProducts.length")
          ft-product-search-list(:products="filteredProducts")
      
      // Message aucun résultat
      div.flex.flex-col.items-center.justify-center.py-16(v-else-if="searchDone && query")
          icon.icon-6xl.text-contrast(name="mdi:file-search-outline")
          h2.text-xl.font-semibold.mt-4 Aucun résultat trouvé pour "{{ query }}"
          p.text-contrast.mt-2 Essayez d'autres termes de recherche ou parcourez nos catégories
      
      ft-navigation
      ft-panel2(v-if="filterOpened" @close="closeFilter" @sortBy="sortBy" @searchLaboratory="searchLaboratory" @searchPrice="searchPrice" :facetsVM="facetsVM" :sortType="sortType" :laboratoryFilter="laboratoryFilter")
  </template>
  
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { searchProduct } from '@core/usecases/search-product/searchProduct';
import { searchGateway } from '../../../../../gateways/searchGateway';
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { SortType } from '@utils/sort';
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { categoryGateway } from '../../../../../gateways/categoryGateway';
import { getLaboratoryByName } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import { listPromotions, listBestSales } from '@core/usecases/list-promotions/listPromotions';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../gateways/laboratoryGateway';
import { bannerGateway } from '../../../../../gateways/bannerGateway';
import { useProductGateway } from '../../../../../gateways/productGateway';
import { listBanner } from '@core/usecases/list-banner/listBanner';
import deliveryGateway from '../../../../../gateways/deliveryGateway';
import { useNuxtApp } from '#app';

definePageMeta({ layout: 'main' });

const route = useRoute();
const router = useRouter();

// État local
const searchInput = ref('');
const query = ref('');
const searchDone = ref(false);
const dropdownOpen = ref(false);
const filterOpened = ref(false);
const sortType = ref(SortType.None);
const laboratoryFilter = ref<Array<string>>([]);
const priceFilter = ref<any>(null);
const searchInputElement = ref<HTMLInputElement | null>(null);

// État pour le débogage
const showDebug = ref(false); // Mettre à false en production
const isAuthenticated = ref(false);
const currentUrl = ref('');

// Accès aux fonctions Keycloak 
const nuxtApp = useNuxtApp();
const keycloak = nuxtApp.$keycloak;
const keycloakDebugger = nuxtApp.$debugKeycloak;

// Fonction pour déboguer Keycloak
const triggerDebugKeycloak = () => {
  console.log('[Search] Débogage Keycloak');
  if (keycloakDebugger) {
    keycloakDebugger();
  } else {
    console.log('[Search] Fonction de débogage Keycloak non disponible');
  }
};

// Détection si appareil mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Charger les données nécessaires
onMounted(async () => {
  console.log('[Search] Page de recherche chargée');
  currentUrl.value = window.location.href;
  
  // Vérification de l'état Keycloak
  if (keycloak) {
    isAuthenticated.value = keycloak.authenticated || false;
    console.log('[Search] État d\'authentification à l\'initialisation:', isAuthenticated.value);
  }

  // Chargement des données initiales
  listCategories(categoryGateway());
  listDeliveryMethods(deliveryGateway);
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
  listBanner(bannerGateway());
  listBestSales(useProductGateway());

  // Vérifier si nous venons juste de nous authentifier (après une redirection)
  const justAuthenticated = localStorage.getItem('justAuthenticated');
  console.log('[Search] Indicateur justAuthenticated:', justAuthenticated);

  if (justAuthenticated === 'true') {
    console.log('[Search] Détection de retour après authentification');
    localStorage.removeItem('justAuthenticated');
    
    // Restaurer les paramètres de recherche sauvegardés
    const savedParams = localStorage.getItem('searchParams');
    console.log('[Search] Paramètres de recherche sauvegardés:', savedParams);
    
    if (savedParams) {
      // Extraire le paramètre q des searchParams
      const params = new URLSearchParams(savedParams);
      const savedQuery = params.get('q');
      
      if (savedQuery) {
        console.log('[Search] Restauration de la requête:', savedQuery);
        searchInput.value = savedQuery;
        query.value = savedQuery;
        // Exécuter la recherche 
        setTimeout(() => {
          executeSearch();
        }, 300);
      }
      
      localStorage.removeItem('searchParams');
    }
  } else {
    // Comportement normal: récupérer la recherche depuis l'URL
    const searchQuery = route.query.q as string;
    if (searchQuery) {
      console.log('[Search] Récupération de la requête depuis l\'URL:', searchQuery);
      query.value = searchQuery;
      searchInput.value = searchQuery;
      executeSearch();
    }
  }

  // Mettre le focus sur l'input de recherche après le rendu du DOM
  await nextTick();
  if (searchInputElement.value) {
    searchInputElement.value.focus();
  }
});

// Fonction de recherche avec mise à jour de l'URL
const executeSearch = async () => {
  console.log('[Search] Exécution de la recherche:', searchInput.value);
  query.value = searchInput.value;
  
  if (query.value) {
    // Mettre à jour l'URL sans recharger la page
    router.replace({ 
      path: '/search',
      query: { 
        q: query.value
      }
    });
    
    // Effectuer la recherche
    await searchProduct(query.value, searchGateway());
  } else {
    // Si pas de requête, supprimer les paramètres
    router.replace({ 
      path: '/search',
      query: {}
    });
  }
  
  searchDone.value = true;
};

// Fonction de recherche avec debounce
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
const debouncedSearch = () => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  
  debounceTimeout = setTimeout(() => {
    executeSearch();
  }, 500);
};

// Toggle dropdown
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Ouvrir/fermer le filtre
const openFilter = () => {
  filterOpened.value = true;
};

const closeFilter = () => {
  filterOpened.value = false;
};

// Fonctions de filtrage
const sortBy = (st: number) => {
  if (sortType.value === st) {
    sortType.value = SortType.None;
  } else {
    sortType.value = st;
  }
  dropdownOpen.value = false;
};

const searchLaboratory = (labo: string | null) => {
  if (!labo) {
    laboratoryFilter.value = [];
  } else if (!laboratoryFilter.value.includes(labo)) {
    laboratoryFilter.value.push(labo);
  } else {
    laboratoryFilter.value = laboratoryFilter.value.filter((item) => item !== labo);
  }
};

const searchPrice = (price: any) => {
  priceFilter.value = price;
};

// Données calculées
const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const searchVM = computed(() => {
  return getSearchResultVM(sortType.value);
});

const facetsVM = computed(() => getFacetsVM());

// Produits filtrés avec application des filtres
const filteredProducts = computed(() => {
  getLaboratoryByName(laboratoryFilter.value, query.value, searchGateway());
  let res = searchVM.value.items || [];
  
  if (priceFilter.value) {
    const parsePrice = (priceString: string) => {
      const cleanedString = priceString.replace(/[^0-9,]/g, '').replace(',', '.');
      return Math.round(parseFloat(cleanedString) * 100);
    };
    
    res = res.filter(
      (product) =>
        parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1]
    );
  }
  
  return res;
});

// SEO
useHead({
  title: query.value 
    ? `Recherche: ${query.value} | Pharmacie Agnès Praden` 
    : 'Recherche | Pharmacie Agnès Praden',
  meta: [
    {
      name: 'description',
      content: query.value 
        ? `Résultats de recherche pour "${query.value}" sur la pharmacie en ligne Agnès Praden à Alès.` 
        : 'Recherchez parmi notre vaste gamme de produits pharmaceutiques et parapharmaceutiques.'
    },
    {
      name: 'og:title',
      content: query.value 
        ? `Recherche: ${query.value} | Pharmacie Agnès Praden` 
        : 'Recherche | Pharmacie Agnès Praden'
    },
    {
      name: 'og:description',
      content: query.value 
        ? `Découvrez nos produits correspondant à "${query.value}" sur la pharmacie en ligne Agnès Praden.` 
        : 'Recherchez parmi notre vaste gamme de produits pharmaceutiques et parapharmaceutiques.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://pharmacieagnespraden.com/search${query.value ? `?q=${encodeURIComponent(query.value)}` : ''}`,
    }
  ]
});
</script>

<style scoped>
/* Styles spécifiques à la page de recherche */
.icon-6xl {
  width: 6rem;
  height: 6rem;
}
</style>