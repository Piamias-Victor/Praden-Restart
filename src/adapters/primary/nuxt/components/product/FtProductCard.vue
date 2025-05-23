<template lang="pug">
  div.bg-white.rounded-xl.pt-2(class='w-[65vw] sm:w-[15vw] min-h-[320px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
        @mouseenter="isHovered = true" @mouseleave="isHovered = false")
    div.absolute.top-0.left-0.bg-main.text-white.text-xs.font-bold.p-2.rounded-tl-lg.rounded-full.z-10(v-if="product.promotion?.price")
        span.text-xl.promo-amount(:class="{ 'promo-amount-hover': isHovered }") {{ product.promotion?.amount ? '- ' + product.promotion.amount : '' }}
    div.flex.flex-col.items-center.justify-center.gap-4.relative
        nuxt-link.h-full.flex.items-center(
        :href="formatProductHref(product)"
        @click="goToProduct(product)")
            img.p-4(
                v-if="product && product.images && product.images.length > 0"
                class='min-h-[200px] h-[200px] w-full object-cover'
                :src="product.images?.[0]" 
                :alt="product.name") 
            img.p-4(
                v-else
                class='min-h-[200px] h-[200px] w-full object-cover'
                src="https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg" 
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
          span(:class="product.promotion?.price ? 'line-through' : 'font-bold text-main'") {{ product.price }}
          span.font-bold.text-main(v-if="product.promotion?.price") {{ product.promotion.price }}
    div.w-full.text-center.mt-auto
        ft-add-to-cart-button(
          :product-uuid="product.uuid" 
          :isMedicine="product.isMedecine" 
          :availableStock="product.availableStock - 3"
          :maxQuantity="product.maxQuantity"
          class='mt-auto' 
          v-if="product.availableStock > 0"
        )
        div.bg-main.rounded-b-xl.mt-1(class='p-0.5' v-else)
          ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold
            span Bientôt disponible
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { addToFavorite, removeFromFavorite } from '@core/usecases/add-to-favorite/addToFavorite';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { sendNotifLike } from '@core/usecases/add-notif/cartNotif';

defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

const formatProductHref = (product: { name: string; uuid: string }): string => {
  // Formate le nom en un slug SEO-friendly
  const formattedName = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets en début ou fin de chaîne

  return `/products/${formattedName}?${product.uuid}`;
};

const router = useRouter();

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

const goToProduct = (product: string) => {
  const formattedUrl = formatProductHref(product); // Crée l'URL formatée
  router.push(formattedUrl); // Redirige vers l'URL
  close(); // Émet l'événement de fermeture
};

const isHovered = ref(false);
const likeQuantity = ref<LikeQuantityVM | null>(null);

const addItemToFavorite = (uuid: string) => {
  addToFavorite(uuid, useProductGateway());
  sendUserNotif();
};

const removeItemFromFavorite = (uuid: string) => {
  removeFromFavorite(uuid);
};

const sendUserNotif = () => {
  setTimeout(sendNotifLike);
  setTimeout(removeFirstNotification, 1500);
};

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway());
});
</script>

<style scoped>
.promo-amount {
  transition:
    font-size 0.3s ease,
    transform 0.3s ease;
}

.promo-amount-hover {
  font-size: 1.85rem;
}
</style>