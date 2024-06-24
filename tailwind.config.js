/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        tomato: '#ff6347',
      },
      
      colors: {
        customBlue: '#49557e',
      },
      padding: {
        '20px': '20px',
        '8vw': '8vw',
      },
      gridTemplateColumns: {
        'custom-columns': '2fr 1fr 1fr',
      },
      backgroundImage: {
        'header-img': "url('../public/header_img.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      zIndex: {
        '1': '1',
      },
      width: {
        '7.5vw': '7.5vw',
      },
      width: {
        'max-23vw-330px': 'max(23vw, 330px)',
      },
      minWidth: {
        '80px': '80px',
      },
      transitionDuration: {
        '200': '200ms',
      },
      colors: {
        tomato: '#ff6347', // Add custom color
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      spacing: {
        '6': '25px', // Add custom spacing for 25px
        '7.5': '30px', // Add custom spacing for 30px
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      })
    },
  ],}

