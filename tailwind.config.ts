import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FA45B",
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBlack: "#7e7e7e",
        icon: "#E8F0F5"
      },
      fontFamily: {
        me_quran: ['var(--font-meQuran)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
