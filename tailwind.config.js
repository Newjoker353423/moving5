module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2C56',
        accent: '#D4AF37',
        textColor: '#333333',
        lightBg: '#F8F8F8',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Noto Kufi Arabic', 'serif'],
        body: ['Source Sans Pro', 'Noto Kufi Arabic', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}; 