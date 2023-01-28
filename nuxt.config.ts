// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt-alt/proxy',
        '@nuxt-alt/vuetify',
    ],
    proxy: {
        proxies: {
            '/api': 'https://www.boredapi.com'
        }
    },
    vuetify: {
        pluginOptions: {
            styles: 'sass',
        },
    },
})
