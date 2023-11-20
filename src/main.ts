import { createApp } from 'vue'
import App from "@/App.vue"

//引入element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
//element中文配置
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 全局样式
import "@/styles/index.scss"

//获取应用实力对象
const app = createApp(App)

//安装element插件,并配置中文
app.use(ElementPlus, {
    locale: zhCn,
})

// svg需要的配置
import 'virtual:svg-icons-register'

// 全局注册自定义组件
import gloablComponent from './components';
app.use(gloablComponent);


//将应用挂载到挂载点上
// createApp(App).mount('#app')
app.mount("#app")

