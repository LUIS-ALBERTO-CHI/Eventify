import { createRouter, createWebHistory } from 'vue-router'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import HomePage from '@/views/HomeView.vue'
import LoginPage from '@/views/LoginView.vue'
import RegisterPage from '@/views/RegisterView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
