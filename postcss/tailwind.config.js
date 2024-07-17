/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        xs: { 'max': "319px" },
        // => @media (max-width: 319px) { ... }
      },
      fontFamily: {
        sans: ["iranyekan"],
      },
      colors: {
        // Primary colors :
        "primary-900": "#4A6DFF",

        // Secondary colors :
        "secondary-900": "#2A2D53",
        "secondary-800": "#3F4264",
        "secondary-700": "#555775",
        "secondary-600": "#6A6C87",
        "secondary-200": "#BFC0CB",
        "secondary-100": "#DFDFE580",

        // Other colors :
        warning: "#FF9900",
        danger: "#FF0000CC",
      },
      boxShadow: {
        xs: "0 4px 250px 0 #36385326",
      },
    },
  },
  plugins: [],
};
