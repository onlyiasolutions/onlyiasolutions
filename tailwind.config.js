/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary:  "#8b5cf6", // violeta
        secondary:"#ec4899", // rosa
      },
    },
  },
  plugins: [],
};