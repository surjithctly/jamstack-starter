/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...fontFamily.sans],
        stock: [fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
