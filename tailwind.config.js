/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        sparkle: 'sparkle 1s forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        sparkle: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};