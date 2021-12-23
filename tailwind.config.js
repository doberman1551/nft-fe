module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0F1624",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "#2c304d",
        gradientbase1:"#97EFE9"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
