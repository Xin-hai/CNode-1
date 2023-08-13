import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/views/Article.vue";
import Listing from "@/views/Listing.vue";

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
    name: 'post_content',
    path: '/topic/:id',
    components: {
      main: Article
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
