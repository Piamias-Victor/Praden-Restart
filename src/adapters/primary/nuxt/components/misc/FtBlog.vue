<template lang="pug">
section.px-2
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') Découvrez nos articles
  div.h-2
  div.px-4.hidden(class='sm:block')
      img.block.rounded-xl.w-full(
              class='min-h-[115px]'
              src="https://i.postimg.cc/9FTJPY72/Capture-d-e-cran-2024-10-17-a-12-36-59.png"
              alt="pub"
              )
  div.py-4.flex.items-center.gap-4.overflow-x-scroll.custom-scrollbar
    nuxt-link(v-for='blog in props.blogVm.items' :key="blog.uuid" :href='blog.url' target='_blank')
      div.bg-white.rounded-xl(class='w-[50vw] sm:w-[25vw] h-[350px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
        div.relative.w-full(class='h-[200px] overflow-hidden')
          img.rounded-t-xl.absolute.inset-0.object-cover.object-top(:src="blog.icon" :alt="blog.name")
        div.w-full.flex.flex-col.justify-center.px-4.py-2
          div.font-semibold.text-main.w-full.text-xs(class='lg:text-xl') {{ blog.name }}
          span.text-xs.text-contrast(class='lg:text-sm') {{ blog.date }}
        div.p-2
          ft-button.button-solid.w-full
            span En savoir plus
            icon.icon-md(name="akar-icons:send")
</template>

<script lang="ts" setup>
const props = defineProps<{
  blogVm: any;
}>();

definePageMeta({ layout: 'main' });

const router = useRouter();
</script>

<style scoped>
/* Ajout d'un style pour l'image pour qu'elle remplisse son conteneur tout en gardant son rapport d'aspect */
img {
  object-fit: cover; /* Assure que l'image remplit le conteneur */
  object-position: top; /* Affiche la partie supérieure de l'image */
  height: 100%; /* Prend toute la hauteur du conteneur */
  width: 100%; /* Prend toute la largeur du conteneur */
}

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
