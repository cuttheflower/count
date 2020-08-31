import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from '../components/Counter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/counter'
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  }
]

const router = new VueRouter({
  routes
})

export default router
