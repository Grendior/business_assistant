import { RouteRecordRaw } from 'vue-router';

import { routerOutlet } from '@/utils/routerOutlet';

import { loginRoute } from './login/login.route';

export const startRoute: RouteRecordRaw = {
  path: 'start',
  name: 'start',
  redirect: loginRoute,
  component: routerOutlet,
  children: [loginRoute]
};
