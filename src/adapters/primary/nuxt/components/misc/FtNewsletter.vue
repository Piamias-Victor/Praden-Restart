<template>
  <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white w-[90%] max-w-md p-8 rounded-lg shadow-lg text-center text-black">
      <button @click="closePopup" class="absolute top-4 right-4 text-black text-3xl font-bold">&times;</button>

      <h2 class="text-4xl font-extrabold uppercase text-main">Frais de port offerts !</h2>
      
      <p class="mt-4 text-2xl font-semibold">
        📢 Offre spéciale ce week-end !
      </p>

      <p class="text-sm font-bold mt-2">
        Dès <span class="text-main">39€ d’achat</span>  
        ✅ <span class="text-main">Hors médicaments</span>  
        ✅ <span class="text-main">Colis -5 kg</span>  
        ✅ <span class="text-main">Point relais</span> ✅
      </p>

      <p class="mt-4 text-sm text-gray-800 font-medium">
        Offre valable uniquement ce week-end, profitez-en !
      </p>

      <FtButton @click="closePopup" class="w-full mt-6 bg-main text-white text-lg font-semibold py-3 rounded-lg">
        J’en profite 🚀
      </FtButton>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showPopup = ref(false);

onMounted(() => {
  if (!sessionStorage.getItem('popupDisplayed')) {
    setTimeout(() => {
      showPopup.value = true;
      sessionStorage.setItem('popupDisplayed', 'true');
    }, 500);
  }
});

const closePopup = () => {
  showPopup.value = false;
};
</script>