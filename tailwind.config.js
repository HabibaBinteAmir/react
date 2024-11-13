/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#FAE3B6',
        'hoverColor': '#FDBB57',
        'sealsColor': '#CFA485',
      },
      fontFamily: {
        'Poppins': ["Poppins"],
      },
      maxWidth: {
        'BannerContainer': '1270px',
      }
    },
  },
  plugins: [],
}

