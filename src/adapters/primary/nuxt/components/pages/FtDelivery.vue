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
          div(v-if='deliveryMethod.uuid !== selectedDeliveryMethod')
            div.flex.flex-col.items-start.border-main.relative.flex.cursor-pointer.rounded-lg.border.bg-white.shadow-sm.p-3(class='lg:p-4')
              div.flex.items-center.justify-between.w-full
                span.text-xs(class='lg:text-sm') {{ deliveryMethod.name }}
                span.text-xs(class='lg:text-sm')
              span.text-xs.text-contrast {{ deliveryMethod.description }}
              
    // Ajout du bloc code promo
    div.w-full.my-3.border-t.border-b.py-3
      div.flex.flex-col.gap-2(class='sm:flex-row sm:items-center sm:gap-4')
        div.flex.w-full(class='')
          input.w-full.border.rounded-l-lg.px-3.py-2.text-sm.outline-none(
            type="text"
            v-model="promoCode"
            placeholder="Entrez votre code"
            class="focus:border-main"
          )
          button.bg-main.text-white.rounded-r-lg.py-2.px-3.text-xs.font-medium(
            @click="applyPromoCode"
            :disabled="isApplyingCode"
            class='min-w-[80px] sm:min-w-[100px]'
          ) 
            span(v-if="!isApplyingCode") Appliquer
            span(v-else) ...
      
      // Message d'état du code promo (succès ou erreur)
      div.mt-1(v-if="promoCodeStatus")
        span.text-xs(
          :class="promoCodeStatus.success ? 'text-green-600' : 'text-red-600'"
        ) {{ promoCodeStatus.message }}
              
    div.flex.justify-between.items-center
        p.font-semibold.text Frais de port
        div.flex.flex-col.pl-2
            span.text-xs(class='lg:text-sm' class="font-semibold") {{ cart.DeliveryPrice }}
    
    // Affichage de la réduction si un code promo est appliqué
    div.flex.justify-between.items-center.mt-2(v-if="totalDiscount > 0")
        p.font-semibold.text.text-main Réduction
        div.flex.flex-col.pl-2
            span.text-xs.text-main.font-semibold(class='lg:text-sm') -{{ formatPrice(totalDiscount) }}
    
    div.m-2.border-t
    div.flex.justify-between.items-center.text-lg
        p.font-semibold.text-main.text Total
        div.flex.flex-col.pl-2
            span.text-xs(class='lg:text-sm' :class="totalDiscount > 0 || cart.totalPriceWithPromotion ? 'line-through' : 'font-semibold'") {{ cart.totalPriceWithDelivery }}
            span.font-semibold.text-main(v-if="cart.totalPriceWithPromotion") {{ cart.totalPriceWithPromotion }}
            span.font-semibold.text-main(v-if="totalDiscount > 0 && !cart.totalPriceWithPromotion") {{ calculateFinalPrice() }}
    div.mt-2(class='lg:mt-4')
        ft-button.button-solid.w-full.text-xl( @click="validateOrder" :disabled="isProcessingOrder") 
          span(v-if="!isProcessingOrder") Paiement
          span(v-else) Traitement...
  ft-popup(:show="showPopup" @close="closePopup")
  ft-popup2(:show="showPopup2" @close="closePopup2" @selection-confirmed="handleSelection")
  </template>
  
  <script lang="ts" setup>
  import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
  import { useProductGateway } from '../../../../../../gateways/productGateway';
  import { getCartVM, getProductsInCart } from '@adapters/primary/viewModels/get-cart/getCartVM';
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
  import { priceFormatter } from '@utils/formater';
  import { ReductionType } from '@core/entities/product';
  
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
  
  // Nouvelles refs pour le code promo
  const promoCode = ref('');
  const appliedPromoCode = ref('');
  const totalDiscount = ref(0);
  const promoCodeStatus = ref<{success: boolean, message: string} | null>(null);
  const isApplyingCode = ref(false);
  const isProcessingOrder = ref(false);
  
  // Fonction pour formater les prix
  const formatPrice = (priceInCents: number): string => {
    const formatter = priceFormatter('fr-FR', 'EUR');
    return formatter.format(priceInCents / 100);
  };
  
  // Fonction pour calculer le prix final après réduction
  const calculateFinalPrice = (): string => {
    const cartTotal = parseFloat(cart.value.totalPriceWithDelivery.replace(/[^\d,-]/g, '').replace(',', '.'));
    const totalInCents = Math.round(cartTotal * 100);
    const discountedPrice = totalInCents - totalDiscount.value;
    return formatPrice(discountedPrice);
  };
  
  // Fonction pour calculer le prix HT
  const calculatePriceHT = (priceWithTax: number, taxRate: number): number => {
    const priceHT = priceWithTax / (1 + taxRate / 100);
    return Math.round(priceHT * 100) / 100;
  };
  
  // Fonction mise à jour pour créer les lignes de commande pour l'API
  const createOrderLines = async () => {
    try {
      // Récupérer les produits dans le panier
      const { items } = getProductsInCart();
      const productGateway = useProductGateway();
      
      const lines = await Promise.all(
        Object.keys(items).map(async (key) => {
          const item = items[key];
          const product = await productGateway.getByUuid(item.uuid);
          
          // Calculer le prix HT
          let priceWithoutTax = calculatePriceHT(product.price, product.percentTaxRate);
          let promotionUuid = undefined;
          
          // Gérer les promotions
          if (product.promotions && product.promotions.length > 0) {
            const promotion = product.promotions[0];
            if (promotion) {
              let discountedPrice;
              
              if (promotion.type === ReductionType.Fixed) {
                discountedPrice = product.price - promotion.amount;
              } else {
                discountedPrice = product.price - (product.price * promotion.amount) / 100;
              }
              
              priceWithoutTax = calculatePriceHT(discountedPrice, product.percentTaxRate);
              promotionUuid = promotion.uuid;
            }
          }
          
          // Conformément au schéma createOrderLineSchema
          return {
            productUuid: product.uuid,
            quantity: item.quantity,
            priceWithoutTax: priceWithoutTax,
            percentTaxRate: product.percentTaxRate,
            weight: product.weight || 100, // Ajout du poids, valeur par défaut si non disponible
            ...(promotionUuid ? { promotionUuid } : {})
          };
        })
      );
      
      return lines;
    } catch (error) {
      console.error("Erreur lors de la création des lignes de commande:", error);
      return [];
    }
  };
  
  // Fonction pour appliquer le code promo
  const applyPromoCode = async () => {
    if (!promoCode.value) {
      promoCodeStatus.value = {
        success: false,
        message: 'Veuillez entrer un code promo'
      };
      return;
    }
  
    isApplyingCode.value = true;
    promoCodeStatus.value = null;
    
    try {
      // Créer les lignes de commande pour l'API
      const lines = await createOrderLines();
      
      console.log("Code promo à appliquer:", promoCode.value);
      console.log("Méthode de livraison sélectionnée:", selectedDeliveryMethod.value);
      console.log("Lignes de commande:", lines);
      
      // Créer le payload au format exact attendu par l'API
      const payload = {
        code: promoCode.value, // Utilise "code" comme défini dans applyPromotionCodeSchema
        lines: lines,
        deliveryMethodUuid: selectedDeliveryMethod.value
      };
      
      console.log("Payload envoyé à l'API:", JSON.stringify(payload));
      
      // Appel à l'API pour valider le code promo
      const response = await fetch('https://ecommerce-backend-production.admin-a5f.workers.dev/promotion-codes/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      console.log("Statut HTTP de la réponse:", response.status, response.statusText);
      
      // Si la réponse n'est pas OK, afficher le texte brut pour le débogage
      if (!response.ok) {
        const textResponse = await response.text();
        console.log("Réponse brute en cas d'erreur:", textResponse);
        try {
          const data = JSON.parse(textResponse);
          console.log("Réponse d'erreur parsée:", data);
          promoCodeStatus.value = {
            success: false,
            message: Array.isArray(data) ? data[0] : (data.message || 'Code promo invalide')
          };
        } catch (e) {
          console.log("Impossible de parser la réponse d'erreur");
          promoCodeStatus.value = {
            success: false,
            message: 'Code promo invalide'
          };
        }
        isApplyingCode.value = false;
        return;
      }
      
      const data = await response.json();
      console.log("Réponse de l'API:", data);
      
      if (data.totalDiscounted) {
        // Code promo valide
        appliedPromoCode.value = promoCode.value;
        totalDiscount.value = data.totalDiscounted;
        promoCodeStatus.value = {
          success: true,
          message: `Code promo appliqué : -${formatPrice(data.totalDiscounted)}`
        };
      } else {
        // Code promo invalide
        promoCodeStatus.value = {
          success: false,
          message: data.message || 'Code promo invalide'
        };
      }
    } catch (error) {
      console.error('Erreur lors de l\'application du code promo:', error);
      promoCodeStatus.value = {
        success: false,
        message: 'Erreur lors de l\'application du code promo'
      };
    } finally {
      isApplyingCode.value = false;
    }
  };
  
  const deliveryMethodSelected = (method: any) => {
    selectDeliveryMethods(method);
    deliveryMethods.value.selectedDeliveryMethod = method;
    selectedDeliveryMethod.value = method.uuid;
    
    console.log("Nouvelle méthode de livraison sélectionnée:", method.uuid, method.name);
    
    // Réinitialiser le code promo si la méthode de livraison change
    if (appliedPromoCode.value) {
      appliedPromoCode.value = '';
      totalDiscount.value = 0;
      promoCodeStatus.value = null;
    }
    
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
    const cartData = getCartVM();
    console.log("Contenu du panier:", cartData);
    return cartData;
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
  
  const validateOrder = async () => {
    const deliveryMethodsStore = useDeliveryStore();
  
    console.log("Validation de la commande");
    console.log("Méthode de livraison:", selectedDeliveryMethod.value);
    console.log("Point de livraison:", deliveryMethodsStore.selected.point);
    console.log("Timestamp sélectionné:", selectedTimestamp.value);
    console.log("Code promo appliqué:", appliedPromoCode.value);
  
    if (
      deliveryMethodsStore.selected.uuid === '505209a2-7acb-4891-b933-e084d786d7ea' &&
      !deliveryMethodsStore.selected.point
    ) {
      console.log('pas de delivery pickup');
      return;
    } else if (deliveryMethodsStore.selected.uuid === '570bdcfa-b704-4ed2-9fc0-175d687c1d8d' && !selectedTimestamp.value) {
      console.log('pas d horraire');
      return;
    }
    
    isProcessingOrder.value = true;
    
    try {
      await createOrder(
        user.value.email,
        user.value.phone,
        selectedDeliveryMethod.value,
        user.value.address,
        useOrderGateway(),
        useProductGateway(),
        windowGateway,
        useEmailGateway(),
        cart.value.DeliveryPrice,
        selectedTimestamp.value,
        appliedPromoCode.value // Envoi du code promo s'il est appliqué
      );
      
      // Redirection vers la page de succès
      //- router.push('/checkout/success');
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      // Gérer l'erreur ici (afficher un message, etc.)
    } finally {
      isProcessingOrder.value = false;
    }
  };
  
  // Log de débogage au chargement du composant
  onMounted(() => {
    console.log("Composant FtDelivery monté");
    console.log("Méthode de livraison par défaut:", selectedDeliveryMethod.value);
    console.log("Méthodes de livraison disponibles:", deliveryMethods.value);
  });
  
  watchEffect(async () => {
    cartQuantity.value = await getCartQuantityVM(useProductGateway());
  });
  </script>