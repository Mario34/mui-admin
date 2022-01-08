import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '/@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '/@r',
        replacement: path.resolve(__dirname, './'),
      },
    ],
  },
  plugins: [reactRefresh()],
})
