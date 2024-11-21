module.exports = {
  darkMode: 'class',
  content: [
    './assets/**/*.{vue,js,css}',
    './src/adapters/primary/nuxt/components/**/*.{vue,js}',
    './src/adapters/primary/nuxt/layouts/**/*.vue',
    './src/adapters/primary/nuxt/pages/**/*.vue',
    './src/adapters/primary/nuxt/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        background: '#f2f2f2',
        main: '#E5017D',
        tomato1: '#fffcfc',
        tomato2: '#fff8f7',
        tomato3: '#fff0ee',
        tomato4: '#ffe6e2',
        tomato5: '#fdd8d3',
        tomato6: '#fac7be',
        tomato7: '#f3b0a2',
        tomato8: '#ea9280',
        tomato9: '#e54d2e',
        tomato10: '#db4324',
        tomato11: '#ca3214',
        tomato12: '#341711',

        grass1: '#fbfefb',
        grass2: '#f3fcf3',
        grass3: '#ebf9eb',
        grass4: '#dff3df',
        grass5: '#ceebcf',
        grass6: '#b7dfba',
        grass7: '#97cf9c',
        grass8: '#65ba75',
        grass9: '#46a758',
        grass10: '#3d9a50',
        grass11: '#297c3b',
        grass12: '#1b311e',
      },
    },
  },
};
