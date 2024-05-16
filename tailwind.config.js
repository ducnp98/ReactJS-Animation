/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Format Script"],
        russoOne: ["Russo One"],
      },
    },
  },
  plugins: [],
});
