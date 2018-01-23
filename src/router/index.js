import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import VueCookie from 'cookie-in-vue'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Conference from '@/components/Conference'
import Country from '@/components/Country'
import Submit from '@/components/Submit'
import About from '@/components/About'
import Unapproved from '@/components/Unapproved'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueCookie)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category
    },
    {
      path: '/conference/:id',
      name: 'Conference',
      component: Conference
    },
    {
      path: '/submit/:category',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/unapproved',
      name: 'Unapproved',
      component: Unapproved
    },
    {
      path: '/country/:country',
      name: 'Country',
      component: Country
    }
  ]
})
