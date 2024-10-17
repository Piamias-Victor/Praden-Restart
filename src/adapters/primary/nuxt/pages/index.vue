<template lang="pug">
ft-categories(:categoriesVM="categoriesVM")
ft-slider
ft-product-list(:products="productsArray") La sélection du pharmacien
div.h-4
ft-product-list(:products="productsArray") Promotion
ft-test
div.h-4
section.px-2
    div.flex.items-center.justify-center.py-2
      span.text-2xl.font-bold.text-center(class='lg:text-3xl') Découvrez nos articles
    div.h-2
    div.px-4
        img.block.rounded-xl.w-full(
                class='max-h-[350px]'
                src="https://i.postimg.cc/9FTJPY72/Capture-d-e-cran-2024-10-17-a-12-36-59.png"
                alt="pub"
                )
    ft-blog(:blogVm='blogVm')
div.mt-4
section.px-2
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') Avis
ft-review
ft-navigation
</template>

<script lang="ts" setup>
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods'
import deliveryGateway from '../../../../../gateways/deliveryGateway'
import { categoryGateway } from '../../../../../gateways/categoryGateway'
import { listCategories } from '@core/usecases/list-categories/listCategories'
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM'

definePageMeta({ layout: 'main' })

onMounted(() => {
  listDeliveryMethods(deliveryGateway)
  listCategories(categoryGateway())
})

const categoriesVM = computed(() => {
  return getRootCategoriesVM()
})

const productTest1 = {
  href: '/products/5ee46259-1d14-4ae5-8abe-651529ed2be5',
  uuid: '5ee46259-1d14-4ae5-8abe-651529ed2be5',
  price: '8,99 €',
  name: "Boiron Mag'300+ fatigue générale 160 comprimés",
  laboratory: 'BOIRON',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358'
  ]
}

const productTest2 = {
  href: '/products/5fff6558-c618-42d9-984b-9a8493e0fa46',
  uuid: '5fff6558-c618-42d9-984b-9a8493e0fa46',
  price: 1.99,
  name: 'Physiodose sérum physiologique 40 doses 5ml',
  laboratory: 'GILBERT',
  availableStock: 200,
  images: [
    'https://www.pharmacieagnespraden.com/69044-large_default/gilbert-physiodose-srum-physiologique-40-doses-5-ml.jpg'
  ]
}

const productTest3 = {
  href: '/products/5fff6558-c618-42d9-984b-9a8493e0fa46',
  uuid: '5fff6558-c618-42d9-984b-9a8493e0fa46',
  price: 4.99,
  name: 'Cinq sur Cinq crème apaisante 3 en 1 40g',
  laboratory: 'BAUSCH & LOMB',
  availableStock: 200,
  images: [
    'https://www.pharmacieagnespraden.com/51065-large_default/n-cinq-sur-cinq-cr-apais-40g-1.jpg'
  ]
}

const productsArray = [
  productTest1,
  productTest2,
  productTest3,
  productTest1,
  productTest2,
  productTest3,
  productTest1,
  productTest2
]

const blogVm = {
  items: [
    {
      uuid: '1',
      name: 'Ensemble, prenons le cancer de vitesse',
      icon: 'https://i.postimg.cc/zXF5tKmm/oct-rose-cmjn.png',
      url: 'https://www.pharmabest.com/blog/article/20241001-ensemble-prenons-le-cancer-de-vitesse',
      date: '01/10/2024'
    },
    {
      uuid: '2',
      name: 'Faites le plein de vitamines POUR LA RENTRÉE !',
      icon: 'https://i.postimg.cc/RZpGQSRr/img-visu1.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-faites-le-plein-de-vitamines-pour-la-rentree',
      date: '01/09/2024'
    },
    {
      uuid: '3',
      name: 'Les indispensables pour une rentrée EN TOUTE SÉRÉNITÉ',
      icon: 'https://i.postimg.cc/66hrf6WH/img-visu2.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-les-indispensables-pour-une-rentree-en-toute-serenite',
      date: '01/09/2024'
    },
    {
      uuid: '4',
      name: 'Faire face à la canicule EN TROIS GESTES',
      icon: 'https://i.postimg.cc/SRtj1vtK/istock-495291758.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240701-faire-face-a-la-canicule-en-trois-gestes',
      date: '01/07/2024'
    }
  ]
}
</script>
