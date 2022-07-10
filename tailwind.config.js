/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0070F3",
        'secondary': "#00DFD8",
        'nav-links-unselected': "#888888",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      scale: {
        85: '0.85',
      }
    },
  },
  plugins: [],
}