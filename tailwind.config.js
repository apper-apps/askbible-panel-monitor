/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Merriweather', 'serif'],
      },
      colors: {
        'dark-goldenrod': '#8B6914',
        'cool-gray': '#4A5568',
        'metallic-gold': '#D4AF37',
        'cream': '#FFF8E7',
        'light-parchment': '#FAF6F0',
        'success': '#527853',
        'warning': '#D97706',
        'error': '#DC2626',
      },
      animation: {
        'pulse-gentle': 'pulse 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};