import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true
  },
  plugins: [
    react(),
    visualizer({
      open: false // 打包完成后自动打开浏览器，显示产物体积报告
    })
  ],
  server: {
    // 自动打开浏览器
    open: true
  },
  resolve: {
    // 配置别名
    alias: { '@': path.resolve(__dirname, './src') }
  },
  //打包路径变为相对路径,用liveserver打开,便于本地测试打包后的文件
  base: './'
})
