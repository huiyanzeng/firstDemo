
// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'
import VueResource from 'vue-resource'
// 导入 pages 下的 Home.vue
import Home from './pages/Home'

import Detail from './pages/Detail'
// 导入 vue-router，并使用
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(VueResource)

// 定义路由配置
const routes = [
  {
    path: "*",
    redirect: '/firstVue' //重定向
  },
  {
    path: '/firstVue',
    component: Home
  },
  {
    path: '/firstVue/detail',
    component: Detail
  }
]

// 创建路由实例
const router = new VueRouter({
  mode: 'history',
  routes
})

// 创建 Vue 实例
let vm = new Vue({
  el: '#app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  router,
  watch: {
    // 监视路由，参数为要目标路由和当前页面的路由，设定动画效果从那边出现
    '$route' (to, from) {
      const toDepth = to.path.substring(0, to.path.length - 3).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 3).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
})
Vue.use({
  vm
})
