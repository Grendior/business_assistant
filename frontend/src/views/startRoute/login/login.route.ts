import { RouteRecordRaw } from 'vue-router';

export const loginRoute: RouteRecordRaw = {
  name: 'login',
  path: 'login',
  meta: { title: 'Logowanie' },
  component: () => import(/* webpackChunkName: "Login" */ './Login.vue')
};
