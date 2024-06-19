/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mano: ["Manrope", "sans-serif"],
    },
    screens: {
      sm: "920px",
      // => @media (min-width: 640px) { ... }

      md: "1400px",
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
