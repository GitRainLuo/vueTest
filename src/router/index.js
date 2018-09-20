import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from  '@/components/form/Form'
import Props from  '@/components/props/Props'
import Slot from  '@/components/slot/slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/props',
      name:'Props',
      component:Props,
      meta:{
        keepAlive:false
      }
    },
    {
      path:'/form',
      name:'Form',
      component:Form,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/slot',
      name:'Slot',
      component:Slot
    }
  ]
})
