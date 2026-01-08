/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C3AED',
          soft: '#A855F7',
          strong: '#4C1D95'
        },
        surface: {
          light: '#F9FAFB',
          dark: '#020617'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        'soft-lg': '0 24px 60px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
};


