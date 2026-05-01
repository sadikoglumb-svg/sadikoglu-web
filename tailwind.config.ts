import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2F4E",
          light: "#243f66",
          dark: "#122038",
        },
        dark: {
          DEFAULT: "#0D1B2A",
          mid:    "#152233",
          border: "#1E3A5F",
        },
        gold: {
          DEFAULT: "#C9A847",
          light: "#E8D48B",
          dark: "#a88830",
        },
        offwhite: "#F5F0E8",
        muted: "#8A9BB0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
