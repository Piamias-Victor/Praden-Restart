<template lang="pug">
div.px-8.my-4.flex.flex-col.gap-4
    span.text-xl.text-main.font-semibold.capitalize(class='lg:text-3xl') Marques
    div.flex.items-center.gap-2.py-4.flex.gap-4.overflow-hidden.overflow-x-auto.custom-scrollbar(class='max-w-[200vw]')
        ft-button-animate(
        v-for="letter in alphabet"
        :key="letter"
        class="text-main flex items-center justify-center bg-white w-10 h-10"
        )
            nuxt-link(:to="'#letter-' + letter" class="text-main font-semibold text-xl") {{ letter }}
    div.mt-4.p-4.border.border-main.rounded-lg.bg-white(
        v-for="(letter, index) in alphabet"
        :key="'section-' + index"
        :id="'letter-' + letter"
    )
        h3.text-lg.font-semibold.text-main Lettre {{ letter }}
        div.h-4
        div.grid.grid-cols-2.gap-4(class='sm:grid-cols-4')
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(@click="goToLabo('avene')") Test
</template>

<script lang="ts" setup>
import { searchProduct } from '@core/usecases/search-product/searchProduct'
import { searchGateway } from '../../../../../../gateways/searchGateway'

definePageMeta({ layout: 'main' })
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const router = useRouter() // Crée un tableau des lettres de A à Z

const goToLabo = async (laboratory: string) => {
  console.log('test')
  if (laboratory) {
    try {
      const result = await searchProduct(laboratory, searchGateway())
      // Mettre à jour ici searchVM ou un autre état si nécessaire
    } catch (error) {}
  } else {
  }
  router.push('/laboratory/' + laboratory)
}
</script>

<style scoped>
/* Active le défilement fluide pour tout le document */
html {
  scroll-behavior: smooth;
}

/* Ajoute un espacement en haut des sections pour que la lettre apparaisse bien en haut */
#letter-A,
#letter-B,
#letter-C,
#letter-D,
#letter-E,
#letter-F,
#letter-G,
#letter-H,
#letter-I,
#letter-J,
#letter-K,
#letter-L,
#letter-M,
#letter-N,
#letter-O,
#letter-P,
#letter-Q,
#letter-R,
#letter-S,
#letter-T,
#letter-U,
#letter-V,
#letter-W,
#letter-X,
#letter-Y,
#letter-Z {
  scroll-margin-top: 200px; /* Ajuste selon la taille de ton header ou la position souhaitée */
}

/* Style pour la scrollbar */
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
