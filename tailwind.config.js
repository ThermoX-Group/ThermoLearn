/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '6rem',
        },
      },
      height:{
        360:"360px"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['dark',"light"]
  }
}

