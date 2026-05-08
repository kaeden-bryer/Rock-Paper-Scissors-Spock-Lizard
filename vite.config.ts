import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/24g-rock-paper-scissors/',
  plugins: [vue()],
})
