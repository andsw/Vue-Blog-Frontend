import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/views/home/Home");
const Blogs = () => import("@/views/blog/Blogs");
const Corpuses = () => import("@/views/corpus/Corpuses");
const Collections = () => import("@/views/collection/Collections");
const Fans = () => import("@/views/fans/Fans");
const Help = () => import("@/views/help/Help");
const Setting = () => import("@/views/setting/Setting");
const Subscriptions = () => import("@/views/subscription/Subscriptions");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/blogs',
    component: Blogs
  },
  {
    path: '/corpuses',
    component: Corpuses
  },
  {
    path: '/collections',
    component: Collections
  },
  {
    path: '/subscriptions',
    component: Subscriptions
  },
  {
    path: '/fans',
    component: Fans
  },
  {
    path: '/help',
    component: Help
  },
  {
    path: '/setting',
    component: Setting
  }
];

const router = new VueRouter({
  routes
});

export default router
