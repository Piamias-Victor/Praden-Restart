<template lang="pug">
  ft-categories(:categoriesVM="categoriesVM")
  nav.breadcrumbs.flex.items-center.text-sm.text-gray-600.m-2
        nuxt-link.text-main.font-medium(href="/") Accueil
        span.mx-2 /
        nuxt-link.text-main.font-medium(href="/laboratory") Laboratoires
        span.mx-2 /
        nuxt-link.text-main.font-medium(:href="`/laboratory`") {{ productVM.laboratory }}
        span.mx-2 /
        span.text-main.font-semibold {{ productVM.name }}
  
  div.mt-4
    div.mx-auto.max-w-2xl(class='lg:max-w-none relative')
      div(class='grid grid-cols-1 sm:grid-cols-2 sm:items-start sm:gap-x-8')
        div.flex.flex-col.justify-start
          div.relative
            ft-image-gallery(
              :key="productVM.uuid"
              :images="productVM.images"
            )
            ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
              v-if="likeQuantity && likeQuantity.items && likeQuantity.items[productVM.uuid]"
              @click="removeItemFromFavorite(productVM.uuid)"
              aria-label="Remove from favorites"
            )
              icon.icon-lg.text-main(name="ph:heart-fill")
  
            ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
              v-if="likeQuantity && likeQuantity.items && !likeQuantity.items[productVM.uuid]"
              @click="addItemToFavorite(productVM.uuid)"
              aria-label="Add to favorites"
            )
              icon.icon-lg.text-main(name="ph:heart-bold")
  
          ft-add-to-cart-button(:product-uuid="productId" :isMedicine="productVM.isMedicine" :availableStock="productVM.availableStock - 3" v-if="productVM && productVM.availableStock && productVM.availableStock > 0")
          div.bg-main.rounded-b-xl.mt-1(class='p-0.5' v-else)
            ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold
              span Bientôt disponible
  
          div.absolute.top-0.left-0.bg-main.text-white.text-xl.font-bold.p-2.rounded-tr-lg.rounded-bl-lg.z-10(v-if="productVM.promotion")
            span {{'- ' + productVM.promotion.amount}}
  
        div.px-4.flex.flex-col.justify-between
          div.mt-2
            h1.text-lg.font-semibold.tracking-tight(class='lg:text-3xl')
              | {{ productVM.name }}
  
          div.mt-2.flex.justify-between.items-end(class='lg:pr-12')
            span.font-bold.text-main.text-xl(v-if="productVM.promotion && productVM.promotion.price" class='lg:text-4xl') {{ productVM.promotion.price }}
            span.text-xl.font-bold.tracking-tight(:class="productVM.promotion && productVM.promotion.price ? 'line-through lg:text-4xl' : 'font-bold text-main lg:text-4xl'") {{ productVM.price }}
  
          // 🔥 Ajout du texte simple pour les médicaments
          div.mt-2.text-sm.text-main(v-if="productVM.isMedicine")
            | Ce produit est un médicament et n'intègre pas l'offre frais de port offerts.
  
          div.h-2
          span.text-sm.font-bold.tracking-tight.text-contrast(class='lg:text-xl') {{ productVM.laboratory }}
  
          div.mt-4
            div.space-y-6.text-base.text-contrast(style="white-space: pre-line")
              div.text-sm(v-html="productVM.description")
  
          div.mt-2.flex.flex-col.gap-4(aria-labelledby='details-heading')
            ft-disclosure(v-for='detail in productVM.details' :key='detail.name')
              template(#title) {{ detail.name }}
              div.text-base.text-contrast(v-if="detail.name !== 'Notice'" style="white-space: pre-line")
                div.text-xs(v-html="detail.value")
              iframe.w-full.h-screen(v-else :src="detail.value")
  
      ft-navigation
      ft-product-list.mt-4(:products="searchVM") Ces produits peuvent vous plaire
  </template>

<script lang="ts" setup>
import { onMounted, ref, computed, watchEffect } from 'vue';
import { getProduct } from '@core/usecases/get-product/getProduct';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { categoryGateway } from '../../../../../../gateways/categoryGateway';
import { getProductVM } from '@adapters/primary/viewModels/get-product/getProductVM';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getSearchResultVMFirstSix } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { searchProduct } from '@core/usecases/search-product/searchProduct';
import { addToFavorite, removeFromFavorite } from '@core/usecases/add-to-favorite/addToFavorite';
import { sendNotifLike } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { getCategoryVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';
import { listBestSales } from '@core/usecases/list-promotions/listPromotions';
import { getSearchLaboratoriesVM } from '@adapters/primary/viewModels/get-category/getSearchCategoryVM';
import { getLaboratoryByName } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import { listPromotions } from '@core/usecases/list-promotions/listPromotions';
import { listBanner } from '@core/usecases/list-banner/listBanner';
import { bannerGateway } from '../../../../../../gateways/bannerGateway';
import deliveryGateway from '../../../../../../gateways/deliveryGateway';
import { useHead } from 'nuxt/app';

definePageMeta({ layout: 'main' });

const productId = ref<string | null>(null);

const isPromo = ref(false);

const route = useRoute();

const formatLaboratory = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

function extractUuidFromPath(path: string): string {
  console.log('path', path)
  const [_, uuid] = path.split('?');
  console.log('uuid', uuid)
  return uuid || '';
}

onMounted(() => {
  console.log('route.params', route.fullPath)
  listDeliveryMethods(deliveryGateway);
  listPromotions(useProductGateway());
  listBanner(bannerGateway());

  // Extraire l'UUID du chemin
  const fullPath = route.fullPath as string; // Assurez-vous que `uuid` est le bon paramètre dans vos routes
  const extractedUuid = extractUuidFromPath(fullPath);
  console.log('extractedUuid', extractedUuid)

  productId.value = extractedUuid; // Stocker l'UUID extrait

  // Fetch le produit avec l'UUID extrait
  getProduct(productId.value, useProductGateway());

  listCategories(categoryGateway());
  listBestSales(useProductGateway());
  listLaboratories(laboratoryGateway());
});

const productVM = computed(() => {
  return getProductVM();
});

const formatProductHref = (product: { name: string; uuid: string }): string => {
  // Formate le nom en un slug SEO-friendly
  const formattedName = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets en début ou fin de chaîne

  return `/products/${formattedName}?${product.uuid}`;
};

const canonicalUrl = computed(() => {
  if (!productVM.value || !productId.value) return '';

  return `https://www.pharmacieagnespraden.com${formatProductHref({
    name: productVM.value.name,
    uuid: productId.value,
  })}`;
});

useHead(() => {
  return {
    title: productVM.value
      ? `${productVM.value.name} - ${productVM.value.laboratory}`
      : 'Pharmacie Agnès',
    meta: [
      {
        name: 'description',
        content: productVM.value
          ? `Commandez ${productVM.value.name} en ligne sur pharmacie Agnes Praden ou faites vous livrer à domicile, en point relais ou à la pharmacie à Alès en click and collect `
          : 'Pharmacie Agnès - Produits pharmaceutiques de qualité.',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl, // Construire l'URL complète
      },
    ],
  };
});

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const sendUserNotif = () => {
  setTimeout(sendNotifLike);
  setTimeout(removeFirstNotification, 1500);
};

const addItemToFavorite = (uuid: string) => {
  addToFavorite(uuid, useProductGateway());
  sendUserNotif();
};

const removeItemFromFavorite = (uuid: string) => {
  removeFromFavorite(uuid);
};

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

const likeQuantity = ref<LikeQuantityVM | null>(null);

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway());
});

const categoryVM = computed(() => {
  return getCategoryVM();
});

const searchVM = computed(() => {
  let res = getSearchResultVMFirstSix(route.params.uuid as string);
  return res.items;
});

const laboratoriesVM = computed(() => {
  return getSearchLaboratoriesVM(query.value);
});

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Utilisation de watchEffect pour détecter les changements de laboratory
watchEffect(async () => {
  const laboratory = productVM.value?.laboratory;
  if (laboratory) {
    try {
      // const laboratoryName = removeAccents(laboratory.split(' ')[0].toLowerCase());
      const result = getLaboratoryByName([laboratory], '', searchGateway());
      // Mettre à jour ici searchVM ou un autre état si nécessaire
    } catch (error) {}
  } else {
  }
});
</script>
