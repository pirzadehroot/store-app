import type { Config } from "tailwindcss";
import tailwind_anim from "tailwindcss-animated";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  theme: {
    extend: {
      fontFamily: {
        yekan: "Yekan",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
      colors: {
        gray: {
          925: "#111827",
          850: "#242a38",
          750: "#3a404c",
          110: "#f1f1f1",
          55: "#f9f9f9",
        },
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
        },
        red: {
          500: "#ef4444",
          600: "#dc2626",
        },
        green: {
          500: "#22c55e",
          600: "#16a34a",
        },
      },
    },
  },
  plugins: [tailwind_anim],
} satisfies Config;
