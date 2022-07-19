import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false // 禁用 eslint 缓存
    }),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
  // server: {
  //   proxy: {
  //     // 选项写法
  //     '/admin': {
  //       target: 'https://shop.fed.lagounews.com/api',
  //       // 兼容基于名字的虚拟主机
  //       // a.com localhost:xxx
  //       // b.com loaclhost:xxx
  //       // http 请求头部的 origin 字段
  //       // 我们在开发模式：默认的origin是真实的origin:localhost:3000
  //       // changeOrigin:true,代理服务会把origin修改为目标地址http://jsonplaceholder.typicode.com
  //       changeOrigin: true,
  //       // 路径重写
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
