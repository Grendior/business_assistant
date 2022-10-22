import { IonRouterOutlet } from '@ionic/vue';
import { defineComponent, h, resolveComponent } from 'vue';

/**
 * Pusty komponent do routingu
 */
export const routerOutlet = defineComponent({
  components: {
    IonRouterOutlet
  },
  render() {
    return h(resolveComponent('ion-router-outlet'));
  }
});
