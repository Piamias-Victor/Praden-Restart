<template lang="pug">
ft-header
div.mt-4
div.mx-auto.max-w-2xl(class='lg:max-w-none')
    div(class='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8')
      ft-image-gallery(
          :key="productVM.uuid"
          :images="productVM.images"
        )
      div.mt-4.px-4.flex.justify-between.items-center
        span.text-xl.font-semibold.tracking-tight.text-main {{ productVM.price }}
        span.text.font-semibold.tracking-tight.text-contrast {{(productVM.laboratory)}}
      div.mt-2.px-4
        h1.text-lg.font-semibold.tracking-tight
          | {{ productVM.name }}
      div.mt-2.px-4
      ft-add-to-cart-button
div.mt-4
  div.mx-2.space-y-6.text-base.text-contrast(style="white-space: pre-line") 
    div.text-sm(v-html="productVM.description")
section.mt-2(aria-labelledby='details-heading')
  ft-disclosure(v-for='detail in productVM.details' :key='detail.name')
    template(#title) {{ detail.name }}
    div.text-base.text-contrast(v-if="detail.name !== 'Notice'" style="white-space: pre-line") 
      div.text-xs(v-html="detail.value")
    iframe.w-full.h-screen(v-else :src="detail.value")
</template>

<script lang="ts" setup>
import { getProduct } from '@core/usecases/get-product/getProduct'
import { useProductGateway } from '../../../../../../gateways/productGateway'
import { getProductVM } from '@adapters/primary/viewModels/get-product/getProductVM'

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
</script>
