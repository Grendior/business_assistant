<template>
  <ion-page>
    <ion-content>
      <ion-title size="large" mode="md" class="header">Rejestracja</ion-title>

      <ion-item class="item-padding">
        <ion-label for="email" position="floating">E-mail</ion-label>

        <ion-input v-model="email" name="email" type="email" />
      </ion-item>

      <ion-item class="item-padding">
        <ion-label for="password" position="floating"> Hasło</ion-label>

        <ion-input v-model="password" name="\password" type="password" />
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
import { IonPage, IonTitle, IonLabel, IonContent, IonItem, IonButton, IonText, IonInput } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

import { router } from '@/router';
import { authService } from '@/services/auth.service';
import { loginRoute } from '@/views/startRoute/login/login.route';

/**
 * Widok rejestracji
 */
export default defineComponent({
  components: {
    IonPage,
    IonTitle,
    IonLabel,
    IonContent,
    IonButton,
    IonText,
    IonItem,
    IonInput
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');

    /**
     * Rejestracja użytkownika
     */
    function register() {
      authService.addUser(email.value, password.value);
    }

    return {
      email,
      loginRoute,
      password,
      router,

      register
    };
  }
});
</script>
