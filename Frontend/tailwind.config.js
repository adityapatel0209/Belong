/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["lemonade", "black", "luxury"],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}
