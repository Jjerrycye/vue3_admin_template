// vite.config.ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//引入svg插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    },
    css: {
        //scss全局变量配置
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/variable.scss";',
            },
        },
    },

})