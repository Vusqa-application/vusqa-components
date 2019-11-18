import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '@views/test.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: test}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
