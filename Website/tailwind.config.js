/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gray: {
          1600 : '#EFEFEF'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
