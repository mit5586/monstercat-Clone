/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px'
    },
    extend: {
      fontFamily: {
        'Monument': ['Monument Extended', 'sans-serif']
      }
    },
  },
  plugins: [],
}
