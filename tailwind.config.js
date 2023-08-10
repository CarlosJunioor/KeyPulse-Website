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
          primary: '#070707',
          secondary: '#101010',
        },
        orange:{
          primary: '#FD690F',
          light: '#FF6B00',
        }
      }
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },

}
