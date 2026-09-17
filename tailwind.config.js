/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carysa: {
          salmon: '#EFA79B',
          'salmon-dark': '#D98A7E',
          cream: '#FAF7F5',
          dark: '#2C2828',
          gray: '#736B69',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}