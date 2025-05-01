import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from '@tanstack/react-start/config'
import { vercel } from 'unenv'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  server: { preset: 'node-server', unenv: vercel },
  tsr: { appDirectory: 'src' },
  vite: {
    plugins: [
      viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
      tailwindcss()
    ],
    build: {
      rollupOptions: {
        external: ['@tanstack/react-start/server']
      }
    }
  },
  // https://react.dev/learn/react-compiler
  react: {
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]]
    }
  }
})

export default config
