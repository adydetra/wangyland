export default defineNuxtConfig({
  app: {
    head: {
      title: 'Wangyland',
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
    'nuxt-icon'
  ],

  googleFonts: {
    families: {
      Outfit: [200, 300, 400, 500, 600],
    }
  }
})
