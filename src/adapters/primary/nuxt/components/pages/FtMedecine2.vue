<template lang="pug">
div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
    span Livraison offerte avec le code FETEDESMAMANS
div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
    div.flex.items-start.justify-between
        h2.text-lg.font-semibold Panier
        div.ml-3.flex.h-7.items-center
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                icon.icon-sm(name="ph:x-bold")
    div.mt-8
    span.font-semibold Votre panier contient des medicaments
    div.mt-4
        div.flow-root
            ul.-my-6.divide-y.divide-gray12.text-left
                div
                    ft-product-medecine(:item="doliprane")
        div.mt-2
        a(href='https://agence-prd.ansm.sante.fr/php/ecodex/frames.php?specid=60234100&typedoc=R&ref=R0189465.htm' target='_blank')
          ft-button.button-solid.w-full
            span Voir la notice
            icon.icon-md(name="akar-icons:send")
        div.mt-2
        ft-input(
            for="email-address"
            require
            type='number'
            inputmode="numeric"
            name='email-address'
            @input="emailChanged"
          ) Votre poids en kg
        div.mt-2
        ft-input(
            for="email-address"
            require
            type='number'
            inputmode="numeric"
            name='email-address'
            @input="emailChanged"
          ) Votre taille en cm
        div.mt-4
        div.flex.items-center.gap-2.text-left.px-3
          div(v-if='notice').flex-shrink-0.flex.items-center.justify-center.bg-main.border.border-2.border-main.h-5.w-5.rounded-md.text-white(@click='switchNotice')
              icon.icon-xs(name="iconamoon:check-bold")
          div(v-if='!notice').flex-shrink-0.bg-white.border.border-2.border-main.h-5.w-5.rounded-md(@click='switchNotice')
          span.text-xs(@click='switchNotice') Je certifie que les informations renseignées sont exactes et avoir lu les notices
        div.mt-4
div.mt-2.border-t.py-6.px-4(class="sm:px-6")
    ft-button.bg-contrast.w-full.text-xl(@click='openContact')
            span Contacter un pharmacien
    div.mt-4
        ft-button.button-solid.w-full.text-xl(@click="validateCart" :disabled="!notice") Valider mes infos
    div.mt-2.flex.justify-center.text-xs
        ft-button.w-full.font-semibold.flex.items-center.gap-1.bg-background(class="hover:text-main" @click="close")
            span Reprendre mes achats
ft-contact(v-if="contactOpened" @close="closeContact")
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart';

const contactOpened = ref(false);

const router = useRouter();

const cartQuantity = ref<CartQuantityVM | null>(null);

const cart = computed(() => {
  return getCartVM();
});

const openContact = () => {
  contactOpened.value = true;
};

const closeContact = () => {
  contactOpened.value = false;
};

const notice = ref(true);

const switchNotice = () => {
  notice.value = !notice.value;
};

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'move-stepper'): void;
}>();

const close = () => {
  emit('close');
};

const validateCart = () => {
  emit('move-stepper');
};

watchEffect(async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
  } catch (error) {
    console.error('Erreur lors de la récupération de la quantité du panier', error);
    cartQuantity.value = { totalQuantity: 0 }; // Assurer une valeur par défaut si l'appel échoue
  }
});

const doliprane = {
  uuid: '81b02fbc-9cbd-49c9-8a7b-ecd8451b289e',
  name: 'Doliprane 1000 mg comprimé',
  laboratory: 'Sanofi',
  totalPrice: '2,18 €',
  totalPriceWithDelivery: '18,18 €',
  freeDelivery: '66,82 €',
  quantity: 1,
  img: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/5197c037c0c960190f3a4e3c064777f7c88630d3d229c1e97c07ce9c85043c4c',
  ],
  medecine: true,
};

const removeAllItemFromCart = () => {
  removeAllFromCart();
};
</script>
