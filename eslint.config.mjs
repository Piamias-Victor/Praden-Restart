// eslint.config.mjs

import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPug from 'eslint-plugin-pug'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import vueEslintParser from 'vue-eslint-parser'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.{js,ts,vue}'],
    ignores: [
      '**/node_modules/**',
      '**/*.d.ts',
      '**/.nuxt/**' // Ignore le dossier .nuxt
    ],
    languageOptions: {
      parser: vueEslintParser, // Assurez-vous que ce parser est utilisé pour les fichiers .vue
      parserOptions: {
        parser: typescriptEslintParser,
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        // Définir les variables globales ici
      }
    },
    plugins: {
      '@eslint/js': pluginJs,
      vue: pluginVue,
      pug: pluginPug,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: pluginPrettier
    },
    rules: {
      'no-console': 'warn',
      // 'no-unused-vars': ['warn', { args: 'none' }],
      // '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      'prettier/prettier': ['error'] // Intégrer Prettier avec ESLint
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser, // Confirmer que vue-eslint-parser est utilisé ici
      parserOptions: {
        parser: typescriptEslintParser
      }
    },
    plugins: {
      vue: pluginVue,
      pug: pluginPug,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: pluginPrettier
    },
    rules: {
      // 'vue/no-unused-vars': ['warn'],
      // '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      'prettier/prettier': ['warn']
    }
  },
  {
    files: ['**/*.pug'],
    languageOptions: {
      parserOptions: {
        parser: 'pug-eslint-parser' // Assurez-vous que pug-eslint-parser est installé
      }
    },
    plugins: {
      pug: pluginPug
    },
    rules: {
      'pug/no-mixed-html': 'error'
    }
  }
]
