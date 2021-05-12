const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js'),
    { content: ["./public/**/*.html", "./src/**/*.vue"] }
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: 
      {
      'litepie-primary': colors.lightBlue, // color system for light mode
      'litepie-secondary': colors.coolGray, // color system for dark mode
      "mgb-blue": {
          light: "#00a1bd",
          DEFAULT: "#009db8",
          dark: "#009db8"
        }
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: []
};
