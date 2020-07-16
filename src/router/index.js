import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";
import Blogs from "../views/blog/Blogs";
import Corpuses from "../views/corpus/Corpuses";
import Collections from "../views/collection/Collections";
import Fans from "../views/fans/Fans";
import Help from "../views/help/Help";
import Setting from "../views/setting/Setting";
import Subscriptions from "../views/subscription/Subscriptions";

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
