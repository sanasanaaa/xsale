import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/view/HomePage/index.vue'
import About from '@/view/About/index.vue'
import Goods from '@/view/GoodsList/index.vue'
const routes = [
    
    {
      path:'/',
      redirect:'/home'
    },
    {
        path: '/home',
        // name:'home',
        component:HomePage
    },
    {
        path: '/goods',
        component:Goods
    },
    {
        path: '/about',
        // name:'home',
        component:About
    }
]
  
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router