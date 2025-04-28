import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';
import axios from 'axios';

// 🔹 Fonction pour formater les URLs des catégories
const formatCategoryUrl = (category: { name: string; uuid: string }): string => {
  const formattedName = category.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets en début ou fin de chaîne

  return `/categories/${formattedName}?${category.uuid}`;
};

const formatProductUrl = (product: { slug: string; uuid: string }): string => {
  return `/products/${product.slug}?${product.uuid}`;
};

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      HMAC: process.env.HMAC,
      CONFIRMATION_TEMPLATE_ID: process.env.CONFIRMATION_TEMPLATE_ID,
      SEND_EMAIL_URL: process.env.SEND_EMAIL_URL,
      BACKEND_URL: process.env.BACKEND_URL,
      KEYCLOAK_URL: process.env.KEYCLOAK_URL,
      KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
      KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
    },
  },

  plugins: [
    '~/src/plugins/keycloak.client.ts',
    '~/src/plugins/dataLayer.client.ts', // Ajout du plugin dataLayer
  ],

  alias: {
    '@adapters/': fileURLToPath(new URL('./src/adapters/', import.meta.url)),
    '@core/': fileURLToPath(new URL('./src/core/', import.meta.url)),
    '@store/': fileURLToPath(new URL('./src/store/', import.meta.url)),
    '@utils/': fileURLToPath(new URL('./src/utils/', import.meta.url)),
  },

  app: {
    head: {
      title: 'Pharmacie Agnes Praden - ALES',
      meta: [
        {
          name: 'description',
          content: 'Bienvenue sur la Pharmacie Agnes Praden. Découvrez nos produits de santé, bien-être, et plus encore.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.js' },
        { src: 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js' },
        {
          src: 'https://ws.colissimo.fr/widget-colissimo/js/jquery.plugin.colissimo.min.js',
        },
      ],
    },
  },

  components: {
    dirs: [
      {
        path: '~/src/adapters/primary/nuxt/components/',
        global: true,
        pathPrefix: false,
      },
      '~/components',
    ],
  },

  typescript: {
    strict: true,
  },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/sitemap', 'nuxt-gtag'],

  dir: {
    layouts: './src/adapters/primary/nuxt/layouts',
    pages: './src/adapters/primary/nuxt/pages/',
  },

  css: ['~/assets/css/tailwind.css'],
  ssr: true,
  target: 'server',
  compatibilityDate: '2024-08-26',

  sitemap: {
    hostname: 'https://pharmacieagnespraden.com',
    xsl: false, // Désactiver la feuille de style XSL par défaut
    strictNoDupe: true, // Éviter les doublons d'URLs
    trailingSlash: false, // Ne pas ajouter de slash à la fin des URLs
    canonicalURL: 'https://pharmacieagnespraden.com', // S'assurer que l'URL canonique reste sans www
    urls: async () => {
      try {
        console.log('📌 Début de la génération du sitemap');

        // 🔹 Récupération des catégories
        console.log('📌 Récupération des catégories...');
        const categoryResponse = await axios.get('https://ecommerce-backend-production.admin-a5f.workers.dev/categories');
        const categories = categoryResponse.data.items || [];

        const categoryUrls = categories.map((category: { name: string; uuid: string }) => ({
          url: formatCategoryUrl(category),
          changefreq: 'weekly',
          priority: 0.8,
        }));

        console.log(`✅ ${categoryUrls.length} catégories ajoutées`);

        // 🔹 Récupération des produits
        console.log('📌 Récupération des produits...');
        const productResponse = await axios.get('https://ecommerce-backend-production.admin-a5f.workers.dev/sitemap');
        const products = productResponse.data || [];

        const productUrls = products.map((product: { slug: string; uuid: string }) => ({
          url: formatProductUrl(product),
          changefreq: 'weekly',
          priority: 0.7,
        }));

        console.log(`✅ ${productUrls.length} produits ajoutés`);

        // 🔹 Fusion des catégories et des produits
        // Modifié pour inclure l'accueil directement dans la liste
        const allUrls = [
          { url: '/', changefreq: 'daily', priority: 1.0 },
          ...categoryUrls, 
          ...productUrls
        ];

        console.log(`📌 Total des routes générées : ${allUrls.length}`);
        return allUrls;
      } catch (error) {
        console.error('❌ Erreur lors de la récupération des données pour le sitemap:', error);
        return [{ url: '/' }];
      }
    },
  },

  // Configuration pour nuxt-gtag (si vous souhaitez utiliser cette méthode plutôt que le dataLayer manuel)
  gtag: {
    id: 'GTM-K9S5LG3', // Remplacez par votre ID GTM
    config: {
      send_page_view: true
    }
  }
});