export default {
    ssr: false,
    target: 'server',
    srcDir: '',
    head: {
        title: 'laptopbay',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/tailwind.css'],
    styleResources: {
        scss: [
            '~/assets/scss/base/_mixins.scss'
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/vue-carousel-card',
        { src: "~/plugins/lightGallery.client.js", ssr: false },
        { src: '~/plugins/vue-fb-customer-chat.js', mode: 'client', ssr: false },
        /*  { src: '~/plugins/vuetify.js', ssr: false }, */
        '~/plugins/vue-tilt.js',
        '~/plugins/element-ui',
        { src: '~plugins/slide-menu', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/style-resources'
    ],
    tailwindcss: {},

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources'
    ],
    transition: {
        name: 'el-fade-in-linear',
        mode: 'out-in',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: { vendor: ['vue-burger-menu'] }
}