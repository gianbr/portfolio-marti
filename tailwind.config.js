/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromLeft: {
          '0%': {
            transform: 'translate(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
        slideFromRight: {
          '0%': {
            transform: 'translate(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
        slideFromLeftExit: {
          '0%': {
            transform: 'translate(0)'
          },
          '100%': {
            transform: 'translate(-100%)'
          },
        },
        slideFromRightExit: {
          '0%': {
            transform: 'translate(0)'
          },
          '100%': {
            transform: 'translate(100%)'
          },
        }
      },
      animation: {
        slideFromLeft: 'slideFromLeft 1.5s ease-out',
        slideFromRight: 'slideFromRight 1.5s ease-out',
        slideFromLeftExit: 'slideFromLeftExit 1.5s ease-out',
        slideFromRightExit: 'slideFromRightExit 1.5s ease-out',

      },
    },  
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  }

