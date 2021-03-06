import { RouteRecordRaw } from 'vue-router';

import { routerOutlet } from '@/utils/routerOutlet';

import { homeRoute } from './home/home.route';

export const publicRoute: RouteRecordRaw = {
  path: '/',
  name: 'public',
  redirect: homeRoute,
  component: routerOutlet,
  children: [homeRoute]
};
