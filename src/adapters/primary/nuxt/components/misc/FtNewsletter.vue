<template>
  <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white w-[90%] max-w-md p-8 rounded-lg shadow-lg">
      <button @click="closePopup" class="absolute top-4 right-4 text-main text-2xl">&times;</button>
      <h2 class="text-lg font-semibold text-center">Bienvenue chez la pharmacie Praden!</h2>
      <hr class="my-2" />
      <h3 class="text-4xl font-bold text-main text-center">INSCRIVEZ VOUS</h3>
      <p class="text-center text-lg font-semibold text-black">ET PROFITEZ DES MEILLEURES OFFRES</p>
      <p class="text-center text-sm font-medium text-contrast">+ Livraison offerte*</p>
      <div class="mt-4">
        <input
          v-model="email"
          type="email"
          placeholder="Entrez votre email ici..."
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-main outline-none"
        />
      </div>
      <FtButton @click="subscribe" class="w-full mt-4 bg-main text-white font-semibold py-3 rounded-lg">
        JE M'INSCRIS
      </FtButton>
      <p class="mt-4 text-xs text-gray-500">*Livraison offerte dès 69 € d'achat.<br /></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showPopup = ref(false);
const email = ref('');

onMounted(() => {
  if (!sessionStorage.getItem('popupDisplayed')) {
    setTimeout(() => {
      showPopup.value = true;
      sessionStorage.setItem('popupDisplayed', 'true');
    }, 2000);
  }
});

const closePopup = () => {
  showPopup.value = false;
};

const subscribe = () => {
  closePopup();
};
</script>
