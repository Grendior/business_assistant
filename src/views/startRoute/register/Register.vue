<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-title size="large" mode="md" class="header">Rejestracja</ion-title>
      </ion-toolbar>

      <ion-item class="item-padding">
        <ion-label for="email" position="floating">E-mail</ion-label>

        <ion-input name="email" type="email" />
      </ion-item>

      <ion-item class="item-padding">
        <ion-label for="password" position="floating"> Hasło</ion-label>

        <ion-input name="password" type="password" />
      </ion-item>

      <ion-item>
        <ion-button size="medium" expand="full" class="primary-button" @click="register">Zarejestruj</ion-button>
      </ion-item>

      <ion-item>
        <ion-label>
          <ion-text class="bold">Masz już konto?</ion-text>

          <ion-button size="medium" class="outline-primary-button" expand="full" @click="router.push(loginRoute)">
            Przejdź do logowania
          </ion-button>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle, IonLabel, IonContent, IonItem, IonButton, IonText, IonToolbar, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

import { router } from '@/router';

import { loginRoute } from '../login/login.route';

export default defineComponent({
  components: {
    IonPage,
    IonTitle,
    IonLabel,
    IonContent,
    IonButton,
    IonText,
    IonItem,
    IonToolbar,
    IonInput
  },
  setup() {
    function register() {
      console.log('should be registered hello there');
      return;
    }

    return {
      register,
      router,
      loginRoute
    };
  }
});
</script>
