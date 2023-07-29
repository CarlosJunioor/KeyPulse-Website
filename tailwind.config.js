/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0D0D0D',
          secondary: '#252525',
        },
        orange:{
          primary: '#F26241',
          light: '#F2D43D',
        }
      }
      
    },
  },
  plugins: [],
}
