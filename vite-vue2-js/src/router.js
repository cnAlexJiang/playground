import VueRouter from 'vue-router'
import Vue from 'vue'
 
import test from './components/HelloWorld.vue';
import MutationObserver  from './components/MutationObserver.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/', component: test },
  { path: '/test', component: test },
  { path: '/observer', component: MutationObserver },
]

export const router = new VueRouter({
  routes,
})
