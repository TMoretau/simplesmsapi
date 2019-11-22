import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/Pricing.vue'),
  },
  {
    path: '/get-started',
    name: 'getStarted',
    component: () => import('../views/GetStarted.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
