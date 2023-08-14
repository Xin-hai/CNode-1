import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/views/Article.vue";
import Listing from "@/views/Listing.vue";
import UserInfo from "@/views/UserInfo.vue";
import Accidence from "@/components/Accidence.vue";
import API from "@/components/API.vue";
import CnodeAbout from "@/components/CnodeAbout.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    name: 'root',
    path: '/',
    components: {
      main: Listing
    }
  },
  {
    name: 'accidence',
    path: '/accidence',
    components: {
      main: Accidence
    }
  },
  {
    name: 'api',
    path: '/api',
    components: {
      main: API
    }
  },
  {
    name: 'register',
    path: '/register',
    components: {
      main: Register
    }
  },
  {
    name: 'login',
    path: '/login',
    components: {
      main: Login
    }
  },
  {
    name: 'cnode',
    path: '/cnode',
    components: {
      main: CnodeAbout
    }
  },
  {
    name: 'post_content',
    path: '/topic/:id',
    components: {
      main: Article
    }
  },
  {
    name: 'userinfo',
    path: '/userinfo/:name',
    components: {
      main: UserInfo
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
