<template lang="pug">
div.py-4.px-2.flex.flex-col.gap-4.overflow-x-scroll.custom-scrollbar
    div.flex.items-center.gap-2
      ft-button-animate.bg-white.rounded-xl.px-6(@click="goBack")
          icon.icon-md(name="mdi:arrow-left")
          span.whitespace-nowrap Retour
      ft-button-animate.bg-white.rounded-xl.px-6(v-for='category in props.categoriesVM2.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)")
          img.icon-md(:src="category.icon")
          span.whitespace-nowrap {{ category.name }}
      ft-button-animate.bg-white.rounded-xl.px-6(@click="goToPromo()")
          img.icon-md(src="https://i.postimg.cc/HkthTcR1/promo.png")
          span.whitespace-nowrap Promotions
    div.flex.items-center.gap-4
      button.rounded-xl.px-6.text-xl.flex.flex-col.items-center.justify-center.text-contrast(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)" class='hover:text-main')
        img.rounded-full(class='w-[60px] transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl' :src='category.icon', alt='Profile Picture')
        span.whitespace-nowrap.text-sm.font-semibold.mt-1(class='min-w-[5vw]') {{ category.name }}
</template>

<script lang="ts" setup>
const props = defineProps<{
  categoriesVM: any;
  categoriesVM2: any;
}>();

definePageMeta({ layout: 'main' });

const router = useRouter();

const formatUrl = (basePath: string, name: string, uuid: string): string => {
  const formattedName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets au début ou à la fin
  return `${basePath}/${formattedName}?${uuid}`;
};

const goToCat = (uuid: string, name: string) => {
  const url = formatUrl('/categories', name, uuid);
  router.push(url);
};

const goBack = () => {
  router.back();
};
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
