import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
