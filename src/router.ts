import { createRouter, createWebHistory } from '@ionic/vue-router';
import { Router } from 'vue-router';

import { routerOutlet } from './utils/routerOutlet';
import { publicRoute } from './views/publicRoute/public.route';
import { startRoute } from './views/startRoute/start.route';

/**
 * Konfiguracja routingu
 *
 * @export
 * @return {Router}
 */
export function setupRouter(): Router {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        redirect: publicRoute,
        component: routerOutlet,
        children: [publicRoute, startRoute]
      }
    ]
  });
  return router;
}

export const router = setupRouter();
