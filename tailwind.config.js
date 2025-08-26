/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131219', // Example primary color
        secondary: '#9333EA', // Example secondary color
        accent: '#F59E0B', // Example accent color
        neutral: '#3D4451', // Example neutral color
        'base-100': '#FFFFFF', // Example base color
      },
    },
  },
  plugins: [],
}