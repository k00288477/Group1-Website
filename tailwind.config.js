/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            accentBlue: '#0047ff',
            hardBlue: '#0032b2',
        },
    },
  },
  plugins: [],
}


