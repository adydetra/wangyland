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

  srcDir: 'src/',

  modules: ['@nuxthq/studio', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image', '@vueuse/nuxt', 'nuxt-icon', 'nuxt-headlessui', 'nuxt-og-image'],

  site: {
    url: 'https://wangyland.vercel.app',
  },

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

  ogImage: {
    fonts: [
      'Lexend:400',
    ],
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
