module.exports = {
  darkMode: 'class',
  content: [
    './assets/**/*.{vue,js,css}',
    './src/adapters/primary/nuxt/components/**/*.{vue,js}',
    './src/adapters/primary/nuxt/layouts/**/*.vue',
    './src/adapters/primary/nuxt/pages/**/*.vue',
    './src/adapters/primary/nuxt/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      }
      addUtilities(newUtilities)
    }
  ],
  variants: {
    extend: {}
  },
  theme: {
    extend: {
      colors: {
        background: '#f2f2f2',
        main: '#E5017D'
      }
    }
  }
}
