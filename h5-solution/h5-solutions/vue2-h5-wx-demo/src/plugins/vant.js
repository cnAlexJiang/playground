// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Icon, Swipe, SwipeItem } from 'vant'
import Foward from '../components/base/Foward.vue'
import CoolCard from '../components/base/CoolCard.vue'
import BaseCard from '../components/base/BaseCard.vue'
import BaseDivider from '../components/base/BaseDivider.vue'
import BaseLine from '../components/base/BaseLine.vue'
import BaseInput from '../components/base/BaseInput.vue'
import SearchArea from '../components/SearchArea.vue'
import ActCard from '../components/act/ActCard.vue'
import VueAudio from 'vue-audio-better'
import VueCoreVideoPlayer from 'vue-core-video-player'
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.component('BaseDivider', BaseDivider)
Vue.component('BaseLine', BaseLine)
Vue.component('BaseInput', BaseInput)
Vue.component('SearchArea', SearchArea)
Vue.component('Foward', Foward)
Vue.component('CoolCard', CoolCard)
Vue.component('BaseCard', BaseCard)
Vue.component('ActCard', ActCard)
Vue.use(VueAudio)
Vue.use(VueCoreVideoPlayer)
