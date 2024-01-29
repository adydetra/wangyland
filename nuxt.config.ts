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

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxt/content', 'nuxt-icon', 'nuxt-headlessui', 'nuxt-og-image', '@vueuse/nuxt', '@nuxthq/studio'],

  googleFonts: {
    families: {
      Lexend: [200, 300, 400, 500, 600, 800],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
  },

  image: {
    quality: 70,
    format: ['webp'],
  },

  headlessui: {
    prefix: 'Headless',
  },

  tailwindcss: {
    viewer: false,
  },

  devtools: {
    enabled: true,
  },
});
