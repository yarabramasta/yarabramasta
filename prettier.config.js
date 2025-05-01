//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
