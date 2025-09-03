import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier/flat'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

import prettierConfig from './prettier.config.js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default antfu(
  {
    formatters: {
      css: false,
      markdown: false,
      prettierConfig
    },
    ignores: ['README.md'],
    react: true,
    stylistic: false
  },
  ...compat.config({
    extends: ['plugin:@next/next/recommended']
  }),
  prettierPlugin,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'import/order': 'off',
      'prettier/prettier': 'warn',
      ...perfectionist.configs['recommended-natural'].rules,
      'antfu/no-top-level-await': 'off',
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'perfectionist/sort-objects': 'off',
      'react-refresh/only-export-components': 'off',
      'react/prefer-destructuring-assignment': 'off',
      'test/padding-around-all': 'error',
      'test/prefer-lowercase-title': 'off'
    }
  },
  prettier
)
