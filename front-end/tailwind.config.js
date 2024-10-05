/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#facc15",
        "secondary": "#1f2937",
      },
      screens: {
        '1xl': '1336px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-primeui'),
  ],
}

