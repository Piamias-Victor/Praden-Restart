<template lang="pug">
div.py-4.px-6.flex.items-center.gap-2.overflow-x-scroll.custom-scrollbar
    ft-button.text-xl.bg-white.rounded-xl.px-6.text-primary11(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)")
        img.icon-md(:src="category.icon")
        span.whitespace-nowrap {{ category.name }}
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Dermo
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Bebe
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Sante
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Complement
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Nature
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-lg(src="/assets/dermoBlack.svg")
    //-     span Veto
</template>

<script lang="ts" setup>
const props = defineProps<{
  categoriesVM: any
}>()

definePageMeta({ layout: 'main' })

const router = useRouter()

const goToCat = (path: string, name: string) => {
  router.push('/categories/' + path + '?' + name)
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
