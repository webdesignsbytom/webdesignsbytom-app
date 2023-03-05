/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-colour': '#4aad37',
        'colour-pale': '#99DF8A',
        'colour-light': '#6DC85A',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'hover-text': '#6b7280',
        'active-text': '#6b7280',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'hyperlink-blue': '#2563eb',
      },
      gridTemplateRows: {
        'reg': 'auto 1fr',
        'even': '1fr 1fr 1fr'
      }
    },
  },
  plugins: [],
}