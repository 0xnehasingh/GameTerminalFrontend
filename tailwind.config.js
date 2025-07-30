/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#66FF00',
        'neon-cyan': '#80FFFF',
        'dark-gray': '#1A1A1A',
        'darker-gray': '#0F0F0F',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #66FF00, 0 0 10px #66FF00, 0 0 15px #66FF00' },
          '100%': { boxShadow: '0 0 10px #66FF00, 0 0 20px #66FF00, 0 0 30px #66FF00' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 