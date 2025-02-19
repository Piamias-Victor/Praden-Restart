<template lang="pug">
div.bg-white.rounded-xl.pt-2(class='w-[65vw] sm:w-[15vw] min-h-[320px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
    div.flex.flex-col.items-center.justify-center.gap-4.relative
        nuxt-link.h-full.flex.items-center(
        :href="`/products/${product.uuid}`"
        @click="clicked")
            img.p-4(
                class='min-h-[200px] h-[200px] w-full object-cover'
                :src="product.images[0]"
                :alt="product.name")
                
        ft-button-animate.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
            v-if="likeQuantity && likeQuantity.items && likeQuantity.items[product.uuid]"
            @click="removeItemFromFavorite(product.uuid)"
            aria-label="Remove from favorites"
        )
            icon.icon-lg(name="ph:heart-fill")

        ft-button-animate.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
            v-if="likeQuantity && likeQuantity.items && !likeQuantity.items[product.uuid]"
            @click="addItemToFavorite(product.uuid)"
            aria-label="Add to favorites"
        )
            icon.icon-lg(name="ph:heart-bold")
        
    div.w-full.flex.flex-col.px-4.text-left.flex-grow
        span.w-full.text-xs.font-semibold.mb-1.line-clamp-2(class='min-h-[5vh] sm:min-h-[3vh]') {{ product.name }}
        div.flex.items-center.justify-between.gap-2
            span.font-bold.text-main {{formatter.format(product.priceWithTax / 100)}}
    
    ft-add-to-cart-button(:product-uuid="product.uuid" :isMedicine="product.isMedecine" :availableStock="product.availableStock" class='mt-auto')
</template>

<script lang="ts" setup>
import { addToFavorite, removeFromFavorite } from '@core/usecases/add-to-favorite/addToFavorite';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { priceFormatter } from '@utils/formater';

defineProps({
  product: { type: Object, required: true },
});

const addItemToFavorite = (uuid: string) => {
  addToFavorite(uuid, useProductGateway());
};

const removeItemFromFavorite = (uuid: string) => {
  removeFromFavorite(uuid);
};

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

const likeQuantity = ref<LikeQuantityVM | null>(null);

const formatter = priceFormatter('fr-FR', 'EUR');

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway());
});
</script>
