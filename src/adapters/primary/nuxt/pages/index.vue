<template lang="pug">
ft-header
ft-categories(:categoriesVM="categoriesVM")
ft-slider
ft-product-list(:products="productsArray") La sélection du pharmacien
ft-product-list(:products="productsArray") Promotion
ft-test
section.px-2
    div.flex.items-center.justify-between
        span.text-lg.font-semibold Avis
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
  price: '8,99',
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
</script>
