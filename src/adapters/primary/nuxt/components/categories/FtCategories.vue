<template lang="pug">
div.py-4.px-2.flex.items-center.gap-4.overflow-x-scroll.custom-scrollbar
    template(v-if="!categoriesLoaded")
        div.bg-gray-200.rounded-xl.px-6.w-24.h-10.animate-pulse(v-for="n in 12" :key="n")
    template(v-else)
        ft-button-animate.bg-white.rounded-xl.px-6(v-for='category in sortedCategories' :key="category.uuid" @click="goToCat(category.uuid)")
            img.icon-md(:src="category.icon")
            span.whitespace-nowrap {{ category.name }}
        ft-button-animate.bg-white.rounded-xl.px-6(@click="goToPromo()")
            img.icon-md(src="https://i.postimg.cc/HkthTcR1/promo.png")
            span.whitespace-nowrap Promotions
</template>

<script lang="ts" setup>
const props = defineProps<{
  categoriesVM: any;
}>();

definePageMeta({ layout: 'main' });

const router = useRouter();

const desiredOrder = [
  "Médicament",
  "Dermocosmétique",
  "Bien être",
  "Bébé",
  "Nature",
  "Premiers soins",
  "Vétérinaire",
  "Orthopédie"
];

const sortedCategories = computed(() => {
  return props.categoriesVM.items
    .filter(category => category.name !== "Promotions") // Exclure "Promotions"
    .sort((a, b) => {
      return desiredOrder.indexOf(a.name) - desiredOrder.indexOf(b.name);
    });
});

const categoriesLoaded = computed(() => {
  return props.categoriesVM?.items?.length > 0;
});

const goToCat = (path: string) => {
  router.push('/categories/' + path);
};

const goToPromo = () => {
  router.push('/promotions');
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
