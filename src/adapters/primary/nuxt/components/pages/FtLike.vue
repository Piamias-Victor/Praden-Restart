<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mes favoris
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
        div.flow-root
            ul.-my-6.divide-y.divide-gray12.text-left
                div(v-for='item in like.items' :key="item.uuid")
                  pre {{item.medecine}}
                  ft-product-cart(:item="item")
div.mt-4
span.px-4.text-contrast.font-semibold Sauvegarder vos articles favoris pour les retrouver en un clic
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    div.flex.justify-between.items-center.text-lg
        p.font-semibold.text-main.text Total panier
        div.flex.flex-col.pl-2
            span.text-sm(:class="cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPrice }}
            span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
    p.text-xs(class="mt-0.5").text-left Les frais de port ne sont pas compris
    div.mt-4
        ft-button.button-solid.w-full.text-xl(@click="close") Reprendre mes achats
</template>

<script lang="ts" setup>
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { getLikeVM } from '@adapters/primary/viewModels/get-like/getLikeVM';

const router = useRouter();

const likeQuantity = ref<LikeQuantityVM | null>(null);

const cart = computed(() => {
  return getCartVM();
});

const like = computed(() => {
  return getLikeVM();
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'move-stepper'): void;
}>();

const close = () => {
  emit('close');
};

function closeModal() {
  emit('close');
}

const validateCart = () => {
  emit('move-stepper');
};

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway());
});
</script>
