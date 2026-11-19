/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F8F7F4',
          light: '#FDFCF9',
          card: '#FFFFFF',
          dark: '#EFECE4',
        },
        ink: {
          DEFAULT: '#141513',
          muted: '#4A4C46',
          faint: '#7A7D73',
        },
        line: {
          DEFAULT: '#D8D5CB',
          subtle: '#EAE7DD',
          dark: '#3A3D36',
        },
        graphite: '#121311',
        brand: {
          50: '#FAF6F0',
          100: '#F2E9DE',
          200: '#E4D1BF',
          300: '#D1B49B',
          400: '#B89274',
          500: '#9E6B47', // warm architectural terracotta / brass
          600: '#875635',
          700: '#6E4226',
          800: '#55311B',
          900: '#3D2211',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
