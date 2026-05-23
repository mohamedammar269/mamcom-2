/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          dark: '#E55E00',
          light: '#FFF3E8',
        },
        blue: {
          DEFAULT: '#1A6FD4',
          dark: '#155BB0',
          light: '#E8F2FD',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-lg': '0 12px 48px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
