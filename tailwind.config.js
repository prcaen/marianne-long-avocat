/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE8F8A',
        light: '#FBF0E9',
        dark: '#805050',
        accent: '#D4C2A1',
        neutral: '#AD9C92',
      },
    },
  },
  plugins: [],
}

