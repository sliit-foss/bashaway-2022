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
        'logo-container': "rgb(255 255 255 / 0.02)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      scale: {
        85: '0.85',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      opacity: {
        2: '0.02',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
