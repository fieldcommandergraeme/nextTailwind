const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `rgba(var(${cssVariable}), ${opacityValue})` : `rgb(var(${cssVariable}))`
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'esther':       withOpacity('--color-esther'),
        'maximus':      withOpacity('--color-maximus'),
        'linx':         withOpacity('--color-linx'),
    },
},
  plugins: [],
}
