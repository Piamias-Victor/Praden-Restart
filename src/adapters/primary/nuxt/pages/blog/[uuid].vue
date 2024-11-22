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
    h1.text-main.text-6xl.font-semibold CTR en SEO
    div.flex.items-center.justify-between.w-full
      div.flex.flex-col.gap-2
        span.font-semibold.text-lg Tags :
        div.flex.items-center.gap-2
          ft-button-animate.button-solid SEO
          ft-button-animate.button-solid Référencement
          ft-button-animate.button-solid Web
      span.text-contrast.font-semibold Date de publication : 01/11/2024
    span.text-sm.prose-xl(v-if='laboratoryInfo && laboratoryInfo.item' v-html="laboratoryInfo.item.description")
  ft-product-list.mt-4(:products="searchVM") Ces produits peuvent vous plaire
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
</script>
