import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import VueCookie from 'cookie-in-vue'
import vueHeadful from 'vue-headful'
import * as VueGoogleMaps from 'vue2-google-maps'

// router
import Home from '@/components/Home'
import Category from '@/components/Category'
import City from '@/components/City'
import Conference from '@/components/Conference'
import ConferenceEdit from '@/components/ConferenceEdit'
import Country from '@/components/Country'
import Submit from '@/components/Submit'
import About from '@/components/About'
import Unapproved from '@/components/Unapproved'
import Cfp from '@/components/Cfp'
import VueSession from 'vue-session'

// use
Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueCookie)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqZUt0HuQwFtO1P8HN0wsZJohNaiifd4g'
  }
})
Vue.use(VueSession)

//  component
Vue.component('vue-headful', vueHeadful)
Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)
Vue.component('google-cluster', VueGoogleMaps.Cluster)

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
      path: '/c/:slug',
      name: 'Conference',
      component: Conference
    },
    {
      path: '/c/:slug/edit',
      name: 'ConferenceEdit',
      component: ConferenceEdit
    },
    {
      path: '/conference/:id',
      name: 'ConferenceId',
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
    },
    {
      path: '/city/:city',
      name: 'City',
      component: City
    },
    {
      path: '/call-for-paper/open',
      name: 'Cfp',
      component: Cfp
    }
  ]
})
