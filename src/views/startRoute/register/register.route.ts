import { RouteRecordRaw } from 'vue-router';

export const registerRoute: RouteRecordRaw = {
  name: 'register',
  path: 'register',
  meta: { title: 'Rejestracja' },
  component: () => import(/* webpackChunkName: "Register" */ './Register.vue')
};
