/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-colour': '#cbd5e1',
        'nav-colour': '#cbd5e1',
        'colour-pale': '#f1f5f9',
        'colour-light': '#e2e8f0',
        'colour-med': '#94a3b8',
        'colour-dark': '#1e293b',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'alt-text': '#ffffff',
        'hover-text': '#6b7280',
        'active-text': '#6b7280',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'hyperlink-blue': '#2563eb',
        'secleted': '#2563eb',
        'non-selected': '#99DF8A',
      },
      gridTemplateRows: {
        'reg': 'auto 1fr',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'special': 'auto 1fr 0.5fr'
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
        'even': '1fr 1fr 1fr',
        'one': '1fr'
      },
      width: {
        id: '12ch;'
      },
      fontSize: {
        'ss': '0.5rem'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}