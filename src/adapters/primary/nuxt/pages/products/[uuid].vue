<template lang="pug">
ft-header
ft-categories(:categoriesVM="categoriesVM")
div.mt-2
div.mx-auto.max-w-2xl(class='lg:max-w-none')
  div(class='grid grid-cols-1 sm:grid-cols-2 sm:items-start sm:gap-x-8')
    div.flex.flex-col.justify-start
      ft-image-gallery(
        :key="productVM.uuid"
        :images="productVM.images"
      )
      ft-add-to-cart-button(:product-uuid="productId")
    div.px-4.flex.flex-col.justify-between
      div.mt-2
        h1.text-lg.font-semibold.tracking-tight(class='lg:text-3xl')
          | {{ productVM.name }}
      div.mt-2.flex.justify-between.items-center
        span.text-xl.font-bold.tracking-tight.text-main(class='lg:text-4xl') {{ productVM.price }}
      div.mt-4
        div.space-y-6.text-base.text-contrast(style="white-space: pre-line")
          div.text-sm(v-html="productVM.description" class='lg:text-lg')
      div.mt-2(aria-labelledby='details-heading')
        ft-disclosure(v-for='detail in productVM.details' :key='detail.name')
          template(#title) {{ detail.name }}
          div.text-base.text-contrast(v-if="detail.name !== 'Notice'" style="white-space: pre-line")
            div.text-xs(v-html="detail.value")
          iframe.w-full.h-screen(v-else :src="detail.value")
ft-product-list.mt-4(:products="productsArray") Ces produits peuvent vous plaire
</template>

<script lang="ts" setup>
import { getProduct } from '@core/usecases/get-product/getProduct'
import { useProductGateway } from '../../../../../../gateways/productGateway'
import { getProductVM } from '@adapters/primary/viewModels/get-product/getProductVM'
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';

definePageMeta({ layout: 'main' })

const productId = ref<string | null>(null)

const route = useRoute()

onMounted(() => {
  productId.value = route.params.uuid as string
  getProduct(productId.value, useProductGateway())
})

const productVM = computed(() => {
  return getProductVM()
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
