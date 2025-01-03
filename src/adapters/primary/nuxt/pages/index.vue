<template lang="pug">
    div.flex.flex-col.gap-10
      ft-categories(:categoriesVM="categoriesVM")
      ft-slider(:bannerVM="bannerVM")
      ft-product-list(:products="products.products") La sélection du pharmacien
      ft-product-list(:products="productInPromotion.products") Promotion
      ft-brand-list
      ft-blog(:blogVm='blogVm')
      ft-review
      ft-information
      ft-network
      div.h-10
      ft-newsletter
      ft-navigation
    </template>

<script lang="ts" setup>
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import deliveryGateway from '../../../../../gateways/deliveryGateway';
import { categoryGateway } from '../../../../../gateways/categoryGateway';
import { myOrderGateway } from '../../../../../gateways/myOrderGateway';
import { laboratoryGateway } from '../../../../../gateways/laboratoryGateway';
import { bannerGateway } from '../../../../../gateways/bannerGateway';
import { useProductGateway } from '../../../../../gateways/productGateway';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { listPromotions, listBestSales } from '@core/usecases/list-promotions/listPromotions';
import { getProductInPromotionVM, getBestSales } from '@adapters/primary/viewModels/get-product/getProductVM';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { listMyOrder } from '@core/usecases/list-my-orders/listMyOrders';
import { listBanner } from '@core/usecases/list-banner/listBanner';
import { getBannerVM } from '@adapters/primary/viewModels/get-banner/getBannerVM';

definePageMeta({ layout: 'main' });

onMounted(() => {
  listDeliveryMethods(deliveryGateway);
  listCategories(categoryGateway());
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
  listBanner(bannerGateway());
  listBestSales(useProductGateway());
});

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const bannerVM = getBannerVM();

const productInPromotion = computed(() => {
  return getProductInPromotionVM();
});

const products = computed(() => {
  return getBestSales();
});

const blogVm = {
  items: [
    {
      uuid: '0',
      name: 'Grossesse et soins vergetures',
      icon: 'https://daylilyparis.com/cdn/shop/articles/vergetures_grossesse-Daylily_Paris.jpg?v=1708429258',
      url: 'https://be7ceee6.praden-restart.pages.dev/blog/0',
      date: '01/12/2024',
    },
    {
      uuid: '1',
      name: 'Gérer efficacement son stress',
      icon: 'https://storage.letudiant.fr/mediatheque/letudiant/9/0/2410890-comment-ge-rer-son-stress-766x438.jpg',
      url: 'https://be7ceee6.praden-restart.pages.dev/blog/1',
      date: '01/12/2024',
    },
  ],
};
</script>
