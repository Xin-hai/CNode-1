import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/views/Article.vue";
import Listing from "@/views/Listing.vue";
import UserInfo from "@/views/UserInfo.vue";
import Accidence from "@/components/Accidence.vue";
import API from "@/components/API.vue";

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
