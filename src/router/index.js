import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import VueDetail from '@/components/page/vueDetail'
import VueOne from '@/components/page/myDetail/first'
import VueTwo from '@/components/page/myDetail/two'
import VueThree from '@/components/page/myDetail/three'
import VueFour from '@/components/page/myDetail/four'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/detail',
      name: 'detail',
      component: VueDetail,
      children: [
        {
          path:'/detail/first',
          component: VueOne
        },
        {
          path:'/detail/two',
          component: VueTwo
        },
        {
          path:'/detail/three',
          component: VueThree
        },
        {
          path:'/detail/four',
          component: VueFour
        }
      ]
    }
  ]
})
