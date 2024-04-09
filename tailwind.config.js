/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary:'0f712a',

      },
      fontFamily:{
        roboto:['Roboto', ...defaultTheme.fontFamily.sans]
      
      }
    },
  },
  plugins: [],
}

