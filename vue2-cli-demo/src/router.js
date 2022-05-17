import VueRouter from 'vue-router'
import Vue from 'vue'
import parent from './components/test-router/parent.vue'
import c1 from './components/test-router/child1.vue'
import c2 from './components/test-router/child2.vue'
import g1 from './components/test-router/grandson1.vue'
import g2 from './components/test-router/grandson2.vue'
import test from './components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: parent },
  {
    path: '/parent',
    component: parent,
    children: [
      { path: '/c1', name: 'c1', component: c1 },
      {
        path: '/c2',
        name: 'c2',
        component: c2,
        children: [
          { path: '/g1', name: 'g1', component: g1 },
          { path: '/g2', name: 'g2', component: g2 },
        ],
      },
    ],
  },
  { path: '/test', component: test },
]

export const router = new VueRouter({
  routes,
})
