const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.blue[500],
      black: colors.black,
      white: colors.white
    },
    textColor: {
      'primary': colors.blue[500],
      'black': colors.black,
      'white': colors.white,
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus','visited', 'active'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
