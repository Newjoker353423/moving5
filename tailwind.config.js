/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{md,mdx}',
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            lineHeight: '1.75',
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}; 