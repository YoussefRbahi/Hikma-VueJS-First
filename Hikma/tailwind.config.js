/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hikma-primary': '#ef3637',
        'hikma-secondary': '#263a79'
      }
    }
  }
}
