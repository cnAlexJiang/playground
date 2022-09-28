import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.bpmn'],
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
  ],
})
