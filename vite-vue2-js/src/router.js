import VueRouter from 'vue-router'
import Vue from 'vue'
 
import test from './components/nav.vue';
import MutationObserver  from './components/MutationObserver.vue'
import cssVariable from './components/cssVariable.vue'
import routerQuyery from './components/routerQuyery.vue'
import routerQuyeryChild from './components/routerQuyeryChild.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: test },
  { path: '/test',name: 'test', component: test },
  { path: '/observer', name: 'observer',component: MutationObserver },
  { path: '/cssVariable', name: 'cssVariable',component: cssVariable },
  { path: '/routerQuyery', name: 'routerQuyery',component: routerQuyery, children:[
   { path: '/routerQuyeryChild', name: 'routerQuyeryChild',component: routerQuyeryChild },

  ] },
]

export const router = new VueRouter({
  routes,
})
