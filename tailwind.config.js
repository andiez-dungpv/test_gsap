/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: colors.red,
        yellow: colors.amber,
        purple: colors.violet,
      }
    }
  },
  prefix: '',
  plugins: []
}