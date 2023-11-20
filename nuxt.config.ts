export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/content", "nuxt-icon", "nuxt-headlessui", "nuxt-og-image", "@vueuse/nuxt", "@nuxthq/studio"],

  devtools: { enabled: false },

  tailwindcss: {
    viewer: false,
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "github-dark",
      },
    },
  },

  image: {
    quality: 70,
    format: ["webp"],
  },

  headlessui: {
    prefix: "Headless",
  },

  googleFonts: {
    families: {
      Outfit: [200, 300, 400, 500, 600, 800],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
});
