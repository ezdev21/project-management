/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0091d5'//'#f5b654'
        //'secondary':'#00a9a8'
      },
      backgroundColors:{
          'primary':'#0091d5'//'#f5b654',//'#00a9a8',
          //'secondary':'#00a9a8',
      },
    },
  },
  plugins: [],
}
