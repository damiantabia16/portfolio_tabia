/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Titillium Web', 'sans-serif'],
        'title': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}