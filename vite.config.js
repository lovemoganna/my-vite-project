import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my-vite-mvp/', // 替换为你的仓库名
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
