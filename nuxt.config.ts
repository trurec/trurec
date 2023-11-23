export default defineNuxtConfig({
  devtools: { enabled: process.env.APP_DEBUG || false },
  ssr: false,
  spaLoadingTemplate: "spa-loading-template.html",
  srcDir: "src/",
  typescript: {
    strict: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: process.env.APP_NAME || "Trurec",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Trurec is a Recruitment Automation SaaS (Software as a Service) platform that streamlines the hiring process for businesses. With Trurec, you can effortlessly post job openings, manage applicant data, and schedule interviews, all in one place. This user-friendly software simplifies recruitment, saving you time and helping you find the perfect candidates for your job positions.",
        },
        { name: "keywords", content: "Trurec, Recruitment, Automation, SaaS" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:locale", content: "en_GB" },
        { property: "og:type", content: "article" },
        {
          property: "og:title",
          content: "Trurec - Recruitment automation SaaS",
        },
        { property: "og:url", content: "https://app.trurec.io" },
        { property: "og:site_name", content: "Trurec" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
      ],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/sass/index.scss"],
  modules: ["@nuxtjs/i18n", "@nuxtjs/google-fonts", "nuxt-bootstrap-icons", "nuxt-purgecss"],
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    vueI18n: "./i18n.config.ts" 
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Roboto: [300, 400, 500, 600],
    },
    display: "swap",
  },
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        const cssLoader = config.module.rules.find((rule) => {
          return rule.test.toString() === "/\\.css$/i";
        });
        cssLoader.oneOf = cssLoader.oneOf.map((loader) => {
          loader.use = loader.use.map((item) => {
            if (item.options.modules) {
              if (process.env.NODE_ENV === "production") {
                item.options.modules.localIdentName = "[hash:base64:5]";
              }
            }
            return item;
          });
          return loader;
        });
      }
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      appName: process.env.APP_NAME,
      apiBase: process.env.API_URL,
    },
  },
});
