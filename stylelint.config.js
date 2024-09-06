module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-tailwindcss',
    'stylelint-config-html'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html' // Utilisez une syntaxe compatible avec Vue/Pug
    }
  ],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['/^app-/'] // Ignore les types spécifiques si nécessaire
      }
    ]
  }
}
