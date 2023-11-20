import SvgIcon from './SvgIcon/index.vue';

import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon };

export default {
    install(app: App) {
        //注册项目全都的全局组件
        Object.keys(components).forEach((key: string) => {
            //注册为全局组件
            app.component(key, components[key]);
        })
    }
}