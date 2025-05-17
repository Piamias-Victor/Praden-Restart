<template lang="pug">
ft-categories(:categoriesVM="categoriesVM")
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
        v-for="(laboratories, letter) in groupedLaboratories"
        :key="'section-' + letter"
        :id="'letter-' + letter"
    )
        h3.text-lg.font-semibold.text-main Lettre {{ letter }}
        div.h-4
        div.grid.grid-cols-2.gap-4(class='sm:grid-cols-4')
            nuxt-link.cursor-pointer.text-center.bg-gray-100.p-2.rounded-lg(
                v-for="laboratory in laboratories"
                :key="laboratory.uuid"
                :to="formatBrandHref(laboratory)"
            )
                span {{ laboratory.name }}
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { getSearchLaboratoriesVM } from '@adapters/primary/viewModels/get-category/getSearchCategoryVM';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { useHead } from 'nuxt/app';
import { getRootCategoriesVM } from '../../../../primary/viewModels/get-category/getRootCategoriesVM.js';

definePageMeta({ layout: 'main' });

onMounted(() => {
  listLaboratories(laboratoryGateway());
});

const formatBrandHref = (laboratory: { name: string; uuid: string }): string => {
  // Formate le nom de la marque pour créer une URL "friendly"
  const formattedName = laboratory.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/\s+/g, '-'); // Remplace les espaces par des tirets

  // Construit l'URL avec le nom et l'UUID
  return `/laboratory/${formattedName}?${laboratory.uuid}`;
};

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

useHead({
  title: 'Marques - Découvrez nos laboratoires partenaires - Pharmacie Agnès Praden',
  meta: [
    {
      name: 'description',
      content:
        'Parcourez toutes les marques disponibles à la Pharmacie Agnès Praden. Trouvez vos laboratoires préférés triés par ordre alphabétique.',
    },
  ],
});

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Récupération des laboratoires
const laboratoriesVM = computed(() => {
  return getSearchLaboratoriesVM('');
});

// Grouper les laboratoires par lettre
const groupedLaboratories = computed(() => {
  const grouped: Record<string, Array<{ uuid: string; name: string; href: string }>> = {};

  // Initialiser les clés pour chaque lettre
  alphabet.forEach((letter) => {
    grouped[letter] = [];
  });

  // Ajouter les laboratoires dans leur groupe
  laboratoriesVM.value.items.forEach((laboratory) => {
    const firstLetter = laboratory.name[0]?.toUpperCase() || '#';
    if (grouped[firstLetter]) {
      grouped[firstLetter].push(laboratory);
    }
  });

  return grouped;
});
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
