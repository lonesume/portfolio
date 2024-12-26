import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn1: "fadeIn 0.5s ease-in-out",
        fadeIn2: "fadeIn 4s ease-in-out",
        fadeIn3: "fadeIn 7s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
