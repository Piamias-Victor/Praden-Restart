<template lang="pug">
section.px-2
    div.flex.items-center.justify-center.py-2
        span.text-2xl.font-bold.text-center(class='lg:text-3xl')
            slot
        //- span.text-xs.text-contrast Voir tout
    section.py-4.flex.gap-4.overflow-hidden.overflow-x-auto.custom-scrollbar(class='max-w-[200vw]')
        div(v-for='product in products' :key="product.uuid")
            ft-product-card-promo(:product="product")
</template>

<script lang="ts" setup>
defineProps({
  products: { type: Array, required: true },
});
</script>

<style scoped>
.custom-scrollbar {
  overflow-y: hidden; /* Cache la scrollbar verticale */
  overflow-x: scroll; /* Assure que la scrollbar horizontale est toujours visible */
}

.custom-scrollbar::-webkit-scrollbar {
  height: 6px; /* Hauteur de la scrollbar horizontale */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e5017d; /* Couleur de la barre de défilement */
  border-radius: 10px; /* Rendre la barre de défilement arrondie */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #e0e0e0; /* Couleur de l'arrière-plan de la barre */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #ff008c; /* Changement de couleur lors du survol */
}

.custom-scrollbar {
  scrollbar-gutter: stable both-edges; /* Afficher la scrollbar en permanence et garder l'espace réservé */
}
</style>
