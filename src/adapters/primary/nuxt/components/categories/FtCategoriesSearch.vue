<template lang="pug">
div.py-4.px-2.flex.flex-col.gap-2.overflow-x-scroll.custom-scrollbar
    div.flex.items-center.gap-2
      button.rounded-xl.px-6.text-xl.flex.flex-col.items-center.justify-center.text-contrast(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)" class='hover:text-main')
            img.rounded-full(class='w-[60px] transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl' src='https://m.media-amazon.com/images/I/61bUInrLxlL._AC_UF350,350_QL80_.jpg', alt='Profile Picture')
            span.whitespace-nowrap.text-sm.font-semibold.mt-1(class='min-w-[60px]') {{ category.name }}
    div.flex.items-center.gap-4
        ft-button-animate.bg-white.rounded-xl.text-xl.flex.flex-col.items-center.justify-center.text-contrast(v-for='laboratory in props.laboratoriesVM.items' :key="laboratory.uuid" class='hover:text-main' @click="goToLab(laboratory.uuid, laboratory.name)")
            span.whitespace-nowrap.text-sm.font-semibold {{ laboratory.name }}
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
import {
  searchLaboratory,
  searchProduct
} from '@core/usecases/search-product/searchProduct'
import { searchGateway } from '../../../../../../gateways/searchGateway'

const props = defineProps<{
  categoriesVM: any
  laboratoriesVM: any
}>()

definePageMeta({ layout: 'main' })

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()

const close = () => {
  emit('close')
}

let debounceTimeout: ReturnType<typeof setTimeout> | null = null

const goToCat = (path: string, name: string) => {
  router.push('/categories/' + path + '?' + name)
  setTimeout(() => {
    close()
  }, 1000)
}

const goToLab = (path: string, name: string) => {
  searchLaboratory(path, searchGateway())
  router.push('/laboratory/' + path + '?' + name)
  setTimeout(() => {
    close()
  }, 1000)
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
