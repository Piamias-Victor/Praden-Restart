<template lang="pug">
    div.flex.flex-col.gap-10
      ft-categories(:categoriesVM="categoriesVM")
      ft-slider
      ft-product-list(:products="productInPromotion.products") La sélection du pharmacien
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
import { useProductGateway } from '../../../../../gateways/productGateway';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { listPromotions } from '@core/usecases/list-promotions/listPromotions';
import { getProductInPromotionVM } from '@adapters/primary/viewModels/get-product/getProductVM';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { listMyOrder } from '@core/usecases/list-my-orders/listMyOrders';

definePageMeta({ layout: 'main' });

onMounted(() => {
  listDeliveryMethods(deliveryGateway);
  listCategories(categoryGateway());
  listLaboratories(laboratoryGateway());
  listPromotions(useProductGateway());
});

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const productInPromotion = computed(() => {
  return getProductInPromotionVM();
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
    {
      uuid: '2',
      name: 'Ensemble, prenons le cancer de vitesse',
      icon: 'https://i.postimg.cc/zXF5tKmm/oct-rose-cmjn.png',
      url: 'https://www.pharmabest.com/blog/article/20241001-ensemble-prenons-le-cancer-de-vitesse',
      date: '01/10/2024',
    },
    {
      uuid: '3',
      name: 'Faites le plein de vitamines POUR LA RENTRÉE !',
      icon: 'https://i.postimg.cc/RZpGQSRr/img-visu1.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-faites-le-plein-de-vitamines-pour-la-rentree',
      date: '01/09/2024',
    },
    {
      uuid: '4',
      name: 'Les indispensables pour une rentrée EN TOUTE SÉRÉNITÉ',
      icon: 'https://i.postimg.cc/66hrf6WH/img-visu2.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-les-indispensables-pour-une-rentree-en-toute-serenite',
      date: '01/09/2024',
    },
    {
      uuid: '5',
      name: 'Faire face à la canicule EN TROIS GESTES',
      icon: 'https://i.postimg.cc/SRtj1vtK/istock-495291758.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240701-faire-face-a-la-canicule-en-trois-gestes',
      date: '01/07/2024',
    },
  ],
};
</script>
