// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    microcmsApiKey: process.env.MICROCMS_API_KEY,
    public: {
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Narazaki Shoten | Healthy & Fast Gyu-don in Amsterdam",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Experience the authentic Dashi-based Gyu-don. Healthy, fast, and delicious.",
        },
        { property: "og:title", content: "Narazaki Shoten Amsterdam" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/transitions.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/image"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  nitro: {
    preset: "aws-lambda",
    prerender: {
      crawlLinks: false, // リンクの自動クロールをオフにする
      failOnError: false, // プリレンダリングでエラーが出てもビルドを続行する
      ignore: ['/'], // Lambda環境以外でクラッシュするのを防ぐ
    },
  },
  devtools: { enabled: true },
});
