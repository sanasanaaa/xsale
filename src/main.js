import { createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '../src/router'
import store from './store'
import i18n from './lang'

import 'wow.js/css/libs/animate.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import './barlowfont.scss'


// const app = createApp(App)

import './index.scss'
import './expandElementCss.scss'

let Vue = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    Vue.component(key, component)
  }
Vue.use(ElementPlus).use(i18n).use(store).use(router).mount('#app')
