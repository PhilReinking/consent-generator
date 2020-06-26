// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      padding: '1rem',
      center: true,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
