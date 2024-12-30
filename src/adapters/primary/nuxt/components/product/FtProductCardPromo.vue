<template lang="pug">
div.bg-white.rounded-xl.pt-2(class='w-[65vw] sm:w-[15vw] min-h-[320px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
      @mouseenter="isHovered = true" @mouseleave="isHovered = false")
  div.absolute.top-0.left-0.bg-main.text-white.text-xs.font-bold.p-2.rounded-tl-lg.rounded-full.z-10
      // Affiche le montant de la promotion, avec une transition fluide
      span.text-xl.promo-amount(:class="{ 'promo-amount-hover': isHovered }") {{ product.promotion?.amount ? '- ' + product.promotion.amount : '' }}
  div.flex.flex-col.items-center.justify-center.gap-4.relative
      nuxt-link.h-full.flex.items-center(
      :href="product.href"
      @click="goToProduct(product.href)")
          img.p-4(
              class='min-h-[200px] h-[200px] w-full object-cover'
              :src="product.images?.[0]" 
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
  ft-add-to-cart-button(:product-uuid="product.uuid" :isMedicine="product.isMedecine" class='mt-auto')
</template>

<script lang="ts" setup>
import { addToFavorite, removeFromFavorite } from '@core/usecases/add-to-favorite/addToFavorite';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { sendNotifLike } from '@core/usecases/add-notif/cartNotif';
import { ref, watchEffect } from 'vue';

defineProps({
  product: { type: Object, required: true },
});

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

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

const likeQuantity = ref<LikeQuantityVM | null>(null);
const isHovered = ref(false); // Création d'un état de survol
const router = useRouter();

const goToProduct = (path: string) => {
  router.push(path);
  close();
  setTimeout(() => {
    close();
  }, 1000);
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
  font-size: 1.85rem; /* Agrandir le texte */
  /* transform: scale(1.2); */
}
</style>
