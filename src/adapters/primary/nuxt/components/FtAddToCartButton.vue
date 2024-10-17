<template lang="pug">
div.bg-main.rounded-b-xl.mt-1(class='p-0.5')
  div.flex.flex-center.gap-4.text-white(v-if="cartQuantity && cartQuantity.items && cartQuantity.items[productUuid]")
    ft-button.flex-shrink-0(@click='removeItemFromCart(productUuid)')
        icon.icon-sm(name="ph:minus-bold")
    p.text-lg.font-semibold {{ cartQuantity.items[productUuid] }}
    ft-button.flex-shrink-0(@click='addItemToCart(productUuid)')
      icon.icon-sm(name="ph:plus-bold")
  ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold(v-if="cartQuantity && cartQuantity.items && !cartQuantity.items[productUuid]" @click='addItemToCart(productUuid)')
      span Ajouter au panier
      icon.icon-sm(name="ph:plus-bold")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import { addToCart } from '@core/usecases/add-to-cart/addToCart'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { removeFromCart } from '@core/usecases/remove-from-cart/removeFromCart'
import { sendNotifCart } from '@core/usecases/add-notif/cartNotif'
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification'

defineProps({
  productUuid: { type: String, required: true }
})

const cartQuantity = ref<CartQuantityVM | null>(null)

const removeItemFromCart = (uuid: string) => {
  removeFromCart(uuid)
}

const addItemToCart = (uuid: string) => {
  addToCart(uuid, useProductGateway())
  sendUserNotif()
}

const sendUserNotif = () => {
  setTimeout(sendNotifCart)
  setTimeout(removeFirstNotification, 1500)
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})

const test = {
  Messages: [
    {
      From: { Email: 'noreply@pharmacieagnespraden.com' },
      To: [{ Email: 'victorpiamiaspro@gmail.com' }],
      TemplateID: 6388430,
      TemplateLanguage: true,
      TemplateErrorReporting: {
        Email: 'admin@phardev.fr',
        Name: 'Error template'
      },
      Variables: {
        shipp: {
          first_name: 'Victor',
          last_name: 'Piamias',
          address: '165 chemin des negadoux, 83000, Toulon',
          phone: '0624174724',
          link: 'https://www.pharmacieagnespraden.com/'
        },
        bill: {
          first_name: 'Victor',
          last_name: 'Piamias',
          address: '165 chemin des negadoux, 83000, Toulon',
          phone: '0624174724'
        },
        lines: [
          {
            img: 'https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358',
            name: "Boiron Mag'300+ fatigue générale 160 comprimés",
            unitPrice: '0,01 €',
            quantity: 1,
            total: '0,01 €'
          }
        ],
        total: {
          product_price: '0,01 €',
          shipping_price: 'Gratuit',
          price: '0,01 €'
        }
      }
    }
  ]
}
</script>
