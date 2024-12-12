import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  ssr: {
    external: [
      'react',
      'react-dom'
    ],
  },
  plugins: [
    devServer({
      entry: 'src/index.tsx', // The file path of your application.
    }),
  ],
})