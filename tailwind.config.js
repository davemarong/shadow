/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2c2c2c",
        darkLight: "#3f3f3f",
      },
    },
  },
  plugins: [],
};
