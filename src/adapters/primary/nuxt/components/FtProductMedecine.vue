<template lang="pug">
li.flex.py-6
    div.h-24.w-24.flex-shrink-0.overflow-hidden.rounded-md.border
        img.h-full.w-full.object-cover.object-center(
            :src="item.img"
            :alt="item.name"
        )
    div.ml-4.flex.flex-1.flex-col.items-center.justify-center
        p.mr-1.text-sm.line-clamp-3.font-semibold {{ item.name }}
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
