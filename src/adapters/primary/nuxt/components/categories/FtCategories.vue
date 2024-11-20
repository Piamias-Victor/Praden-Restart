<template lang="pug">
div.py-4.px-2.flex.items-center.gap-4.overflow-x-scroll.custom-scrollbar
    ft-button-animate.bg-white.rounded-xl.px-6(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid)")
        img.icon-md(:src="category.icon")
        span.whitespace-nowrap {{ category.name }}
</template>

<script lang="ts" setup>
const props = defineProps<{
  categoriesVM: any
}>()

definePageMeta({ layout: 'main' })

const router = useRouter()

const goToCat = (path: string) => {
  router.push('/categories/' + path)
}
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
