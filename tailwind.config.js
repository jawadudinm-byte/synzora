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
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          dark: '#0F172A',
          light: '#F8FAFC',
          card: '#FFFFFF',
          slate: '#94A3B8',
          border: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Georgia', 'Times New Roman', 'serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'mega': '0 20px 40px -15px rgba(7, 33, 58, 0.15), 0 0 20px -5px rgba(0, 0, 0, 0.08)',
        'pill-glow': '0 0 15px -3px rgba(37, 99, 235, 0.3)',
      }
    },
  },
  plugins: [],
}
