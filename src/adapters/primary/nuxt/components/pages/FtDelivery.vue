<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte pour 69 € d'achat
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Mon panier
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
    ft-stepper(:step=3)
    div.mt-8
        div.flow-root
            ul.-my-6.divide-y.divide-gray12.text-left
                div(v-for='item in cart.items' :key="item.uuid")
                    ft-product-cart(:item="item")
div.flex.items-center.gap-1.text-xs.mt-2.w-full.justify-center(v-if='!hasMedicineReference' class='lg:text-sm')
  span Plus que 
  span.text-main.font-bold {{ cart.freeDelivery }}
  span pour profiter des frais de ports gratuit
span(v-if='!hasMedicineReference' class='lg:text-sm') (- de 5kg)
div.flex.items-center.gap-1.text-xs.mt-2.w-full.justify-center(v-if='hasMedicineReference' class='lg:text-sm')
  span Votre panier contient des médicaments, vous ne pouvez donc pas bénéficier des frais de port gratuit
div.mt-2.border-t.py-2.px-2(class='lg:py-6 lg:px-4')
  h2.font-medium.text-gray-900.mb-2.text-sm(class='lg:text-xl') Mode de livraison
  div.mt-2.text-center.text-sm(v-if="selectedTimestamp")
    span.text-main.font-semibold Date sélectionnée :
    span {{ new Date(selectedTimestamp).toLocaleString('fr-FR') }}
  div.flex.flex-col.items-center.gap-2.w-full.mb-2(class='lg:mb-4')
    div(v-for='deliveryMethod in deliveryMethods.methods' :key="deliveryMethod.uuid" @click="deliveryMethodSelected(deliveryMethod)").w-full
      div(v-if="deliveryMethod.uuid != 1" )
        div(v-if='deliveryMethod.uuid === selectedDeliveryMethod')
          div.flex.flex-col.items-start.border-main.relative.flex.cursor-pointer.rounded-lg.border.bg-white.shadow-sm.ring-2.ring-main.p-3(class='lg:p-4')
            div.flex.items-center.justify-between.w-full
              span.text-xs(class='lg:text-sm') {{ deliveryMethod.name }}
              span.text-xs(class='lg:text-sm')
            span.text-xs.text-contrast {{ deliveryMethod.description }}
            div.text-main.font-bold.text-sm(v-if="deliveryMethod.uuid === '505209a2-7acb-4891-b933-e084d786d7ea'") 
              span OFFRE DU WEEK-END : FDP GRATUIT dès 39€* !
        div(v-if='deliveryMethod.uuid !== selectedDeliveryMethod')
          div.flex.flex-col.items-start.border-main.relative.flex.cursor-pointer.rounded-lg.border.bg-white.shadow-sm.p-3(class='lg:p-4')
            div.flex.items-center.justify-between.w-full
              span.text-xs(class='lg:text-sm') {{ deliveryMethod.name }}
              span.text-xs(class='lg:text-sm')
            span.text-xs.text-contrast {{ deliveryMethod.description }}
            div.text-main.font-bold.text-sm(v-if="deliveryMethod.uuid === '505209a2-7acb-4891-b933-e084d786d7ea'") 
              span OFFRE DU WEEK-END : FDP GRATUIT dès 39€* !
  div.flex.justify-between.items-center
      p.font-semibold.text Frais de port
      div.flex.flex-col.pl-2
          span.text-xs(class='lg:text-sm' class="font-semibold") {{ cart.DeliveryPrice }}
  div.m-2.border-t
  div.flex.justify-between.items-center.text-lg
      p.font-semibold.text-main.text Total
      div.flex.flex-col.pl-2
          span.text-xs(class='lg:text-sm' :class="cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPriceWithDelivery }}
          span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
  div.mt-2(class='lg:mt-4')
      ft-button.button-solid.w-full.text-xl( @click="validateOrder") Paiement
  span.text-xs * -5kg, hors médicaments.
ft-popup(:show="showPopup" @close="closePopup")
ft-popup2(:show="showPopup2" @close="closePopup2" @selection-confirmed="handleSelection")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart';
import {
  listDeliveryMethods,
  selectDeliveryMethods,
} from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import deliveryGateway, { pickup } from '../../../../../../gateways/deliveryGateway';
import { getCheckoutVM } from '@adapters/primary/viewModels/get-checkout/getCheckoutVM';
import { getDeliveryVM } from '@adapters/primary/viewModels/get-delivery/getDeliveryVM';
import { createOrder } from '@core/usecases/orders/order-creation/createOrder';
import { useEmailGateway } from '../../../../../../gateways/emailGateway';
import { useOrderGateway } from '../../../../../../gateways/orderGateway';
import windowGateway from '../../../../../../gateways/windowGateway';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { useDeliveryStore } from '@store/deliveryStore';
import { start } from '../../../../../../gateways/deliveryGateway';

const router = useRouter();

const showPopup = ref(false);

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const showPopup2 = ref(false);

const openPopup2 = () => {
  showPopup2.value = true;
};

const closePopup2 = () => {
  showPopup2.value = false;
};

const cartQuantity = ref<CartQuantityVM | null>(null);

const deliveryMethods = computed(() => {
  return getDeliveryVM();
});

const selectedDeliveryMethod = ref(start.uuid);

const deliveryMethodSelected = (method: any) => {
  selectDeliveryMethods(method);
  deliveryMethods.value.selectedDeliveryMethod = method;
  selectedDeliveryMethod.value = method.uuid;
  if (method.name === 'Point Relais') openPopup();
  if (method.name === pickup.name) openPopup2();
};

const selectedTimestamp = ref<number | null>(null);

const handleSelection = (selection: { timestamp: number }) => {
  selectedTimestamp.value = selection.timestamp;

  // Optionnel : Convertir le timestamp en une date lisible
  const selectedDate = new Date(selection.timestamp);
  console.log('Timestamp sélectionné :', selection.timestamp);
  console.log('Date sélectionnée :', selectedDate.toLocaleString('fr-FR'));
};

const hasMedicineReference = computed(() => {
  return Object.values(cart.value.items).some((item: any) => item.medecine === true);
});

const cart = computed(() => {
  return getCartVM();
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

const user = computed(() => {
  return getUserVM();
});

const validateOrder = () => {
  const deliveryMethodsStore = useDeliveryStore();

  if (
    deliveryMethodsStore.selected.uuid === '505209a2-7acb-4891-b933-e084d786d7ea' &&
    !deliveryMethodsStore.selected.point
  ) {
    console.log('pas de delivery pickup');
  } else if (deliveryMethodsStore.selected.uuid === '570bdcfa-b704-4ed2-9fc0-175d687c1d8d' && !selectedTimestamp.value) {
    console.log('pas d horraire');
  }
  else {
    createOrder(
      user.value.email,
      user.value.phone,
      selectedDeliveryMethod.value,
      user.value.address,
      useOrderGateway(),
      useProductGateway(),
      windowGateway,
      useEmailGateway(),
      cart.value.DeliveryPrice,
      selectedTimestamp.value
    );
  }

  //- router.push('/checkout/success');
};

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway());
});
</script>
