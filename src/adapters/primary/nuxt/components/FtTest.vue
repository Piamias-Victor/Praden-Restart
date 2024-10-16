<template>
<div
  v-if="showPopup"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
>
  <div class="relative bg-white w-[90%] max-w-md p-8 rounded-lg shadow-lg">
    <!-- Bouton de fermeture -->
    <button
      @click="closePopup"
      class="absolute top-4 right-4 text-main text-2xl"
    >
      &times;
    </button>

    <!-- Titre -->
    <h2 class="text-lg font-semibold text-center">
      Bienvenue chez la pharmacie Praden!
    </h2>
    <hr class="my-2" />

    <!-- Offre principale -->
    <h3 class="text-5xl font-bold text-main text-center">5% OFFERTS</h3>
    <p class="text-center text-lg font-semibold text-black">
      SUR VOTRE PREMIÈRE COMMANDE
    </p>
    <p class="text-center text-sm font-medium text-contrast">
      + Livraison offerte*
    </p>

    <!-- Champ d'inscription -->
    <div class="mt-4">
      <input
        v-model="email"
        type="email"
        placeholder="Entrez votre email ici..."
        class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-main outline-none"
      />
    </div>

    <!-- Bouton d'inscription -->
    <button
      @click="subscribe"
      class="w-full mt-4 bg-main text-white font-semibold py-3 rounded-lg"
    >
      JE M'INSCRIS
    </button>

    <!-- Informations supplémentaires -->
    <p class="mt-4 text-xs text-gray-500">
      *Livraison offerte dès 39 € d'achat.<br />
      Ce bon d'achat de 5% sera déduit de votre première commande (jusqu'à 100
      € hors frais de livraison).
    </p>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(false)
const email = ref('')

onMounted(() => {
// Vérifier si le popup a déjà été affiché durant la session
if (!sessionStorage.getItem('popupDisplayed')) {
  // Affiche le popup après 5 secondes
  setTimeout(() => {
    showPopup.value = true
    // Marquer que le popup a été affiché dans sessionStorage
    sessionStorage.setItem('popupDisplayed', 'true')
  }, 5000)
}
})

const closePopup = () => {
showPopup.value = false
}

const subscribe = () => {
console.log('Email soumis: ', email.value)
closePopup()
// Logique pour soumettre l'email ici
}
</script>

<style scoped>
/* Si tu veux des ajustements supplémentaires en CSS */
</style>
