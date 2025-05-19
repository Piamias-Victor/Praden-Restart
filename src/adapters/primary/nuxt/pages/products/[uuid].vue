<template lang="pug">
  ft-categories(:categoriesVM="categoriesVM") 
  // Fil d'Ariane amélioré avec des microdonnées Schema.org
  nav.breadcrumbs.flex.items-center.text-sm.text-gray-600.m-2(v-if="productVM" itemscope itemtype="https://schema.org/BreadcrumbList")
        div(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
          nuxt-link.text-main.font-medium(href="/" itemprop="item")
            span(itemprop="name") Accueil
            meta(itemprop="position" content="1")
        span.mx-2 /
        div(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
          nuxt-link.text-main.font-medium(href="/laboratory" itemprop="item")
            span(itemprop="name") Laboratoires
            meta(itemprop="position" content="2")
        span.mx-2 /
        div(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
          nuxt-link.text-main.font-medium(:href="`/laboratory/${formatLaboratorySlug(productVM.laboratory)}`" itemprop="item")
            span(itemprop="name") {{ productVM.laboratory }}
            meta(itemprop="position" content="3")
        span.mx-2 /
        div(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
          span.text-main.font-semibold(itemprop="name") {{ productVM.name }}
          meta(itemprop="position" content="4")
  
  div.mt-4(v-if="productVM")
    div.mx-auto.max-w-2xl(class='lg:max-w-none relative')
      div(class='grid grid-cols-1 sm:grid-cols-2 sm:items-start sm:gap-x-8')
        div.flex.flex-col.justify-start
          div.relative
            ft-image-gallery(
              :key="productVM.uuid"
              :images="productVM.images"
              :alt-text="`${productVM.name} - Pharmacie Agnès Praden à Alès`"
            )
            ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
              v-if="likeQuantity && likeQuantity.items && likeQuantity.items[productVM.uuid]"
              @click="removeItemFromFavorite(productVM.uuid)"
              aria-label="Remove from favorites"
            )
              icon.icon-lg.text-main(name="ph:heart-fill")
  
            ft-button.bg-transparent.absolute.top-2.right-2.text-main.p-2.rounded-full(
              v-if="likeQuantity && likeQuantity.items && !likeQuantity.items[productVM.uuid]"
              @click="addItemToFavorite(productVM.uuid)"
              aria-label="Add to favorites"
            )
              icon.icon-lg.text-main(name="ph:heart-bold")
  
          ft-add-to-cart-button(:maxQuantity="productVM.maxQuantity" :product-uuid="productVM.uuid" :isMedicine="productVM.isMedicine" :availableStock="productVM.availableStock - 3" v-if="productVM && productVM.availableStock && productVM.availableStock > 0")
          div.bg-main.rounded-b-xl.mt-1(class='p-0.5' v-else)
            ft-button.w-full.text-white.flex.items-center.justify-center.font-semibold
              span Bientôt disponible
  
          div.absolute.top-0.left-0.bg-main.text-white.text-xl.font-bold.p-2.rounded-tr-lg.rounded-bl-lg.z-10(v-if="productVM.promotion")
            span {{'- ' + productVM.promotion.amount}}
  
        div.px-4.flex.flex-col.justify-between
          div.mt-2
            h1.text-lg.font-semibold.tracking-tight(class='lg:text-3xl' itemprop="name")
              | {{ productVM.name }}
  
          div.mt-2.flex.justify-between.items-end(class='lg:pr-12')
            span.font-bold.text-main.text-xl(v-if="productVM.promotion && productVM.promotion.price" class='lg:text-4xl') {{ productVM.promotion.price }}
            span.text-xl.font-bold.tracking-tight(:class="productVM.promotion && productVM.promotion.price ? 'line-through lg:text-4xl' : 'font-bold text-main lg:text-4xl'") {{ productVM.price }}
  
          // Texte pour les médicaments
          div.mt-2.text-sm.text-main(v-if="productVM.isMedicine")
            | Ce produit est un médicament et n'intègre pas l'offre frais de port offerts.
  
          div.h-2
          span.text-sm.font-bold.tracking-tight.text-contrast(class='lg:text-xl') {{ productVM.laboratory }}
  
          div.mt-4
            div.space-y-6.text-base.text-contrast(style="white-space: pre-line" itemprop="description")
              div.text-sm(v-html="productVM.description")
  
          div.mt-2.flex.flex-col.gap-4(aria-labelledby='details-heading')
            ft-disclosure(v-for='detail in productVM.details' :key='detail.name')
              template(#title) {{ detail.name }}
              div.text-base.text-contrast(v-if="detail.name !== 'Notice'" style="white-space: pre-line")
                div.text-xs(v-html="detail.value")
              iframe.w-full.h-screen(v-else :src="detail.value")
          
          // Bouton Voir la notice - s'affiche uniquement si noticeUrl existe
          a.mt-4.bg-main.rounded-xl.text-white.flex.items-center.justify-center.gap-2.py-2.px-4.font-semibold(
            v-if="productVM.noticeUrl"
            :href="productVM.noticeUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Voir la notice du produit"
          )
            span Voir la notice
            icon.icon-md(name="akar-icons:send")
  
      ft-navigation
      ft-product-list.mt-4(:products="searchVM") Ces produits peuvent vous plaire
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watchEffect } from 'vue';
import { getProduct } from '@core/usecases/get-product/getProduct';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { categoryGateway } from '../../../../../../gateways/categoryGateway';
import { getProductVM } from '@adapters/primary/viewModels/get-product/getProductVM';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { listCategories } from '@core/usecases/list-categories/listCategories';
import { getSearchResultVMFirstSix } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM';
import { searchGateway } from '../../../../../../gateways/searchGateway';
import { searchProduct } from '@core/usecases/search-product/searchProduct';
import { addToFavorite, removeFromFavorite } from '@core/usecases/add-to-favorite/addToFavorite';
import { sendNotifLike } from '@core/usecases/add-notif/cartNotif';
import { removeFirstNotification } from '@core/usecases/remove-notification/removeNotification';
import { getLikeQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-like/getQuantityInLikeVm';
import { getCategoryVM } from '@adapters/primary/viewModels/get-category/getCategoryVM';
import { listBestSales } from '@core/usecases/list-promotions/listPromotions';
import { getSearchLaboratoriesVM } from '@adapters/primary/viewModels/get-category/getSearchCategoryVM';
import { getLaboratoryByName } from '@adapters/primary/viewModels/get-laboratory/getLaboratoryVM';
import { listLaboratories } from '@core/usecases/list-laboratories/listLaboratories';
import { laboratoryGateway } from '../../../../../../gateways/laboratoryGateway';
import { listDeliveryMethods } from '@core/usecases/delivery-methods-listing/listDeliveryMethods';
import { listPromotions } from '@core/usecases/list-promotions/listPromotions';
import { listBanner } from '@core/usecases/list-banner/listBanner';
import { bannerGateway } from '../../../../../../gateways/bannerGateway';
import deliveryGateway from '../../../../../../gateways/deliveryGateway';
import { useHead, useAsyncData } from 'nuxt/app';

definePageMeta({ 
  layout: 'main',
  title: 'Produit | Pharmacie Agnès Praden',
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
});

const productId = ref<string | null>(null);
const isPromo = ref(false);
const route = useRoute();
const query = ref('');

// Formatage des URL pour optimisation SEO
const formatLaboratorySlug = (name: string): string => {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-')     // Remplace les caractères spéciaux par des tirets
    .replace(/^-|-$/g, '');          // Retire les tirets en début/fin
};

const formatProductSlug = (name: string): string => {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-')     // Remplace les caractères spéciaux par des tirets
    .replace(/^-|-$/g, '');          // Retire les tirets en début/fin
};

function extractUuidFromPath(path: string): string {
  if (!path) return '';
  const [_, uuid] = path.split('?');
  return uuid || '';
}

const fullPath = route.fullPath as string;
const productUuid = extractUuidFromPath(fullPath);

onMounted(() => {
  listDeliveryMethods(deliveryGateway);
  listPromotions(useProductGateway());
  listBanner(bannerGateway());
  listCategories(categoryGateway());
  listBestSales(useProductGateway());
  listLaboratories(laboratoryGateway());
});

// Chargement des données du produit
const { data: productVM, pending, error } = await useAsyncData(`product-${productUuid}`, async () => {
  if (!productUuid) {
    console.error("Erreur : aucun UUID trouvé dans l'URL");
    return null;
  }

  try {
    await getProduct(productUuid, useProductGateway());
    const product = getProductVM();

    if (!product) {
      console.error("Erreur : aucun produit retourné par `getProductVM()`");
      return null;
    }

    return product;
  } catch (err) {
    console.error("Erreur lors de la récupération du produit :", err);
    return null;
  }
});

// Configuration des métadonnées et du SEO
useHead(() => {
  if (!productVM.value) return {};

  // Construction d'URL canonique propre
  const formattedName = formatProductSlug(productVM.value.name);
  const canonicalUrl = `https://pharmacieagnespraden.com/products/${formattedName}?${productUuid}`;

  // Extraction du prix pour les données structurées
  const priceString = productVM.value.promotion?.price || productVM.value.price || '0';
  const priceValue = priceString.replace(/[^0-9,]/g, '').replace(',', '.');
  
  // Préparation de la description sans HTML
  const rawDescription = productVM.value.description 
    ? (typeof productVM.value.description === 'string' 
      ? productVM.value.description.replace(/<[^>]*>/g, '') 
      : "") 
    : "";
  
  const cleanDescription = rawDescription.substring(0, 160) + (rawDescription.length > 160 ? '...' : '');
  
  // Préparation des images améliorées pour SEO
  const productImages = productVM.value.images && productVM.value.images.length > 0 
    ? productVM.value.images.map(img => ({
        "@type": "ImageObject",
        "url": img,
        "caption": `${productVM.value.name} - Pharmacie Agnès Praden à Alès`,
      }))
    : [];
  
  // Construction du schéma JSON-LD
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productVM.value.name,
    "description": cleanDescription,
    "brand": {
      "@type": "Brand",
      "name": productVM.value.laboratory || "Pharmacie Agnès Praden"
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "EUR",
      "price": priceValue,
      "availability": productVM.value.availableStock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Pharmacie Agnès Praden"
      }
    },
    "image": productImages,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12"
    }
  };

  // Schéma Organization supplémentaire
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pharmacie Agnès Praden",
    "url": "https://pharmacieagnespraden.com",
    "logo": "https://pharmacieagnespraden.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "04 66 30 22 60",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "198 Avenue des Frères Lumière",
      "addressLocality": "Alès",
      "postalCode": "30100",
      "addressCountry": "FR"
    }
  };

  // Configuration complète des métadonnées
  return {
    htmlAttrs: {
      lang: 'fr'
    },
    title: `${productVM.value.name} | Pharmacie Agnès Praden à Alès`,
    meta: [
      {
        name: 'description',
        content: `Commandez ${productVM.value.name} en ligne sur la Pharmacie Agnès Praden. Livraison à domicile, en point relais ou à notre pharmacie à Alès en click and collect.`
      },
      {
        name: 'author',
        content: 'Pharmacie Agnès Praden'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      // Open Graph
      {
        property: 'og:title',
        content: `${productVM.value.name} | Pharmacie Agnès Praden à Alès`
      },
      {
        property: 'og:description',
        content: `Commandez ${productVM.value.name} en ligne sur la Pharmacie Agnès Praden. Livraison à domicile, en point relais ou à notre pharmacie à Alès en click and collect.`
      },
      {
        property: 'og:url',
        content: canonicalUrl
      },
      {
        property: 'og:type',
        content: 'product'
      },
      {
        property: 'og:site_name',
        content: 'Pharmacie Agnès Praden'
      },
      {
        property: 'og:image',
        content: productVM.value.images && productVM.value.images.length > 0 ? productVM.value.images[0] : ""
      },
      {
        property: 'og:image:width',
        content: '800'
      },
      {
        property: 'og:image:height',
        content: '600'
      },
      {
        property: 'og:image:alt',
        content: `${productVM.value.name} - Pharmacie Agnès Praden à Alès`
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'product'
      },
      {
        name: 'twitter:title',
        content: `${productVM.value.name} | Pharmacie Agnès Praden`
      },
      {
        name: 'twitter:description',
        content: `Commandez ${productVM.value.name} en ligne sur la Pharmacie Agnès Praden.`
      },
      {
        name: 'twitter:image',
        content: productVM.value.images && productVM.value.images.length > 0 ? productVM.value.images[0] : ""
      },
      // Mots-clés supplémentaires
      {
        name: 'keywords',
        content: `pharmacie, Alès, ${productVM.value.name}, ${productVM.value.laboratory}, parapharmacie, click and collect, livraison`
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(organizationLd)
      }
    ]
  };
});

const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});

const sendUserNotif = () => {
  setTimeout(sendNotifLike);
  setTimeout(removeFirstNotification, 1500);
};

const addItemToFavorite = (uuid: string) => {
  addToFavorite(uuid, useProductGateway());
  sendUserNotif();
};

const removeItemFromFavorite = (uuid: string) => {
  removeFromFavorite(uuid);
};

export interface LikeQuantityVM {
  items: HashTable<number>;
  totalQuantity: number;
}

const likeQuantity = ref<LikeQuantityVM | null>(null);

watchEffect(async () => {
  likeQuantity.value = await getLikeQuantityVM(useProductGateway());
});

const categoryVM = computed(() => {
  return getCategoryVM();
});

const searchVM = computed(() => {
  let res = getSearchResultVMFirstSix(route.params.uuid as string);
  return res.items;
});

const laboratoriesVM = computed(() => {
  return getSearchLaboratoriesVM(query.value);
});

// Utilisation de watchEffect pour détecter les changements de laboratory
watchEffect(async () => {
  const laboratory = productVM.value?.laboratory;
  if (laboratory) {
    try {
      const result = getLaboratoryByName([laboratory], '', searchGateway());
    } catch (error) {}
  }
});
</script>