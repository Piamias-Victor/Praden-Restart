<template lang="pug">
ft-header
ft-categories(:categoriesVM="categoriesVM")
ft-slider
ft-product-list(:products="productsArray") Populaire
ft-product-list(:products="productsArray") Promotion

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
  href: '/products/83f04e67-7d59-4bdb-97df-cc67804ae621',
  uuid: '83f04e67-7d59-4bdb-97df-cc67804ae621',
  price: 12.3,
  name: 'Avene Fluide Demaquillant 3 En 1 Peaux Sensibles 200ml',
  laboratory: 'AVENE',
  availableStock: 14,
  images: [
    'https://www.pharmacieagnespraden.com/41314-large_default/avne-eau-thermale-spray-300ml.jpg'
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
