import { createRouter, createWebHistory } from 'vue-router'
import SucessoTre from '../SucessoTre.vue'

const routes = [
  {
    path: '/contato',
    name: 'SucessoTre',
    component: SucessoTre
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
