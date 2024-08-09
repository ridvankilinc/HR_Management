/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#252525",
        gray: {
          100: "#ABABAB",
          600: "#4D4D4D",
        },
      },
    },
  },
  plugins: [],
};
