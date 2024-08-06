/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#262fdf',
        'green-color': '#01ee91'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-sarif'],
        'body': ['Inter', 'sans-sarif']
      }
    },
  },
  plugins: [],
}

