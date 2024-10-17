<template lang="pug">
li.flex.py-6
    div.h-24.w-24.flex-shrink-0.overflow-hidden.rounded-md.border
        img.h-full.w-full.object-cover.object-center(
            :src="item.img"
            :alt="item.name"
        )
    div.ml-4.flex.flex-1.flex-col.items-start
        div.flex.justify-between.items-center
            span.text-sm(:class="item.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ item.totalPrice }}
            span.font-semibold.text-colored(v-if="item.totalPriceWithPromotion") {{ item.totalPriceWithPromotion }}
        p.mr-1.text-sm.line-clamp-3 {{ item.name }}
    div.flex.flex-1.items-center.justify-between
        div.flex.items-center.gap-4
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click='removeItemFromCart(item.uuid)')
                icon.icon-xs(name="ph:minus-bold")
            p.text-xl.font-semibold {{ item.quantity }}
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click='addItemToCart(item.uuid)')
                icon.icon-xs(name="ph:plus-bold")
    </template>

<script lang="ts" setup>
import { useProductGateway } from '../../../../../gateways/productGateway'
import { addToCart } from '@core/usecases/add-to-cart/addToCart'
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart'

defineProps({
  item: { type: Object, required: true }
})

const addItemToCart = (uuid: string) => {
  addToCart(uuid, useProductGateway())
}

const removeItemFromCart = (uuid: string) => {
  removeFromCart(uuid)
}

const removeAllItemByUuidFromCart = (uuid: string) => {
  removeAllItemFromCartByUuid(uuid)
}
</script>
