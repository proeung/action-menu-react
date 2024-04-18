/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '3px',
    },
    extend: {
      colors: {
        'base': '#1F2D46',
        'blue-100': '#3A63F9',
        'blue-700': '#2D4DC5',
        'blue-900': '#1F2D46',
        'gray-100': '#E5E9F1',
        'gray-300': '#C5CEDD',
        'gray-500': '#9BA7BC',
      }
    },
  },
  plugins: [],
}

