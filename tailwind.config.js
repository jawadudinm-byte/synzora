/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        synzora: {
          navy: '#07213A',
          orange: '#FA782B',
          'orange-hover': '#e6671d',
          dark: '#0F172A',
          light: '#F8FAFC',
          card: '#FFFFFF',
          slate: '#94A3B8',
          border: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'mega': '0 20px 40px -15px rgba(7, 33, 58, 0.15), 0 0 20px -5px rgba(0, 0, 0, 0.08)',
        'pill-glow': '0 0 15px -3px rgba(250, 120, 43, 0.3)',
      }
    },
  },
  plugins: [],
}
