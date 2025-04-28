<template lang="pug">
ft-categories(:categoriesVM="categoriesVM2")
//- ft-child-categories(:categoriesVM="categoriesVM" :categoriesVM2="categoriesVM2")
div.flex.px-2.flex.items-center.justify-between.gap-4.mt-4(ref='top')
    div.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl')
      h1 {{categoryVM.name}}
      nav.breadcrumbs.flex.items-center.text-sm.text-gray-600.mt-2
        nuxt-link.text-main.font-medium(href="/") Accueil
        span.mx-2 /
        template(v-for="(breadcrumb, index) in breadcrumbs" :key="index")
          nuxt-link.text-main.font-medium(:href="breadcrumb.href") {{ breadcrumb.name }}
          span.mx-2(v-if="index < breadcrumbs.length - 1") /
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
div.px-2.flex.flex-col.gap-2(v-if='categoryVM && categoryVM.description')
    span.text-sm.prose-xl.line-clamp-2.text-contrast(v-if='categoryVM' v-html="categoryVM.description")
    span.text-sm.text-main.cursor-pointer.underline.text-center(@click="scrollToDescription") Voir Plus
ft-product-cat-list(:products="filteredProducts")
div.h-4
div.px-2.mt-2.w-full.flex.items-center.flex-col.justify-center.gap-2(ref='description' v-if='categoryVM && categoryVM.description')
    span.text-center.text-main.text-4xl.font-semibold Description
    span.text-sm.prose-xl(v-if='categoryVM' v-html="categoryVM.description")
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
import { listBanner } from '@core/usecases/list-banner/listBanner';
import { bannerGateway } from '../../../../../../gateways/bannerGateway';
import { listBestSales } from '@core/usecases/list-promotions/listPromotions';
import { useHead, useRoute } from 'nuxt/app';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { getBreadcrumbTrail } from '@adapters/primary/viewModels/get-category/getCategoryVM';

definePageMeta({ layout: 'main' });

function extractUuidFromPath(path: string): string {
  console.log('path', path)
  const [_, uuid] = path.split('?');
  console.log('uuid', uuid)
  return uuid || '';
}

onMounted(() => {
  listDeliveryMethods(deliveryGateway);
  listCategories(categoryGateway());
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
  listDeliveryMethods(deliveryGateway);
  listBanner(bannerGateway());
  listBestSales(useProductGateway());
});

const route = useRoute();

const breadcrumbs = computed(() => getBreadcrumbTrail(categoryUuid));

const fullPath = route.fullPath as string; // Assurez-vous que `uuid` est le bon paramètre dans vos routes
const extractedUuid = extractUuidFromPath(fullPath);
const categoryUuid = extractedUuid
const description = ref(null);
const top = ref(null);


const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

const categoriesVM2 = computed(() => {
  return getRootCategoriesVM();
});

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

const filteredProducts = computed(() => {
  getLaboratoryByName(laboratoryFilter.value, '', searchGateway());
  let res = searchVM.value.items || [];
  if (priceFilter.value) {
    res = res.filter(
      (product) =>
        parsePrice(product.price) >= priceFilter.value[0] && parsePrice(product.price) <= priceFilter.value[1],
    );
  }
  return res;
});

watchEffect(() => {
  if (laboratoryFilter.value.length === 0) {
    getCategory(categoryUuid, categoryGateway(), searchGateway());
  }
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
const { data: categoryVM, pending, error } = await useAsyncData(`category-${categoryUuid}`, async () => {
  if (!categoryUuid) {
    console.error("Erreur : aucun UUID trouvé dans l'URL");
    return null;
  }

  try {
    console.log("Envoi de la requête API avec UUID :", categoryUuid);
    await getCategory(categoryUuid, categoryGateway(), searchGateway());
    const category = getCategoryVM();

    if (!category) {
      console.error("Erreur : aucun résultat de `getCategoryVM()`");
      return null;
    }

    console.log("Catégorie récupérée :", category);
    return category;
  } catch (err) {
    console.error("Erreur lors de la récupération de la catégorie :", err);
    return null;
  }
});

useHead(() => {
  console.log('categoryVM :',categoryVM.value)
  if (!categoryVM.value) return {}; // ⚠️ Évite d'exécuter `useHead()` si `categoryVM` est vide
  console.log('categoryVM :',categoryVM.value)

  return {
    title: `${categoryVM.value.name} - Catégorie`,
    meta: [
      {
        name: "description",
        content: categoryVM.value.description && categoryVM.value.description.trim()
          ? `${categoryVM.value.description.slice(0, 310)}...`
          : `Explorez notre catégorie ${categoryVM.value.name}. Découvrez des produits de qualité adaptés à vos besoins.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://pharmacieagnespraden.com${route.fullPath}`, // URL actuelle de la page comme lien canonique
      },
    ],
  };
});

const searchVM = computed(() => {
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

