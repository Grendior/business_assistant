import { RouteRecordRaw } from "vue-router";

export const homeRoute: RouteRecordRaw = {
  name: "home",
  path: "home",
  meta: { title: "Strona Główna" },
  component: () => import(/* webpackChunkName: "Home" */ "./Home.vue"),
};
