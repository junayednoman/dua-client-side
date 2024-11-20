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
        lightBlack: "#7e7e7e"
      },
    },
  },
  plugins: [],
} satisfies Config;
