// tailwind.config.js

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Add custom colors
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        // Add custom fonts
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        // Add custom breakpoints
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
