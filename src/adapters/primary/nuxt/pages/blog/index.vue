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
          ft-button-animate.button-solid SEO
          ft-button-animate.button-solid Référencement
          ft-button-animate.button-solid Web
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
  console.log('ici');
  listLaboratories(laboratoryGateway());
  getLaboratory('d38863a4-8396-4979-8e37-88df1d4c3068', laboratoryGateway(), searchGateway());
  try {
    laboratoryInfo.value = await getLaboratoryInfo(laboratoryGateway(), 'd38863a4-8396-4979-8e37-88df1d4c3068');
    console.log('ici');
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
      uuid: '0',
      name: 'Tout comprendre sur le CTR en SEO',
      icon: 'https://www.tactee.fr/wp-content/uploads/2022/08/13.png',
      url: 'http://localhost:3000/blog/0',
      date: '01/11/2024',
    },
    {
      uuid: '1',
      name: 'Ensemble, prenons le cancer de vitesse',
      icon: 'https://i.postimg.cc/zXF5tKmm/oct-rose-cmjn.png',
      url: 'https://www.pharmabest.com/blog/article/20241001-ensemble-prenons-le-cancer-de-vitesse',
      date: '01/10/2024',
    },
    {
      uuid: '2',
      name: 'Faites le plein de vitamines POUR LA RENTRÉE !',
      icon: 'https://i.postimg.cc/RZpGQSRr/img-visu1.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-faites-le-plein-de-vitamines-pour-la-rentree',
      date: '01/09/2024',
    },
    {
      uuid: '3',
      name: 'Les indispensables pour une rentrée EN TOUTE SÉRÉNITÉ',
      icon: 'https://i.postimg.cc/66hrf6WH/img-visu2.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-les-indispensables-pour-une-rentree-en-toute-serenite',
      date: '01/09/2024',
    },
    {
      uuid: '4',
      name: 'Faire face à la canicule EN TROIS GESTES',
      icon: 'https://i.postimg.cc/SRtj1vtK/istock-495291758.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240701-faire-face-a-la-canicule-en-trois-gestes',
      date: '01/07/2024',
    },
  ],
};
</script>
