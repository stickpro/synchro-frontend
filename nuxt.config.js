export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: 'components/UI/loader.vue',
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/app.scss', // use our build, as entered via app.scss
    'swiper/dist/css/swiper.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vue-svg-icon', mode: 'true' },
    { src: '@/plugins/swiper.js', ssr: true, mode: 'client' },],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
   // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    //'@nuxtjs/eslint-module',
    ['@nuxtjs/bootstrap-vue', { css: false }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '.env.API_URL'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  auth: {
    strategies: {
        local: {
            endpoints: {
                login: { 
                    url: '/login', 
                    method: 'post',
                    withCredentials: true, 
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json'
                    } 
                },
                user: { 
                    url: '/api/user', 
                    method: 'get', 
                    propertyName: false,
                                        withCredentials: true, 
                            headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-Type': 'application/json'
                            }
                }
            },
            tokenRequired: false,
            tokenType: false
        }
    }
},
}
