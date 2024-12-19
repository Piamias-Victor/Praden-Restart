import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STRIPE_API_KEY: process.env.STRIPE_API_KEY,
      CONFIRMATION_TEMPLATE_ID: process.env.CONFIRMATION_TEMPLATE_ID,
      SEND_EMAIL_URL: process.env.SEND_EMAIL_URL,
      BACKEND_URL: process.env.BACKEND_URL,
      KEYCLOAK_URL: process.env.KEYCLOAK_URL,
      KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
      KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
    },
  },

  plugins: ['~/src/plugins/keycloak.client.ts'], // Facultatif si vous suivez la convention

  alias: {
    '@adapters/': fileURLToPath(new URL('./src/adapters/', import.meta.url)),
    '@core/': fileURLToPath(new URL('./src/core/', import.meta.url)),
    '@store/': fileURLToPath(new URL('./src/store/', import.meta.url)),
    '@utils/': fileURLToPath(new URL('./src/utils/', import.meta.url)),
  },

  app: {
    head: {
      title: 'Praden MarketPlace',
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

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/icon'],

  dir: {
    layouts: './src/adapters/primary/nuxt/layouts',
    pages: './src/adapters/primary/nuxt/pages/',
  },

  css: ['~/assets/css/tailwind.css'],
  ssr: true,
  compatibilityDate: '2024-08-26',
});
