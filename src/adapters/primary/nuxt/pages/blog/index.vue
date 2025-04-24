<template lang="pug">
section.px-2
  div.h-2
  div.px-4.hidden(class='sm:block')
      img.block.rounded-xl.w-full(
              class='min-h-[115px]'
              src="https://i.postimg.cc/9FTJPY72/Capture-d-e-cran-2024-10-17-a-12-36-59.png"
              alt="pub"
              )
  div.p-8.flex.flex-col.items-center.justify-center.gap-4
    h1.text-main.text-6xl.font-semibold Le Blog
    div.flex.items-center.justify-between.w-full
      div.flex.flex-col.gap-2
        span.font-semibold.text-lg Tags :
        div.flex.items-center.gap-2
          ft-button-animate.button-solid Santé
          ft-button-animate.button-solid Beauté
  div.py-4.flex.items-center.gap-4
    div.grid.grid-cols-3.gap-4
      nuxt-link(v-for='blog in blogVm.items' :key="blog.uuid" :href='blog.url' target='_blank')
        div.bg-white.rounded-xl(class='w-full h-[350px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
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
import { getLaboratory } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { listLaboratories, getLaboratoryInfo } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { getSearchResultVMFirstSix } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';

definePageMeta({ layout: 'main' });

onMounted(async () => {
  listLaboratories(laboratoryGateway());
  getLaboratory('d38863a4-8396-4979-8e37-88df1d4c3068', laboratoryGateway(), searchGateway());
  try {
    laboratoryInfo.value = await getLaboratoryInfo(laboratoryGateway(), 'd38863a4-8396-4979-8e37-88df1d4c3068');
  } catch (error) {
    console.error('Erreur lors de la récupération des infos laboratoire :', error);
  }
});

const laboratoryInfo = ref(null);

const searchVM = computed(() => {
  let res = getSearchResultVMFirstSix('');
  if (res.items && res.items.length > 0) {
    return res.items;
  }
  return [];
});

const blogVm = {
  items: [
    {
      uuid: 'Grossesse',
      name: 'Grossesse et soins vergetures',
      icon: 'https://daylilyparis.com/cdn/shop/articles/vergetures_grossesse-Daylily_Paris.jpg?v=1708429258',
      url: 'https://www.pharmacieagnespraden.com/blog/grossesse-soins-vergetures',
      date: '01/12/2024',
    },
    {
      uuid: 'Stress',
      name: 'Gérer efficacement son stress',
      icon: 'https://storage.letudiant.fr/mediatheque/letudiant/9/0/2410890-comment-ge-rer-son-stress-766x438.jpg',
      url: 'https://www.pharmacieagnespraden.com/blog/gerer-son-stress',
      date: '01/12/2024',
    },
    {
      uuid: 'AutoBronzant',
      name: 'Autobronzants corps & visage ',
      icon: 'https://i.postimg.cc/MGr3B9HF/Capture-d-e-cran-2025-04-09-a-13-17-37.png',
      url: 'https://www.pharmacieagnespraden.com/blog/autobronzants',
      date: '01/05/2025',
    },
    {
      uuid: 'AntiCellulite',
      name: 'Quels sont les meilleurs produits anti-cellulite pour une peau lisse ?',
      icon: 'https://i.postimg.cc/j5SfZwNX/Capture-d-e-cran-2025-04-24-a-12-44-38.png',
      url: 'https://www.pharmacieagnespraden.com/blog/anticellulite',
      date: '24/04/2025',
    },
  ],
};
</script>
