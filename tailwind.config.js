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
        'clash-extralight': ['ClashDisplay-Extralight', 'sans-serif'],
        'clash-light': ['ClashDisplay-Light', 'sans-serif'],
        'clash-regular': ['ClashDisplay-Regular', 'sans-serif'],
        'clash-medium': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
        'clash-variable': ['ClashDisplay-Variable', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-thin': ['Poppins', 'sans-serif'],
        'poppins-extralight': ['Poppins', 'sans-serif'],
        'poppins-light': ['Poppins', 'sans-serif'],
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-medium': ['Poppins', 'sans-serif'],
        'poppins-semibold': ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif'],
        'poppins-extrabold': ['Poppins', 'sans-serif'],
        'poppins-black': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
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