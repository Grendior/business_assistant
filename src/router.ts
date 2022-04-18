import { createRouter, createWebHistory } from "@ionic/vue-router";
import { Router } from "vue-router";

import { routerOutlet } from "./utils/routerOutlet";

/**
 * Konfiguracja routingu
 *
 * @export
 * @return {Router}
 */
export function setupRouter(): Router {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        // redirect: publicRoute,
        component: routerOutlet,
        // children: [publicRoute, startRoute, mainRoute]
      },
    ],
  });

  return router;
}

export const router = setupRouter();
