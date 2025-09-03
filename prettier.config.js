/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tailwindFunctions: ['cn', 'clsx', 'classNames', 'cva'],
  trailingComma: 'none'
}

export default config
