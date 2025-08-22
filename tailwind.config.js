/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{js,css}"],
  theme: {
    extend: {
      colors: { primary: '#8b5cf6', secondary: '#ec4899' },
      borderRadius: {
        'none':'0px','sm':'4px', DEFAULT:'8px','md':'12px','lg':'16px',
        'xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'
      }
    }
  },
  plugins: []
}
