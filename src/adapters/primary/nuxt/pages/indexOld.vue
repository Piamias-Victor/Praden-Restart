<template lang="pug">
div.flex.flex-col.gap-4
div.h-2
div.h-2
ft-categories(:categoriesVM="categoriesVM")
div.h-4
ft-slider
ft-product-list(:products="productsArray") La sélection du pharmacien
div.h-4
ft-product-list-promo(:products="productInPromotion.products") Promotion
ft-test
div.h-4
section.px-2
    div.flex.items-center.justify-center.py-2
      span.text-2xl.font-bold.text-center(class='lg:text-3xl') La sélection de marque
    ft-laboratory
    div.h-2
    div.flex.items-center.justify-center
      ft-button.button-solid.text-xl.px-8(@click='goToLabo')
        span Voir toutes les marques
        icon.icon-md(name='bx:category')
div.h-4
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
    ft-blog(:blogVm='blogVm')
div.mt-4
section.px-2.hidden(class='sm:block')
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') Avis
  ft-review
section.px-2.hidden(class='sm:block')
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') La Pharmacie
  div.h-2
  div.px-4
    iframe.block.rounded-xl.w-full(
      width="560"
      height="560"
      src="https://www.youtube.com/embed/zLmfyGVF2h0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    )
  div.h-4
  div.px-4.flex.items-center.justify-between.gap-8
    iframe.block.rounded-xl.w-full(
      width="300"
      height="450"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.3004215310857!2d4.090225176285041!3d44.13905002087236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b442f4ce2394b9%3A0xb65c3289906ec27e!2sPharmacie%20Agn%C3%A8s%20Praden%20Al%C3%A8s!5e0!3m2!1sfr!2sfr!4v1729244211496!5m2!1sfr!2sfr"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    )
section.px-2
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') Suivez nos actus
  div.h-2
  div.px-4.grid.grid-cols-1.gap-8(class='lg:grid-cols-2 gap-8')
    div.flex.flex-col.gap-2
      iframe.block.rounded-xl.w-full(
          src="https://www.instagram.com/p/DBBZfFFIB1g/embed" 
          width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        )
      a(href='https://www.instagram.com/pharmacieagnespraden/?hl=en' target='_blank' rel='noopener noreferrer') 
        ft-button.button-solid.w-full
            span Suivez nous sur instagram
            icon.icon-md(name="akar-icons:send")
    div.flex.flex-col.gap-2
      iframe.block.rounded-xl.w-full(
        src='https://www.tiktok.com/embed/v2/7227902361333697819'
        width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      )
      a(href='https://www.tiktok.com/@pharmacieagnespraden' target='_blank' rel='noopener noreferrer')
        ft-button.button-solid.w-full
            span Suivez nous sur TikTok
            icon.icon-md(name="akar-icons:send")
div.h-10
ft-navigation
</template>

<script lang="ts" setup>
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods'
import deliveryGateway from '../../../../../gateways/deliveryGateway'
import { categoryGateway } from '../../../../../gateways/categoryGateway'
import { laboratoryGateway } from '../../../../../gateways/laboratoryGateway'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { listCategories } from '@core/usecases/list-categories/listCategories'
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM'
import { listPromotions } from '@core/usecases/list-promotions/listPromotions'
import { getProductInPromotionVM } from '@adapters/primary/viewModels/get-product/getProductVM'
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories'

definePageMeta({ layout: 'main' })

const router = useRouter()

onMounted(() => {
  listDeliveryMethods(deliveryGateway)
  listCategories(categoryGateway())
  listLaboratories(laboratoryGateway())
  listPromotions(useProductGateway())
})

const categoriesVM = computed(() => {
  return getRootCategoriesVM()
})

const productInPromotion = computed(() => {
  return getProductInPromotionVM()
})

const goToLabo = async (laboratory: string) => {
  router.push('/laboratory')
}

const productTest1 = {
  href: '/products/5ee46259-1d14-4ae5-8abe-651529ed2be5',
  uuid: '5ee46259-1d14-4ae5-8abe-651529ed2be5',
  price: '8,99 €',
  name: "Boiron Mag'300+ fatigue générale 160 comprimés",
  laboratory: 'BOIRON',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358'
  ]
}

const productTest2 = {
  href: '/products/f7943c54-2950-42f6-9473-12ff3243a738',
  uuid: 'f7943c54-2950-42f6-9473-12ff3243a738',
  price: '18,90 €',
  name: 'Physiolac Bio 2ème âge 6 - 12 mois formule épaissie 800g',
  laboratory: 'PHYSIOLAC',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/2c2f294f14dca52000ce84c42648c7ed4ba6c1ff9995c0183832b8699ea52d00'
  ]
}

const productTest3 = {
  href: '/products/f8da260b-9b29-4f0f-b53d-a12da70cb167',
  uuid: 'f8da260b-9b29-4f0f-b53d-a12da70cb167',
  price: '10,89 €',
  name: 'Avene cicalfate spray assech reparateur 100ml',
  laboratory: 'AVÈNE',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/eb0a7fec1df8dda5af654166fcfde629298e2fcd8cc3eaa25786561a69fa46bb'
  ]
}

const productTest4 = {
  href: '/products/0b323a60-5048-445b-93b0-54c72035535e',
  uuid: '0b323a60-5048-445b-93b0-54c72035535e',
  price: '19,90 €',
  name: 'Nhco Immudia 3+ Boîte De 30 Comprimés',
  laboratory: 'NHCO NUTRITION',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/83134c8dd38bf975a703d6a51b6a564e2444d7f985e3a73e76a6d175565879a2'
  ]
}

const productTest5 = {
  href: '/products/0346247a-cc46-4c55-bff4-8520bc52d0de',
  uuid: '0346247a-cc46-4c55-bff4-8520bc52d0de',
  price: '11,90 €',
  name: "Mustela huile de massage à l'huile d'avocat 100ml",
  laboratory: 'MUSTELA',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/fdb9a80f6ed0431f5c17405f6ee9ccc883a721a3c57eb74176abd7eb17b133e6'
  ]
}

const productTest6 = {
  href: '/products/ab1c8581-5773-405d-abf4-721d85302a07',
  uuid: 'ab1c8581-5773-405d-abf4-721d85302a07',
  price: '11,90 €',
  name: 'Bioderma photoderm gel-crème après-soleil fraîcheur 500ml',
  laboratory: 'BIODERMA',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/3f0364eea441918b854c07829e9ebffca084f1718ab71fffec897259ceaa1a3c'
  ]
}

const productTest7 = {
  href: '/products/0e3bfbab-6eb5-48f9-b9f8-a7fb99a39691',
  uuid: '0e3bfbab-6eb5-48f9-b9f8-a7fb99a39691',
  price: '3,30 €',
  name: 'Elgydium brosse à dents anti-plaque souple',
  laboratory: 'PIERRE FABRE ORAL CARE',
  availableStock: 200,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/3e144179afdb8b7bd18b03624177c1d682e95f98615811d0264e8d28758ad0e3'
  ]
}

const productsArray = [
  productTest1,
  productTest2,
  productTest3,
  productTest4,
  productTest5,
  productTest6,
  productTest7
]

const promoTest1 = {
  href: '/products/ba553d06-6ce4-49a5-a561-d903ed8a6b1e',
  uuid: 'ba553d06-6ce4-49a5-a561-d903ed8a6b1e',
  price: '10,80 €',
  promo: '- 2 €',
  pricePromo: '8,80 €',
  name: 'La Roche Posay Cicaplast B5 Spray 100ml',
  laboratory: 'LA ROCHE POSAY',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/030326ec23cf2772478917236e0df8dd019651127310493127e00de6b92f4f30'
  ]
}

const promoTest2 = {
  href: '/products/6e6ca9f0-fc53-4d2d-ac6d-fc257e180190',
  uuid: '6e6ca9f0-fc53-4d2d-ac6d-fc257e180190',
  price: '6,49 €',
  promo: '2 achetés = 1 offert',
  name: 'Arkogélules Olivier Bio 45 Gélules',
  laboratory: 'ARKOPHARMA',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/5d948d47b842ca6cdab9f6812ec994f312c4827a26170ce81e00e7c0be3de1ba'
  ]
}

const promoTest3 = {
  href: '/products/68152e41-11d4-4e1f-b2aa-48290be298d6',
  uuid: '68152e41-11d4-4e1f-b2aa-48290be298d6',
  price: '11,19 €',
  promo: '- 10 % ',
  pricePromo: '10 €',
  name: 'Ristabil complément anti fatigue 10x10ml',
  laboratory: 'LEURQUIN-MEDIOLANUM',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/dedf7cfb5fc1c17acce8737d2d15e887c307fa3b758ca46343acf937aad33900'
  ]
}

const promoTest4 = {
  href: '/products/b9377ef8-73ae-4d52-8be2-02e85b8f6a85',
  uuid: 'b9377ef8-73ae-4d52-8be2-02e85b8f6a85',
  price: '20,90 €',
  promo: '- 2 € ',
  pricePromo: '18,90 €',
  name: 'Avene Hydrance riche crème hydratante 2x40ml',
  laboratory: 'AVÈNE',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/f15e98798bc3ed93d3b965af9452cf3ecd545bfd824a6afbcb5664e5a524e00d'
  ]
}

const promoTest5 = {
  href: '/products/532d8de1-9c3b-4e4b-b815-66d65868e43a',
  uuid: '532d8de1-9c3b-4e4b-b815-66d65868e43a',
  price: '20,90 €',
  promo: '- 2 € ',
  pricePromo: '18,90 €',
  name: 'Avene Hydrance légère émulsion hydratante 2x40ml',
  laboratory: 'AVÈNE',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/53fecf14dfc68709d317a14b9fde9c05518a981732163730f6dab4ec8c05cd5a'
  ]
}

const promoTest6 = {
  href: '/products/570f55ce-76fb-461d-9935-097c574f8f84',
  uuid: '570f55ce-76fb-461d-9935-097c574f8f84',
  price: '11,30 €',
  promo: '- 20 % ',
  pricePromo: '9,10 €',
  name: 'ZzzQuil Sommeil Gommes 30 gommes',
  laboratory: 'PROCTER & GAMBLE',
  availableStock: 14,
  images: [
    'https://praden.s3.eu-west-3.amazonaws.com/public/products/4e54d3891394fd2ea4d3ac669c66d939622a72c8ce05daa5404fa2ab69f552f0'
  ]
}

const promoArray = [
  promoTest4,
  promoTest5,
  promoTest6,
  promoTest2,
  promoTest3,
  promoTest1
]

const blogVm = {
  items: [
    {
      uuid: '1',
      name: 'Ensemble, prenons le cancer de vitesse',
      icon: 'https://i.postimg.cc/zXF5tKmm/oct-rose-cmjn.png',
      url: 'https://www.pharmabest.com/blog/article/20241001-ensemble-prenons-le-cancer-de-vitesse',
      date: '01/10/2024'
    },
    {
      uuid: '2',
      name: 'Faites le plein de vitamines POUR LA RENTRÉE !',
      icon: 'https://i.postimg.cc/RZpGQSRr/img-visu1.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-faites-le-plein-de-vitamines-pour-la-rentree',
      date: '01/09/2024'
    },
    {
      uuid: '3',
      name: 'Les indispensables pour une rentrée EN TOUTE SÉRÉNITÉ',
      icon: 'https://i.postimg.cc/66hrf6WH/img-visu2.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240901-les-indispensables-pour-une-rentree-en-toute-serenite',
      date: '01/09/2024'
    },
    {
      uuid: '4',
      name: 'Faire face à la canicule EN TROIS GESTES',
      icon: 'https://i.postimg.cc/SRtj1vtK/istock-495291758.jpg',
      url: 'https://www.pharmabest.com/blog/article/20240701-faire-face-a-la-canicule-en-trois-gestes',
      date: '01/07/2024'
    }
  ]
}
</script>
