/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pressSt': ['"Press Start 2P"',],
        'micro': ['"Micro 5"',],
      },
      margin: {
        '30': '30px',
      },
    },
    
  },
  plugins: [],
}

