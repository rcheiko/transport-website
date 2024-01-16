// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-modules/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://github.com/nuxt-modules/i18n
    "@nuxtjs/i18n",
    // https://github.com/vuejs/pinia
    // "@pinia/nuxt",
    // https://github.com/vueuse/vueuse
    "@vueuse/nuxt",
    // https://github.com/nuxt/image
    "@nuxt/image",
    // https://github.com/nuxt-modules/icon
    "nuxt-icon",
    // https://github.com/nuxt-modules/html-validator
    // '@nuxtjs/html-validator',
  ],
  tailwindcss: {
    configPath: "tailwind.config",
  },
  // runtimeConfig: {
  //   // privateenv: process.env.NUXT_privateenv,
  //   public: {
  //     publicenv: process.env.NUXT_PUBLIC_publicenv,
  //   },
  // },
  i18n: {
    // baseUrl: "http://localhost:3000",
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      cookieCrossOrigin: true,
      fallbackLocale: "fr",
    },
  },
  typescript: {
    strict: true,
  },
});
