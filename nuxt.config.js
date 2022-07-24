export default {
  ssr: false,
  target: 'static',
  server: {
    host: 'localhost',
    port: 80
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jon Malave | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: 'Web developer with a passion for responsive web design, and single-page application development.' },
      { hid: 'keywords', name: 'keywords', content: 'vue.js, nuxt.js, web, developer, miami' },
      { hid: 'og:locale', property: 'og:locale', content: 'en' },
      { hid: 'og:title', property: 'og:title', content: 'Jon Malave' },
      { hid: 'og:description', property: 'og:description', content: 'Web developer with a passion for responsive web design, and single-page application development.' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://jonmalave.com' },
      { hid: 'og:image', property: 'og:image', content: '/img/thumbnail.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1024' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'jonmalave.com' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '2294868144103186' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@jonmalave' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: 'Jon Malave' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Jon Malave' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Web developer with a passion for responsive web design, and single-page application development.' },
      { hid: 'twitter:image', property: 'twitter:image', content: '/img/thumbnail.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    { src: '~assets/fonts/fontawesome/css/all.min.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
