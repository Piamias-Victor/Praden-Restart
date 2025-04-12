<template lang="pug">
    Vue3Marquee(direction='reverse' pauseOnHover='true')
        nuxt-link.cursor-pointer(@click="goToLabo('avene?65e2dd9e-d56e-418f-87bd-7a46a5342f5d')")
            img(src='https://logo-marque.com/wp-content/uploads/2020/12/Avene-Logo.png' class='w-[200px]') 
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('uriage?4d18306b-04aa-471c-8d1c-0553bb97facc')")
            img(src='https://i.postimg.cc/0ycF1wnh/logo-uriage-blanc-300x228.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('a-derma?4bf91ddb-1546-44f5-8c13-f8298daf13b2')")
            img(src='https://pharmaciedelacapte.fr/wp-content/uploads/2020/04/A-Derma-logo-carr%C3%A9-copie.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('la-rosee?963ecbfd-6e79-4783-98cd-a28438f1e1ee')")
            img(src='https://www.pharmaleo.fr/media/category/img/zoom/larosee-removebg-preview.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('svr?7740d676-e513-4733-a77f-bb42c81841b9')")
            img(src='https://www.feazer.com/wp-content/uploads/2021/05/LOGO-SVR.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('mustela?74aa0c86-33ad-41ac-9629-f642b5cef2e1')")
            img(src='https://logo-marque.com/wp-content/uploads/2020/12/Mustela-Logo.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('babybio?4bd60c65-31fb-4e2b-8a5f-c5725b36bd20')")
            img(src='https://www.koalibio.fr/data/marques/1672916134.png' class='w-[200px]')
        div(class='w-[100px]')
</template>

<script lang="ts" setup>
import { searchProduct } from '@core/usecases/search-product/searchProduct';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { Vue3Marquee } from 'vue3-marquee';
const router = useRouter();

const goToLabo = async (laboratory: string) => {
  if (laboratory) {
    try {
      const result = await searchProduct(laboratory, searchGateway());
    } catch (error) {}
  } else {
  }
  router.push('/laboratory/' + laboratory);
};
</script>
