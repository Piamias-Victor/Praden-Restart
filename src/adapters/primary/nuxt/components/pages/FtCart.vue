<template lang="pug">
  div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2(class="md:hidden")
      span Avec le code WEEKENDMAI, du 8 au 11 mai, la livraison est OFFERTE
  div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
      div.flex.items-start.justify-between
          h2.text-lg.font-semibold Mon panier
          div.ml-3.flex.h-7.items-center
              ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                  icon.icon-sm(name="ph:x-bold")
      div.mt-8
      ft-stepper(:step=1)
      div.mt-8
          div.flow-root
              ul.-my-6.divide-y.divide-gray12.text-left
                  div(v-for='item in cart.items' :key="item.uuid")
                      ft-product-cart(:item="item")
  div.px-3
    span.font-semibold Laissez une note à notre équipe
    textarea.block.w-full.rounded-md.border-light.shadow-sm
  div.mt-1
  div.flex.items-center.gap-1.text-xs.mt-2.w-full.justify-center(v-if='!hasMedicineReference' class='lg:text-sm').px-3
    span Plus que 
    span.text-main.font-bold {{ cart.freeDelivery }}
    span pour profiter des frais de ports gratuit
  span(v-if='!hasMedicineReference' class='lg:text-sm').px-3 (- de 5kg)
  div.flex.items-center.gap-1.text-xs.mt-2.w-full.justify-center(v-if='hasMedicineReference' class='lg:text-sm').px-3
    span Votre panier contient des médicaments, vous ne pouvez donc pas bénéficier des frais de port gratuit
  div.mt-2.border-t.py-6.px-4(class="sm:px-6")
      div.flex.justify-between.items-center.text-lg
          p.font-semibold.text-main.text Total panier
          div.flex.flex-col.pl-2
              span.text-sm(:class="cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPrice }}
              span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
      p.text-xs(class="mt-0.5").text-left Les frais de port ne sont pas compris
      div.mt-4
          ft-button.button-solid.w-full.text-xl(@click="validateCart" :disabled="cartIsEmpty") Paiement
      div.mt-2.flex.justify-center.text-xs
          ft-button.w-full.font-semibold.flex.items-center.gap-1.bg-background(class="hover:text-main" @click="close")
              span Reprendre mes achats
  ft-medecine(v-if="medecineOpened" :item="cart.items" @close="closeMedecine" @valid-medecine="medecineValid" @move-stepper="moveStepper")
  </template>
  
  <script lang="ts" setup>
  import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
  import { useProductGateway } from '../../../../../../gateways/productGateway';
  import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM';
  import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart';
  
  const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'move-stepper'): void;
    (e: 'valid-medecine'): void;
  }>();
  
  const router = useRouter();
  const cartQuantity = ref<any>(null);
  const medecineOpened = ref(false);
  const medecineValid = ref(false);
  
  const openMedecine = () => {
    medecineOpened.value = true;
  };
  
  const closeMedecine = () => {
    medecineOpened.value = false;
  };
  
  // Récupère le panier de manière sécurisée pour éviter les erreurs
  const cart = computed(() => {
    try {
      return getCartVM();
    } catch (error) {
      console.error("Erreur lors de la récupération du panier:", error);
      // Retourner un objet par défaut en cas d'erreur
      return {
        items: {},
        totalPrice: "0.00 €",
        totalPriceWithPromotion: null,
        freeDelivery: "69.00 €"
      };
    }
  });
  
  // Vérifie si le panier est vide pour désactiver le bouton de paiement
  const cartIsEmpty = computed(() => {
    try {
      return !cartQuantity.value || 
             !cartQuantity.value.totalQuantity || 
             cartQuantity.value.totalQuantity === 0;
    } catch (error) {
      console.error("Erreur lors de la vérification si le panier est vide:", error);
      return true; // Par défaut, considérer le panier comme vide en cas d'erreur
    }
  });
  
  const close = () => {
    emit('close');
  };
  
  const moveStepper = () => {
    emit('move-stepper');
  };
  
  const validateCart = () => {
    try {
      if (cartQuantity.value && cartQuantity.value.medecine && cartQuantity.value.medecine > 0 && medecineValid.value === false) {
        return openMedecine();
      }
      emit('move-stepper');
    } catch (error) {
      console.error("Erreur lors de la validation du panier:", error);
      // En cas d'erreur, essayer de continuer quand même
      emit('move-stepper');
    }
  };
  
  const hasMedicineReference = computed(() => {
    try {
      // Vérifier sécurisé si le panier contient des médicaments
      return cart.value && 
             cart.value.items && 
             Object.values(cart.value.items).some((item: any) => item && item.medecine === true);
    } catch (error) {
      console.error("Erreur lors de la vérification des médicaments:", error);
      return false; // Par défaut, supposer qu'il n'y a pas de médicaments
    }
  });
  
  const removeAllItemFromCart = () => {
    try {
      removeAllFromCart();
    } catch (error) {
      console.error("Erreur lors de la suppression de tous les articles:", error);
    }
  };
  
  // Mise à jour sécurisée de la quantité du panier
  const updateCartQuantity = async () => {
    try {
      cartQuantity.value = await getCartQuantityVM(useProductGateway());
    } catch (error) {
      console.error('Erreur lors de la récupération de la quantité du panier', error);
      cartQuantity.value = { totalQuantity: 0, medecine: 0, items: {} };
    }
  };
  
  watchEffect(async () => {
    await updateCartQuantity();
  });
  
  // Initialiser les données au montage du composant
  onMounted(() => {
    updateCartQuantity();
  });
  </script>