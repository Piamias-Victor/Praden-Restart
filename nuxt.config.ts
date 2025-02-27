import { defineNuxtConfig } from 'nuxt/config';
import { createPinia } from 'pinia';
import { useCategoryStore } from './src/store/categoryStore.js';
import { fileURLToPath } from 'url';
import axios from 'axios';

// Fonction pour formater les URLs des catégories
const formatCategoryUrl = (category: { name: string; uuid: string }): string => {
  const formattedName = category.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets en début ou fin de chaîne

  return `/categories/${formattedName}?${category.uuid}`;
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

  plugins: ['~/src/plugins/keycloak.client.ts'],

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
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
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
  compatibilityDate: '2024-08-26',

  sitemap: {
    hostname: 'https://www.pharmacieagnespraden.com/',
    urls: async () => {
      try {
        const response = await axios.get(
          'https://ecommerce-backend-production.admin-a5f.workers.dev/categories'
        );
        const categories = response.data.items || [];

        const categoryUrls = categories.map((category: { name: string; uuid: string; image?: string; updated_at?: string }) => ({
          url: formatCategoryUrl(category), // 🔥 URL formatée
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: category.updated_at || new Date().toISOString(), // 📅 Ajout de la date de mise à jour
          img: category.image ? [{ url: category.image, caption: category.name }] : [], // 🖼 Ajout de l'image si dispo
        }));

        return [
          { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
          ...categoryUrls,
        ];
      } catch (error) {
        console.error('❌ Erreur lors de la récupération des catégories:', error);
        return [{ url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }];
      }
    },
  },
});
