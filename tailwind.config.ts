import type { Config } from "tailwindcss";
import tailwind_anim from "tailwindcss-animated";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: "Yekan",
      },
      colors: {
        gray: {
          925: "#111827", // پس‌زمینه اصلی
          850: "#242a38", // برای کارت‌ها
          750: "#3a404c", // برای حاشیه‌ها
          110: "#f1f1f1",
          55: "#f9f9f9",
        },
        blue: {
          500: "#3b82f6", // آبی معمولی
          600: "#2563eb", // آبی تیره‌تر
        },
        red: {
          500: "#ef4444", // قرمز معمولی
          600: "#dc2626", // قرمز تیره‌تر
        },
        green: {
          500: "#22c55e", // سبز معمولی
          600: "#16a34a", // سبز تیره‌تر
        },
      },
    },
  },
  plugins: [tailwind_anim],
} satisfies Config;
