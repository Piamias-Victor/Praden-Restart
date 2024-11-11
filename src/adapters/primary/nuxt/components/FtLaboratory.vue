<template lang="pug">
    Vue3Marquee(direction='reverse' pauseOnHover='true')
        nuxt-link.cursor-pointer(@click="goToLabo('avene')")
            img(src='https://logo-marque.com/wp-content/uploads/2020/12/Avene-Logo.png' class='w-[200px]') 
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('uriage')")
            img(src='https://www.resonance-coaching.com/wp-content/uploads/2018/02/logo-uriage-blanc-300x228.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('aderma')")
            img(src='https://pharmaciedelacapte.fr/wp-content/uploads/2020/04/A-Derma-logo-carr%C3%A9-copie.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('la rosee')")
            img(src='https://www.pharmaleo.fr/media/category/img/zoom/larosee-removebg-preview.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('svr')")
            img(src='https://www.feazer.com/wp-content/uploads/2021/05/LOGO-SVR.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('mustela')")
            img(src='https://logo-marque.com/wp-content/uploads/2020/12/Mustela-Logo.png' class='w-[200px]')
        div(class='w-[100px]')
        nuxt-link.cursor-pointer(@click="goToLabo('babybio')")
            img(src='https://www.koalibio.fr/data/marques/1672916134.png' class='w-[200px]')
        div(class='w-[100px]')
</template>

<script lang="ts" setup>
import { searchProduct } from '@core/usecases/search-product/searchProduct'
import { searchGateway } from '../../../../../gateways/searchGateway'
import { Vue3Marquee } from 'vue3-marquee'
const router = useRouter()

const goToLabo = async (laboratory: string) => {
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
