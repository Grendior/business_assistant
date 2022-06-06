<template>
  <ion-page>
    <ion-content>
      <ion-title size="large" mode="md" class="header">Business Assistant - home</ion-title>

      <ion-item lines="none" class="item-self-center-400">
        <ion-label class="ion-text-wrap text-align-center">
          <h1>Twoja Aplikacja do zarządzania firmą</h1>
        </ion-label>
      </ion-item>

      <ion-button :router-link="loginRoute" expand="block">Logowanie</ion-button>

      <ion-button :router-link="registerRoute" expand="block">Rejestracja</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonLabel, IonButton, IonItem, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

import { loginRoute } from '@/views/startRoute/login/login.route';
import { registerRoute } from '@/views/startRoute/register/register.route';

/**
 * Widok główny
 */
export default defineComponent({
  name: 'App',
  components: {
    IonPage,
    IonButton,
    IonItem,
    IonLabel,
    IonContent,
    IonTitle
  },
  setup() {
    return {
      loginRoute,
      registerRoute
    };
  }
});
</script>

<style scoped>
.item-self-center-400 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.text-align-center {
  text-align: center;
}
</style>
