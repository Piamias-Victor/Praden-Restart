<template lang="pug">
  TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
      TransitionChild(
        as='template'
        enter='duration-300 ease-out'
        enter-from='opacity-0'
        enter-to='opacity-100'
        leave='duration-200 ease-in'
        leave-from='opacity-100'
        leave-to='opacity-0'
      )
        div.fixed.inset-0.bg-black.bg-opacity-25
      div.fixed.inset-0.overflow-y-auto
        div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
          TransitionChild(as='template' class="w-full")
            DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slidetop
              div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                div.flex.items-start.justify-between
                  h2.text-lg.font-semibold Mes Commandes
                  div.ml-3.flex.h-7.items-center
                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                      icon.icon-sm(name="ph:x-bold")
                div.mt-4
                ul.space-y-4
                  li(v-for='order in sortedOrders' :key="order.uuid")
                    div(class="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer" @click="toggleOrder(order.uuid)").flex.justify-between
                      div.flex.flex-col.items-start.w-full.gap-2
                        div.flex.items-center.gap-2.w-full.justify-between
                          p.text-sm.text-gray-600 Date: {{ formatDate(order.createdAt) }}
                          p.text-sm.text-gray-600.font-semibold Montant: {{ calculateOrderTotalWithDelivery(order.lines, order.delivery.price) }}€
                        div.flex.items-center.gap-2.w-full.justify-between
                          ft-button.text-xs(:class="getStatusClass(order.lines[0].deliveryStatus)") {{ getStatusText(order.lines[0].deliveryStatus) }}
                          ft-button.button-solid
                            icon.icon-sm.text-white.hidden(class='sm:block' name="mdi:chevron-down")
                    div.mt-4(v-if="isOpen(order.uuid)").text-left
                      h4.text-sm.font-semibold.mb-2 Produits
                      ul.flex.flex-col.items-start.justify-start.text-left.gap-4
                        li.flex.flex-col.gap-2(v-for='line in order.lines' :key="line.ean13" class="text-xs")
                          div.flex.items-center.gap-2
                            img.w-12.h-12.object-cover(:src="line.miniature" :alt="line.name")
                            span.font-semibold {{ line.name }}
                          div.flex.items-center.gap-4
                            span Quantité: {{ line.expectedQuantity }}
                            span Prix TTC: {{ ((line.unitAmount * (1 + (line.percentTaxRate / 100))) / 100).toFixed(2) }}€
                      div.mt-4
                        h4.text-sm.font-semibold.mb-2 Totaux
                        p.text-sm.text-gray-600 Quantité Totale: {{ calculateTotalQuantity(order.lines) }}
                        p.text-sm.text-gray-600 Prix Total: {{ calculateOrderTotalWithDelivery(order.lines, order.delivery.price) }}€
                      div.mt-4
                        h4.text-sm.font-semibold.mb-2 Adresse de Livraison
                        p.text-sm.text-gray-600 {{ order.deliveryAddress.firstname }} {{ order.deliveryAddress.lastname }}
                        p.text-sm.text-gray-600 {{ order.deliveryAddress.address }}
                        p.text-sm.text-gray-600 {{ order.deliveryAddress.appartement ? `Appartement: ${order.deliveryAddress.appartement}` : '' }}
                        p.text-sm.text-gray-600 {{ order.deliveryAddress.zip }} {{ order.deliveryAddress.city }}, {{ order.deliveryAddress.country }}
                      div.mt-4
                        h4.text-sm.font-semibold.mb-2 Contact
                        p.text-sm.text-gray-600 Email: {{ order.contact.email }}
                        p.text-sm.text-gray-600 Téléphone: {{ order.contact.phone }}
                      div.mt-4
                        h4.text-sm.font-semibold.mb-2 Mode de Livraison
                        p.text-sm.text-gray-600 Méthode: {{ order.delivery.method.name }}
                        p.text-sm.text-gray-600 Description: {{ order.delivery.method.description }}
                        p.text-sm.text-gray-600 Prix: {{ (order.delivery.price / 100).toFixed(2) }}€
                    div(v-if="isOpen(order.uuid)").mt-2
                        a(v-if="order && order.delivery && order.delivery.trackingNumber" 
                          :href="`https://laposte.fr/outils/suivre-vos-envois?code=${order.delivery.trackingNumber}`" 
                          target="_blank" 
                          rel="noopener noreferrer")
                          ft-button.button-solid.w-full Suivre mon colis
                ft-button.button-solid.text-xl.w-full(@click='close')
                  span Fermer
</template>

<script lang="ts" setup>
import { getMyOrdersVM } from '@adapters/primary/viewModels/get-my-orders/getMyOrdersVM';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { computed, ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';

// Définir les événements émis
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// Fonction pour fermer le modal
const close = () => {
  emit('close');
};

// Fonction pour gérer la fermeture via Dialog
function closeModal() {
  emit('close');
}

// Récupérer les données utilisateur (si nécessaire)
const user = computed(() => {
  return getUserVM();
});

// Initialiser les commandes
const orders = computed(() => {
  const data = getMyOrdersVM();
  // Assurez-vous que data est un tableau ou un objet avec une propriété 'items' qui est un tableau
  if (Array.isArray(data)) {
    return data;
  } else if (data && Array.isArray(data.items)) {
    return data.items;
  } else {
    return [];
  }
});

// Trier les commandes par date de création (les plus récentes en premier)
const sortedOrders = computed(() => {
  return [...orders.value].sort((a, b) => b.createdAt - a.createdAt);
});

// Gestion de l'état d'expansion des commandes
const expandedOrders = ref<Set<string>>(new Set());

const toggleOrder = (uuid: string) => {
  if (expandedOrders.value.has(uuid)) {
    expandedOrders.value.delete(uuid);
  } else {
    expandedOrders.value.add(uuid);
  }
};

const isOpen = (uuid: string) => {
  return expandedOrders.value.has(uuid);
};

// Méthode pour obtenir la classe de statut
// Méthode pour obtenir la classe de statut
const getStatusClass = (status: string): string => {
  switch (status) {
    case 'CREATED':
      return 'text-blue-900 bg-blue-200'; // En attente de traitement
    case 'PROCESSING':
      return 'text-orange-900 bg-orange-300'; // En cours de traitement
    case 'SHIPPED':
      return 'text-yellow-900 bg-yellow-300'; // Expédié
    case 'DELIVERED':
      return 'text-green-900 bg-green-400'; // Livré
    case 'CANCELED':
      return 'text-red-900 bg-red-300'; // Annulé
    default:
      return 'text-gray-500'; // Statut inconnu
  }
};

// Méthode pour obtenir le texte de statut en français
const getStatusText = (status: string): string => {
  switch (status) {
    case 'CREATED':
      return 'En attente de paiement';
    case 'PROCESSING':
      return 'En cours de traitement';
    case 'SHIPPED':
      return 'Expédié';
    case 'DELIVERED':
      return 'Livré';
    case 'CANCELED':
      return 'Annulé';
    default:
      return 'Statut inconnu';
  }
};

// Méthode pour formater la date
const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString();
};

// Méthode pour calculer le total d'une commande
const formatTotal = (lines: any[]) => {
  const total = lines.reduce((acc, line) => acc + (line.unitAmount || 0) * (line.expectedQuantity || 1), 0);
  return (total / 100).toFixed(2); // Convertir en euros et formater
};

// Méthode pour calculer le total des quantités
const calculateTotalQuantity = (lines: any[]) => {
  return lines.reduce((acc, line) => acc + (line.expectedQuantity || 0), 0);
};

// Méthode pour calculer le prix total de la commande (incluant la livraison)
const calculateOrderTotalWithDelivery = (lines: any[], deliveryPrice: number) => {
  const total = lines.reduce((acc, line) => {
    const ttcPrice = line.unitAmount * (1 + (line.percentTaxRate / 100)); // Ajouter la TVA
    return acc + ttcPrice * (line.expectedQuantity || 1);
  }, 0);
  return ((total + deliveryPrice) / 100).toFixed(2); // Convertir en euros et formater
};
</script>
