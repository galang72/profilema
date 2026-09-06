/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        islamic: {
          darkest: '#011510',
          darker: '#021f18',
          dark: '#032c22',
          surface: '#053d30',
          border: 'rgba(16, 185, 129, 0.2)',
          accent: '#10b981',
          light: '#ecfdf5',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf9eb',
          200: '#faefcd',
          300: '#f6e2a3',
          400: '#f0ce66',
          500: '#d4af37', // Antique Gold
          600: '#b89222',
          700: '#947019',
          800: '#795819',
          900: '#664a19',
        },
        ivory: {
          50: '#fcfcf9',
          100: '#faf8f2',
          200: '#f4f0e4',
          300: '#eae4ce',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        luxury: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'islamic-pattern': "radial-gradient(#10b981 0.75px, transparent 0.75px), radial-gradient(#d4af37 0.75px, #021f18 0.75px)",
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.4)',
        'glow-gold': '0 0 35px -8px rgba(212, 175, 55, 0.45)',
        'card-3d': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.1) inset',
      }
    },
  },
  plugins: [],
}
