/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  xClass: "class",
  oClass: "class",
  theme: {
    extend: {
      boxShadow: {
        "primary-shadow": `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
      },
      colors: {
        "c-pink": `#F62682`,
        "light-black": `#A9A9A9`,
      },
      keyframes: {
        fullSpin: {
          "100%": {
            transform: `rotate(-360deg)`,
          },
        },
      },
      animation: {
        fullSpin: `fullSpin 3s linear infinite`,
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
