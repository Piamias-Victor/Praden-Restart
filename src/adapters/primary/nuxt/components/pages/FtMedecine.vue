<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideleft
                      div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
                          span Livraison offerte pour 69 € d'achat
                      div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                          div.flex.items-start.justify-between
                              h2.text-lg.font-semibold Panier
                              div.ml-3.flex.h-7.items-center
                                  ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                      icon.icon-sm(name="ph:x-bold")
                          div.mt-4
                              div.flow-root
                                  ul.divide-y.divide-gray12.text-left
                                    div(v-for="(product, uuid) in filteredItems" :key="uuid")
                                      ft-product-medecine(:item="product")
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
                      div.mt-8
                      span.font-semibold Votre panier contient des medicaments
                      div.mt-2.border-t.py-6.px-4(class="sm:px-6")
                          ft-button.bg-contrast.w-full.text-xl(@click='openContact')
                                  span Contacter un pharmacien
                          div.mt-4
                              ft-button.button-solid.w-full.text-xl(@click="validateCart" :disabled="!notice") Valider mes infos
                          div.mt-2.flex.justify-center.text-xs
                              ft-button.w-full.font-semibold.flex.items-center.gap-1.bg-background(class="hover:text-main" @click="close")
                                  span Reprendre mes achats
                      ft-contact(v-if="contactOpened" @close="closeContact" medecine='true')
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart';

const props = defineProps({
  item: { type: Array, required: true },
});

const contactOpened = ref(false);
const cartQuantity = ref<CartQuantityVM | null>(null);
const notice = ref(true);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'move-stepper'): void;
  (e: 'valid-medecine'): void;
}>();

const openContact = () => {
  contactOpened.value = true;
};

const closeContact = () => {
  contactOpened.value = false;
};

const switchNotice = () => {
  notice.value = !notice.value;
};

const close = () => {
  emit('close');
};

const validMedecine = () => {
  emit('move-stepper');
  emit('valid-medecine');
};

const validateCart = () => {
  if (notice) validMedecine();
  emit('close');
};

const filteredItems = computed(() => {
  return Object.values(props.item).filter((product: any) => product.medecine);
});

watchEffect(async () => {
  try {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
  } catch (error) {
    console.error('Erreur lors de la récupération de la quantité du panier', error);
    cartQuantity.value = { totalQuantity: 0 }; // Assurer une valeur par défaut si l'appel échoue
  }
});
</script>
