/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': 'var(--off-white)',
        'primary': 'var(--primary)',
        'darkblue': 'var(--darkblue)',
        'white': 'var(--white)',
      },
    },
  },
  plugins: [],
}