import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcfb",
          100: "#d5f7f4",
          200: "#aeefeb",
          300: "#7ae2dc",
          400: "#2bbcb3",
          500: "#22a69e",
          600: "#1d8882",
          700: "#1c6d6a",
          800: "#1b5755",
          900: "#1b4947",
          950: "#0a2c2b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
