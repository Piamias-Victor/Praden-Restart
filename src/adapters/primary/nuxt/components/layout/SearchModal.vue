<template lang="pug">
  TransitionRoot(:show="true" appear='' as='template')
    Dialog.relative.z-50(as='div' @close='closeModal')
      TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
        div.fixed.inset-0.bg-black.bg-opacity-70
      div.fixed.inset-0.overflow-y-auto
        div.flex.min-h-full.items-center.justify-center.p-4.text-center
          TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0 scale-95' enter-to='opacity-100 scale-100' leave='duration-200 ease-in' leave-from='opacity-100 scale-100' leave-to='opacity-0 scale-95')
            DialogPanel.w-full.max-w-md.transform.overflow-hidden.rounded-2xl.bg-white.p-6.text-left.align-middle.shadow-xl.transition-all
              div.mt-2
                div.relative
                  div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast.border.border-gray-300
                    icon.icon-md(name="lucide:search")
                    input.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none.w-full.py-2(
                      ref="mobileSearchInput"
                      type="search"
                      v-model="searchQuery"
                      placeholder="Recherche par produits / marques / categories"
                      @keyup.enter="search"
                      autofocus
                    )
                    icon.icon-md.cursor-pointer(v-if="searchQuery" name="ph:x-bold" @click="clearSearch")
              div.mt-4.flex.justify-between
                button.bg-gray-200.text-gray-800.px-4.py-2.rounded-xl(@click="closeModal") Annuler
                button.bg-main.text-white.px-4.py-2.rounded-xl(@click="search") Rechercher
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
  
  const props = defineProps<{}>();
  
  const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'search', query: string): void;
  }>();
  
  const searchQuery = ref('');
  const mobileSearchInput = ref(null);
  
  // Fonction pour effectuer la recherche
  const search = () => {
    if (searchQuery.value.trim()) {
      emit('search', searchQuery.value);
    }
  };
  
  // Effacer la recherche
  const clearSearch = () => {
    searchQuery.value = '';
    if (mobileSearchInput.value) {
      mobileSearchInput.value.focus();
    }
  };
  
  // Fermer le modal
  const closeModal = () => {
    emit('close');
  };
  
  onMounted(() => {
    // Petit délai pour s'assurer que le modal est visible
    setTimeout(() => {
      // Focus sur l'input
      if (mobileSearchInput.value) {
        mobileSearchInput.value.focus();
      }
    }, 100);
  });
  </script>