/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: "23.75em" /* 380px */,
      sm: "30em" /* 480px */,
      md: "37.5em" /* 600px */,
      lg: "56.25em" /* 900px */,
      xl: "75em" /* 1200px */,
      "2xl": "87.5em" /* 1400px */,
      big: "100em" /* 1600px */,
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      transitionTimingFunction: {
        bump: "cubic-bezier(0.7, -0.5, 0.5, 1.4)",
      },
    },
  },
  plugins: [],
};
