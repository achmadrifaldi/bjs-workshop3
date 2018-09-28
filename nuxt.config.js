module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'manga-eden',
    meta: [
      { charset: 'utf-8' },
      { name: "referrer", content: "no-referrer" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  plugins: [
    {
      src: '~/plugins/vue-moment.js',
      ssr: true
    },
    {
      src: '~/plugins/vue-lazyload.js',
      ssr: true
    },
    {
      src: '~/plugins/vue-infinite-scroll.js',
      ssr: false
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

