<template lang="pug">
div.py-4.px-2.flex.items-center.gap-2.overflow-x-scroll.custom-scrollbar.text-xl
    //- ft-button.bg-white.rounded-full.text-sm.p-2(@click="goBack")
    //-     icon.icon-md(name="icon-park-outline:return")
    //-     span Retour
    button.rounded-xl.px-6.text-xl.flex.flex-col.items-center.justify-center.text-contrast(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)" class='hover:text-main')
      img.rounded-full(class='w-[60px] transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl' src='https://m.media-amazon.com/images/I/61bUInrLxlL._AC_UF350,350_QL80_.jpg', alt='Profile Picture')
      span.whitespace-nowrap.text-sm.font-semibold.mt-1 {{ category.name }}
    //- ft-button.bg-white.rounded-xl.px-6.text-xl(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)")
    //-   img.rounded-full.border.border-main.border-2(class='w-[50px] h-[50px]' src='https://i-sam.unimedias.fr/2022/06/13/istock-103956934.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&w=890', alt='Profile Picture')
      //- img.icon-md(:src="category.icon")
      //- span.whitespace-nowrap {{ category.name }}
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

const goBack = () => {
  router.back()
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
