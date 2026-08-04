import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],

  fonts: {
    families: [
      { name: 'Lexend', provider: 'google', weights: ['200', '300', '400', '500', '600', '700', '800', '900'] },
    ],
  },

  site: {
    url: 'https://wangyland.vercel.app',
  },

  sitemap: {
    zeroRuntime: true,
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  content: {

    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          },
        },
      },
    },
  },

  image: {
    quality: 70,
    format: ['webp'],
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2025-01-18',
});
