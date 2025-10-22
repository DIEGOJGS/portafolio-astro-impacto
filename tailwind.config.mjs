/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
    theme: {
    extend: {
        // Añadimos 'Inter' como fuente principal
        fontFamily: {
        sans: ['Inter', 'sans-serif'],
        },
    },
    },
  plugins: [],
}