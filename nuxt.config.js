export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hawk-yard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/variables.pcss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        // Consumes files by @import rule
        // https://github.com/postcss/postcss-import
        'postcss-import': {},

        // Convert modern CSS into something most browsers can understand
        // https://github.com/csstools/postcss-preset-env
        'postcss-preset-env': this.preset,

        // Nested rules unwrapper
        // https://github.com/postcss/postcss-nested
        // As you know 'postcss-preset-env' plugin has a 'postcss-nesting' feature
        // but it does not work with nested rules like BEM
        // Report: https://github.com/jonathantneal/postcss-nesting/issues/41
        'postcss-nested': {},

        // Compression tool
        // https://github.com/cssnano/cssnano
        cssnano: {}
      },
      preset: {
        stage: 2,
        // Instruct all plugins to omit pre-polyfilled CSS
        // https://github.com/csstools/postcss-preset-env#preserve
        preserve: false,
        features: {
          // Modify colors using the color-mod() function in CSS
          // https://github.com/jonathantneal/postcss-color-mod-function
          'color-mod-function': {}
        }
      }
    }
  }
}
