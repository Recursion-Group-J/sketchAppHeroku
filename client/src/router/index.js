import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sketchpage from '../views/Sketchpage.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/sketch',
    name: 'Sketchpage',
    component: Sketchpage
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
