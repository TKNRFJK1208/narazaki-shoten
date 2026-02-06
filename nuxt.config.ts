// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Required for pre-rendering during generate
  app: {
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
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', crossorigin: '' }
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  devtools: { enabled: true },
});
