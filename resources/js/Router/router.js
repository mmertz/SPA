import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/auth/login.vue'
import Logout from '../components/auth/logout.vue'
import Signup from '../components/auth/signup.vue'
import Forum from '../components/forum/forum.vue'

const routes = [
    { path: '/logout', component: Logout },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name: 'forum' }
  ]


const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
  })


export default router