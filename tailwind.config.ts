import type { Config } from 'tailwindcss';
import tailwind_anim from 'tailwindcss-animated';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Vazir: 'Vazir',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
        },
      },
      colors: {
        border: 'var(--color-border)',
        base: 'var(--color-base)',
        low: 'var(--color-low)',
        card: 'var(--color-card)',
        bg: 'var(--color-bg)',
        hover_low: 'var(--color-hover-low)',
        bg_low: 'var(--color-bg-low)',
        bg_hover_low: 'var(--color-bg_hover-low)',
        red_base: 'var(--color-red-base)',
        red: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
    },
  },
  plugins: [tailwind_anim],
} satisfies Config;
