import dotenv from 'dotenv'
import webpack from 'webpack'

dotenv.config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msvalidate.01', content: process.env.BING_V_CODE || '' },
      { name: 'yandex-verification', content: process.env.YANDEX_V_CODE || '' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#42b883' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/bootstrap-vue.client',
    '~/plugins/jquery-code.client',
  ],
  /*
  ** Nuxt.js build-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
  ],
  /**
   * @var mixed	bootstrapVu
   */
  bootstrapVue: {
    bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: ['Alert', 'Jumbotron'], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  /**
   * @var mixed	styleResource
   */
  styleResources: {
    sass: [],
    scss: [
      '~/assets/scss/vars/*.scss',
      '~/assets/scss/abstracts/_mixins.scss'
    ],
    less: [],
    stylus: []
  },
  /**
  * @var mixed googleAnalytic
  */
  googleAnalytics: {
    id: process.env.GA_ID || '',
    ecommerce: {
      enabled: true
    },
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        // BootstrapVue and PortalVue require access to the global Vue reference (via import Vue from 'vue').
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      }
    }
  }
}
