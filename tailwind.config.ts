import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  darkMode: "class",
  content: ["./components/**/*.{vue,js}", "./content/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(50% 50% at 50% 50%,#38bdf8 0,rgba(0,220,130,0) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
