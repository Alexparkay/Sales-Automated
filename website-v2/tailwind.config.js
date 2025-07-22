/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-lime': '#D3FF00',
        'cod-gray': '#1E1E1E',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': {
          50: '#F7F7F7', // Light gray for backgrounds
          200: '#E5E5E5', // Light borders
          600: '#4B5563', // Secondary text
          800: '#1F2937', // Primary text
          900: '#111827'  // Dark section backgrounds
        },
        'accent': '#D3FF00',
        'accent-dark': '#A8D80D',
        'dark-bg': '#1E1E1E',
        'dark-text': '#FFFFFF',
        'dark-text-secondary': '#B0B0B0',
        'dark-border': '#404040',
        'dark-card': '#2C2C2C',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['0.9rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.8rem', { lineHeight: '1.4', fontWeight: '300' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0px 4px 10px rgba(0, 0, 0, 0.05)',
        'button': '0px 2px 5px rgba(211, 255, 0, 0.4)',
      },
      spacing: {
        '2xs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      maxWidth: {
        '1200': '1200px',
      }
    },
  },
  plugins: [],
} 