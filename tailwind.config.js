/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          light: '#F8F7FD',
          semilight: '#E8E7F8',
          DEFAULT: '#7065EE',
          dark: '#3A355D'
        }
      }
    },
  },
  plugins: [],
}
