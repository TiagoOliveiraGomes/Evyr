/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PrimaryBtn-200': '#84B6F4',
        'PrimaryBtn-500': '#2F6DBA',
        'Container-DeepBlue': '#0A2D57'
      }
    },
  },
  plugins: [],
}
