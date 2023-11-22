import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../view/HomePage/index.vue'
const routes = [
    {
        path: '/home',
        // name:'home',
        component:HomePage
    },
    {
      path:'/',
      redirect:'/home'
    }
]
  
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router