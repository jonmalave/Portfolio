module.exports = {
  // Server 
  server: {
    host: 'localhost',
    port: 3000
  },

  // Mode  
  mode: 'universal',

  // Headers of the page
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
      { hid: 'og:image', property: 'og:image', content: 'https://jonmalave.com/img/thumbnail.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1024' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'jonmalave.com' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@jonmalave' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: 'Jon Malave' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Jon Malave' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Web developer with a passion for responsive web design, and single-page application development.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://jonmalave.com/img/thumbnail.jpg' }      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://jonmalave.com/img/icon.jpg' }
    ] 
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    { src: '~assets/fonts/fontawesome/css/all.min.css', lang: 'css' }
  ],

  // Plugins to load before mounting the App
  plugins: [
  ],

  // Nuxt.js modules
  modules: [

  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {

    }
  } 
}
