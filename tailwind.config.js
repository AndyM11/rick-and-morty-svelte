// filepath: /d:/JavaScript/Practicas/rick-and-morty-svelte/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar modo oscuro
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}