import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)", "sans-serif"],
      },
      colors: {
        dark: "#0C0C0C",
        light: "#D7E2EA",
        accent: "#7C5CFF",
        "accent-2": "#4FE3C1",
      },
    },
  },
  plugins: [],
};
export default config;