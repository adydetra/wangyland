export default defineNuxtConfig({
  app: {
    head: {
      title: 'Wangyland',
      bodyAttrs: {
        class: 'bg-slate-800'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Welcome to Wangyland Website' }
      ]
    },
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-headlessui',
    '@vite-pwa/nuxt'
  ],

  headlessui: {
    prefix: 'Headless'
  },
  
  googleFonts: {
    families: {
      Outfit: [200, 300, 400, 500, 600, 800],
    }
  },

  pwa: {
    manifest: {
      name: "Wangyland PWA",
      short_name: "Wangyland PWA",
      description: "Wangyland Website",
      icons: [
        {
          src: 'pwa/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  }
})
