<template lang="pug">
    div.flex.flex-col.gap-10
      ft-categories(:categoriesVM="categoriesVM")
      ft-slider(:bannerVM="bannerVM")
      ft-product-list(:products="productInPromotion.products") Promotion
      ft-product-list(:products="products.products") La sélection du pharmacien
      ft-brand-list
      ft-blog(:blogVm='blogVm')
      ft-review
      ft-information
      ft-network
      div.h-10
      //- ft-newsletter
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

useHead(() => {
  return {
    title: `Pharmacie Agnes Praden - ALES`,
    meta: [
      {
        name: 'description',
        content: `Commandez en ligne sur pharmacie Agnes Praden ou faites vous livrer à domicile, en point relais ou à la pharmacie à Alès en click and collect `,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://pharmacieagnespraden.com', // Construire l'URL complète
      },
    ],
  };
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

// Voici comment mettre à jour la variable blogVm dans votre page index.vue
// ou dans tout autre fichier qui contient cette liste

const blogVm = {
  items: [
    {
      uuid: '3',
      name: 'Quels sont les meilleurs produits anti-cellulite pour une peau lisse ?',
      icon: 'https://i.postimg.cc/V6WbM1qt/4.png',
      url: 'https://pharmacieagnespraden.com/blog/anticellulite',
      date: '24/04/2025',
    },
    {
      uuid: '2',
      name: 'Autobronzants corps & visage ',
      icon: 'https://i.postimg.cc/R0m8dLrH/3.png',
      url: 'https://pharmacieagnespraden.com/blog/autobronzants',
      date: '01/05/2025',
    },
    {
      uuid: '1',
      name: 'Gérer efficacement son stress',
      icon: 'https://storage.letudiant.fr/mediatheque/letudiant/9/0/2410890-comment-ge-rer-son-stress-766x438.jpg',
      url: 'https://pharmacieagnespraden.com/blog/gerer-son-stress',
      date: '01/12/2024',
    },
    {
      uuid: '0',
      name: 'Grossesse et soins vergetures',
      icon: 'https://daylilyparis.com/cdn/shop/articles/vergetures_grossesse-Daylily_Paris.jpg?v=1708429258',
      url: 'https://pharmacieagnespraden.com/blog/grossesse-soins-vergetures',
      date: '01/12/2024',
    },
  ],
};
</script>
