import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
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

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/sitemap'],

  dir: {
    layouts: './src/adapters/primary/nuxt/layouts',
    pages: './src/adapters/primary/nuxt/pages/',
  },

  css: ['~/assets/css/tailwind.css'],
  ssr: true,
  compatibilityDate: '2024-08-26',

  sitemap: {
    hostname: 'https://www.pharmacieagnespraden.com',
    gzip: true,
    routes: () => {
      const categories = [
        { slug: 'dermocosm-tique', id: '7480b66f-d589-42de-a122-3cff0590dd40' },
        { slug: 'complement-alimentaire', id: '12345678-aaaa-bbbb-cccc-123456789abc' },
      ];
      const products = [
        { slug: 'pileje-phytobiane-harpagophytum-45-comprim-s', id: '05328c6f-a0fe-4a87-a17f-ff922c8a19ca' },
        { slug: 'avene-eau-thermale-300ml', id: 'abcdef12-3456-7890-abcd-ef1234567890' },
      ];
      const laboratories = [
        { slug: 'avene', id: '65e2dd9e-d56e-418f-87bd-7a46a5342f5d' },
        { slug: 'bioderma', id: '98765432-aaaa-bbbb-cccc-9876543210ff' },
      ];

      return [
        ...categories.map((cat) => `/categories/${cat.slug}?${cat.id}`),
        ...products.map((prod) => `/products/${prod.slug}?${prod.id}`),
        ...laboratories.map((lab) => `/laboratory/${lab.slug}?${lab.id}`),
      ];
    },
  },
});
