import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})