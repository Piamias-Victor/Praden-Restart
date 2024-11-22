<template lang="pug">
ft-child-categories(:categoriesVM="categoriesVM")
div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4(ref='top')
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') {{categoryVM.name}}
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
    span.text-sm.text-contrast.hidden(class="sm:block") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and when an u...
    span.text-sm.text-contrast(class="sm:hidden") Lorem Ipsum is simply dummy text of the printing...
    span.text-sm.text-main.cursor-pointer.underline.text-center(@click="scrollToDescription") Voir Plus
ft-product-cat-list(:products="filteredProducts")
div.h-4
div.px-2.mt-2.w-full.flex.items-center.flex-col.justify-center.gap-2(ref='description')
    span.text-center.text-main.text-xl.font-semibold.text-4xl Description
    span.text-sm.text-contrast {{text}}
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
import { categoryGateway } from '../../../../../../gateways/categoryGateway';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { SortType } from '@utils/sort';
import { onMounted, ref, computed } from 'vue';
import { getFacetsVM } from '@adapters/primary/viewModels/get-facets/getFacetsVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getChildCategoriesVM } from '@adapters/primary/viewModels/get-category/getChildCategoryVM';
import { getLaboratoryByName } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { listPromotions } from '@core/usecases/list-promotions/listPromotions';
import deliveryGateway from '../../../../../../gateways/deliveryGateway';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { useProductGateway } from '../../../../../../gateways/productGateway';

definePageMeta({ layout: 'main' });

onMounted(() => {
  listDeliveryMethods(deliveryGateway);
  listCategories(categoryGateway());
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
});


const description = ref(null);
const top = ref(null);

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

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
    console.log('Nouveau sortType:', sortType.value);
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

const filteredProducts = computed(() => {
    console.log('laboratoryFilter.value', laboratoryFilter.value)
    getLaboratoryByName(laboratoryFilter.value, '', searchGateway());
    let res = searchVM.value.items || [];
    if (priceFilter.value) {
        res = res.filter(
            (product) =>
                parsePrice(product.price) >= priceFilter.value[0] &&
                parsePrice(product.price) <= priceFilter.value[1],
        );
    }
    return res;
});

const parsePrice = (priceString: string) => {
    const cleanedString = priceString.replace(/[^0-9,]/g, '').replace(',', '.');
    return Math.round(parseFloat(cleanedString) * 100);
};

onMounted(() => {
    listCategories(categoryGateway());
    getCategory(categoryUuid, categoryGateway(), searchGateway());
});

const categoriesVM = computed(() => getChildCategoriesVM(categoryUuid));
const categoryVM = computed(() => getCategoryVM(sortType.value));

const searchVM = computed(() => {
    console.log('searchVM recalculé avec sortType:', sortType.value);
    const result = getSearchResultVM(sortType.value);
    return { ...result }; // Force une réactivité
});

const facetsVM = computed(() => getFacetsVM());
const filterOpened = ref(false);

const openFilter = () => {
    filterOpened.value = true;
};

const closeCart = () => {
    filterOpened.value = false;
};
</script>
