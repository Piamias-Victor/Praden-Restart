<template lang="pug">
div.bg-white.rounded-xl.pt-2(class='w-[50vw] sm:w-[15vw] min-h-[320px] flex flex-col justify-between relative')
  div.absolute.top-0.left-0.bg-main.text-white.text-xs.font-bold.p-2.rounded-tr-lg.rounded-bl-lg.z-10
      span {{ product.promo }}
  div.flex.flex-col.items-center.justify-center.gap-4.relative
      nuxt-link.h-full.flex.items-center(
      :href="product.href"
      @click="clicked")
          img.p-4(
              class='min-h-[200px] h-[200px] w-full object-cover'
              :src="product.images[0]"
              :alt="product.name")
              
      ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
          v-if="likeQuantity && likeQuantity.items && likeQuantity.items[product.uuid]"
          @click="removeItemFromFavorite(product.uuid)"
          aria-label="Remove from favorites"
      )
          icon.icon-lg(name="ph:heart-fill")

      ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
          v-if="likeQuantity && likeQuantity.items && !likeQuantity.items[product.uuid]"
          @click="addItemToFavorite(product.uuid)"
          aria-label="Add to favorites"
      )
          icon.icon-lg(name="ph:heart-bold")
      
  div.w-full.flex.flex-col.px-4.text-left.flex-grow
      span.w-full.text-xs.font-semibold.mb-1.line-clamp-2(class='min-h-[5vh] sm:min-h-[3vh]') {{ product.name }}
      div.flex.items-center.justify-between.gap-2
        span(:class="product.pricePromo ? 'line-through' : 'font-bold text-main'") {{ product.price }}
        span.font-bold.text-main(v-if="product.pricePromo") {{ product.pricePromo }}
  ft-add-to-cart-button(:product-uuid="product.uuid" class='mt-auto')
</template>

<script lang="ts" setup>
import {
  addToFavorite,
  removeFromFavorite
} from '@core/usecases/add-to-favorite/addToFavorite'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm'
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification'
import { sendNotifLike } from '@core/usecases/add-notif/cartNotif'

defineProps({
  product: { type: Object, required: true }
})

const addItemToFavorite = (uuid: string) => {
  addToFavorite(uuid, useProductGateway())
  sendUserNotif()
}

const removeItemFromFavorite = (uuid: string) => {
  removeFromFavorite(uuid)
}

const sendUserNotif = () => {
  setTimeout(sendNotifLike)
  setTimeout(removeFirstNotification, 1500)
}

export interface LikeQuantityVM {
  items: HashTable<number>
  totalQuantity: number
}

const likeQuantity = ref<LikeQuantityVM | null>(null)

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway())
})
</script>
