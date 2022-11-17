import VueRouter from 'vue-router'
import Vue from 'vue'
 
import test from './components/nav.vue';
import MutationObserver  from './components/MutationObserver.vue'
import cssVariable from './components/cssVariable.vue'
import routerQuyery from './components/routerQuyery.vue'
import routerQuyeryChild from './components/routerQuyeryChild.vue'
import tagTemplate from './components/tagTemplate.vue'
import boxSizing from './components/boxSizing.vue'
import capture from './components/capture.vue'
import svgTest from './components/svgTest.vue'
import iframeView from './components/iframeView.vue'
import iframe1 from './components/iframe1.vue'
import CompA from './components/diff-key-test/CompA.vue'
import CompRender from './components/diff-key-test/CompRender.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: test },
  { path: '/test',name: 'test', component: test },
  { path: '/observer', name: 'observer',component: MutationObserver },
  { path: '/cssVariable', name: 'cssVariable',component: cssVariable },
  { path: '/routerQuyery', name: 'routerQuyery',component: routerQuyery, children:[
   { path: '/routerQuyeryChild', name: 'routerQuyeryChild',component: routerQuyeryChild },
  ] },
  { path: '/tagTemplate', name: 'tagTemplate',component: tagTemplate },
  { path: '/boxSizing', name: 'boxSizing',component: boxSizing },
  { path: '/capture', name: 'capture',component: capture },
  { path: '/svgTest', name: 'svgTest',component: capture },
  { path: '/iframeView', name: 'iframeView',component: iframeView },
  { path: '/iframe1', name: 'iframe1',component: iframe1 },
  { path: '/diff', name: 'diff',component: CompA },
  { path: '/render', name: 'render',component: CompRender },
]

export const router = new VueRouter({
  routes,
})
