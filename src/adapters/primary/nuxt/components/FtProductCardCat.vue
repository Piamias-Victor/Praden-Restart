<template lang="pug">
div.bg-white.rounded-xl.pt-2.bg-red-40(class='w-[50vw] sm:w-[15vw]')
    div.flex.flex-col.items-center.justify-center.gap-4.relative
        nuxt-link.h-full.flex.items-center(
        :href="`/products/${product.uuid}`"
        @click="clicked")
            img(
                class='max-h-[200px]'
                :src="product.images[0]"
                :alt="product.name")

        ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
            v-if='test'
            @click="addToFavorites(product.uuid)"
            aria-label="Add to favorites"
        )
            icon.icon-lg(name="heroicons:heart-solid")

        ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
            v-if='!test'
            @click="addToFavorites(product.uuid)"
            aria-label="Add to favorites"
        )
            icon.icon-lg(name="heroicons:heart")
        
    div.w-full.flex.flex-col.px-4.text-left
        span.w-full.text-xs.font-semibold.mb-1.line-clamp-2(class='min-h-[5vh] sm:min-h-[3vh]') {{product.name}}
        div.flex.items-center.justify-between.gap-2
            span.font-bold.text-main {{formatter.format(product.priceWithTax / 100)}}
    ft-add-to-cart-button(:product-uuid="product.uuid")
</template>

<script lang="ts" setup>
import { priceFormatter } from '@utils/formater';

defineProps({
  product: { type: Object, required: true }
})

const test = ref(false)

const addToFavorites = (uuid: string) => {
    test.value = !test.value
}

const formatter = priceFormatter('fr-FR', 'EUR')
</script>
