<template lang="pug">
ft-categories(:categoriesVM="categoriesVM")
div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4(ref='top')
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Promotions
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
                    icon.icon-sm.text-main.hidden(name="mdi:tag-arrow-down-outline" class='sm:block')
                    span.ml-2.text-xs(class='sm:text-sm') Décroissant
                div.cursor-pointer.p-2.flex.items-center.rounded-xl(class='hover:bg-contrast hover:text-main' @click="sortBy(3)")
                    icon.icon-sm.text-main.hidden(name="teenyicons:discount-outline" class='sm:block')
                    span.ml-2.text-xs(class='sm:text-sm') Promotion
        ft-button-animate.text-main.flex.items-center.justify-center.bg-white(@click="openFilter")
            span.text-main.font-semibold.hidden(class='sm:block') Filtres
            icon.icon-lg(name="mdi:filter-outline")
ft-navigation
div.h-2
div.px-2.flex.flex-col.gap-2
    span.text-sm.prose-xl.line-clamp-2.text-contrast(v-if='laboratoryInfo && laboratoryInfo.item' v-html="laboratoryInfo.item.description")
    span.text-sm.text-main.cursor-pointer.underline.text-center(@click="scrollToDescription") Voir Plus
ft-product-cat-list(:products="filteredProducts")
div.h-4
div.px-2.mt-2.w-full.flex.items-center.flex-col.justify-center.gap-2(ref='description' v-if='laboratoryInfo && laboratoryInfo.item')
    span.text-center.text-main.text-4xl.font-semibold Description
    span.text-sm.prose-xl(v-if='laboratoryInfo && laboratoryInfo.item' v-html="laboratoryInfo.item.description")
div.h-4
div.flex.items-center.justify-center
    ft-button.button-solid.text-xl.px-8(@click="scrollToTop")
        span Retourner en haut de page
        icon.icon-md(name='line-md:arrow-up')
div.h-4
ft-panel2(v-if="filterOpened" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory"  @searchPrice="searchPrice" :facetsVM="facetsVM" :sortType="sortType" :laboratoryFilter="laboratoryFilter")
</template>

<script lang="ts" setup>
import { getCategory, getCategoryVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';
import { categoryGateway } from '../../../../../gateways/categoryGateway';
import { searchGateway } from '../../../../../gateways/searchGateway';
import { SortType } from '@utils/sort';
import { onMounted, ref, computed } from 'vue';
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getChildCategoriesVM } from '@adapters/primary/viewModels/get-category/getChildCategoryVM';
import { getLaboratoryByNamePromo } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { listPromotions } from '@core/usecases/list-promotions/listPromotions';
import deliveryGateway from '../../../../../gateways/deliveryGateway';
import { laboratoryGateway } from '../../../../../gateways/laboratoryGateway';
import { useProductGateway } from '../../../../../gateways/productGateway';
import { get400ProductInPromotionVM } from '@adapters/primary/viewModels/get-product/getProductVM';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { searchPromotion } from '@core/usecases/search-product/searchProduct';
import { getLaboratory } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { getLaboratoryInfo } from '@core/usecases/list-laboratories/listLaboratories';
import { useHead } from 'nuxt/app';

definePageMeta({ layout: 'main' });

onMounted(async () => {
  listDeliveryMethods(deliveryGateway);
  listCategories(categoryGateway());
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
  searchPromotion(searchGateway());
  listLaboratories(laboratoryGateway());
  getLaboratory('f464691f-7f61-464e-a063-9eff0ab7a714', laboratoryGateway(), searchGateway());
  try {
    laboratoryInfo.value = await getLaboratoryInfo(laboratoryGateway(), 'f464691f-7f61-464e-a063-9eff0ab7a714');
  } catch (error) {
    console.error('Erreur lors de la récupération des infos laboratoire :', error);
  }
});

const laboratoryInfo = ref(null);

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const description = ref(null);
const top = ref(null);

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

function scrollToDescription() {
  description.value?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
  top.value?.scrollIntoView({ behavior: 'smooth' });
}

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const route = useRoute();
const categoryUuid = route.params.uuid;
const priceFilter = ref<string | null>(null);
const sortType = ref(SortType.None);
const laboratoryFilter = ref<Array<string>>([]);

const searchPrice = (price: any) => {
  priceFilter.value = price;
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
  if (!labo) {
    laboratoryFilter.value = [];
  } else if (!laboratoryFilter.value.includes(labo)) {
    laboratoryFilter.value.push(labo);
  } else {
    laboratoryFilter.value = laboratoryFilter.value.filter((item) => item !== labo);
  }
};

const searchVM = computed(() => {
  const result = getSearchResultVM(sortType.value);
  return { ...result }; // Force une réactivité
});

const filteredProducts = computed(() => {
  getLaboratoryByNamePromo(laboratoryFilter.value, '', searchGateway());
  if (laboratoryFilter.value.length === 0) {
    searchPromotion(searchGateway());
  }
  let res = searchVM.value.items || [];
  if (priceFilter.value) {
    res = res.filter(
      (product) =>
        parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1],
    );
  }
  return res;
});

const parsePrice = (priceString: string) => {
  const cleanedString = priceString.replace(/[^0-9,]/g, '').replace(',', '.');
  return Math.round(parseFloat(cleanedString) * 100);
};

const categoryVM = computed(() => getCategoryVM(sortType.value));

const facetsVM = computed(() => getFacetsVM());
const filterOpened = ref(false);

const openFilter = () => {
  filterOpened.value = true;
};

const closeCart = () => {
  filterOpened.value = false;
};

useHead({
  title: 'Promotions - Découvrez nos offres spéciales | Pharmacie Agnès Praden',
  meta: [
    {
      name: 'description',
      content:
        'Profitez des meilleures promotions en parapharmacie et matériel médical chez la Pharmacie Agnès Praden. Découvrez des produits en promotion à prix réduits.',
    },
  ],
});
</script>
