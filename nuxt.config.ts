export default defineNuxtConfig({
  app: {
    head: {
      title: "Wangyland",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "bg-slate-800",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Welcome to Wangyland Website" },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/content", "nuxt-icon", "nuxt-headlessui"],

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
