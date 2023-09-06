import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template:{
        // 添加以下内容
        // compilerOptions:{
        //   isCustomElement: tag => tag.startsWith('Common') //配置isCustomElement是为了支持原生自定义元素
        // }
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    DefineOptions()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$injectedColor: orange;` // 注册全局变量$injectedColor
        // additionalData: '@import "@/style.scss";' // 引入全局scss  不加好像也可以用
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname,'src/index.js'),
      name: 'CommonTable',
      fileName: (format)=> `common-table.${format}.js` // 默认 formats 是 ['es', 'umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖 some-externally-required-library
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
