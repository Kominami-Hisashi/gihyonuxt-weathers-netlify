// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      WeatherInfoUrl: "https://api.openweathermap.org/data/2.5/weather",
      weathermapAppid: ""
    }
  }
})
