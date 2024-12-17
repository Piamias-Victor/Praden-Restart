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
                  li(v-for='order in orders' :key="order.uuid" class="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer" @click="toggleOrder(order.uuid)")
                    div.flex.justify-between
                      div.flex.flex-col.items-start.w-full.gap-2
                        div.flex.items-center.gap-2.w-full.justify-between
                          p.text-sm.text-gray-600 Date: {{ formatDate(order.createdAt) }}
                          p.text-sm.text-gray-600.font-semibold Montant: {{ formatTotal(order.lines) }}€
                        div.flex.items-center.gap-2.w-full.justify-between
                          ft-button.text-xs(:class="getStatusClass(order.payment.status)") {{ getStatusText(order.payment.status) }}
                          ft-button.button-solid
                            icon.icon-sm.text-white.hidden(class='sm:block' name="mdi:chevron-down")
                    // Section conditionnelle pour afficher les détails des produits
                    div.mt-4(v-if="isOpen(order.uuid)")
                      h4.text-sm.font-semibold.mb-2
                      ul.ml-4.flex.flex-col.items-start.justify-start.text-left.gap-4
                        li.flex.flex-col.gap-2(v-for='line in order.lines' :key="line.ean13" class="text-xs")
                          span.font-semibold {{ line.name }}
                          div.flex.items-center.gap-2
                            ft-button.button-solid(class='w-[75px]') {{ line.expectedQuantity }}
                            ft-button.button-solid(class='w-[75px]') {{ (line.unitAmount / 100).toFixed(2) }}€
                    div(v-if="isOpen(order.uuid)").h-4
                    ft-button(v-if="isOpen(order.uuid)").button-solid.w-full Voir ma facture
              div.w-full.justify-end.flex-shrink-0.p-4
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
const getStatusClass = (status: string) => {
  switch (status) {
    case 'WAITINGFORPAYMENT':
      return 'text-yellow-900 bg-yellow-400';
    case 'PAYED':
      return 'text-green-900 bg-green-400';
    default:
      return 'text-gray-500';
  }
};

// Méthode pour obtenir le texte de statut en français
const getStatusText = (status: string) => {
  switch (status) {
    case 'WAITINGFORPAYMENT':
      return 'En cours de livraison';
    case 'PAYED':
      return 'Livré';
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
</script>
