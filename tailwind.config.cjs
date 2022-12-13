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
        'Container-DeepBlue': '#0A2D57',
        'selected-gradient': 'linear-gradient(269.96deg, rgba(57, 137, 196, 0) 9.3%, rgba(44, 128, 189, 0.79) 52.03%, rgba(33, 120, 183, 0) 90.7%)'
      }
    },
  },
  plugins: [],
}
