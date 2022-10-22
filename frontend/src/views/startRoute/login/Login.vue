<template>
  <ion-page>
    <ion-content>
      <ion-title size="large" mode="md" class="header">Logowanie</ion-title>

      <ion-item class="item-padding">
        <ion-label for="email" position="floating">E-mail</ion-label>

        <ion-input v-model="email" name="email" type="email" />
      </ion-item>

      <ion-item class="item-padding">
        <ion-label for="password" position="floating"> Hasło</ion-label>

        <ion-input v-model="password" name="\password" type="password" />
      </ion-item>

      <ion-item>
        <ion-button size="medium" expand="full" class="primary-button" @click="signIn">Zaloguj</ion-button>
      </ion-item>

      <ion-item>
        <ion-label>
          <ion-text class="bold">Nie masz konta?</ion-text>

          <ion-button size="medium" class="outline-primary-button" expand="full" @click="router.push(registerRoute)">
            Przejdź do Rejestracji
          </ion-button>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonLabel, IonInput, IonItem, IonButton, IonText, IonTitle } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

import { router } from '@/router';
import { authService } from '@/services/auth.service';
import { registerRoute } from '@/views/startRoute/register/register.route';

/**
 * Widok główny
 */
export default defineComponent({
  name: 'App',
  components: {
    IonPage,
    IonItem,
    IonText,
    IonLabel,
    IonInput,
    IonButton,
    IonContent,
    IonTitle
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');

    function signIn() {
      authService.signInUser(email.value, password.value);
    }

    return {
      email,
      password,
      registerRoute,
      router,

      signIn
    };
  }
});
</script>
