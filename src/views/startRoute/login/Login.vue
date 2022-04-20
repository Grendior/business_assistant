<template>
  <ion-page>
    <ion-header>
      <ion-title>Business Assistant - Logowanie </ion-title>
    </ion-header>

    <ion-content>
      <ion-item lines="none">
        <ion-label>
          <h1>Twoja Aplikacja do zarządzania firmą</h1>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonHeader, IonLabel, IonItem, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

/**
 * Widok główny
 */
export default defineComponent({
  name: 'App',
  components: {
    IonHeader,
    IonPage,
    IonItem,
    IonLabel,
    IonContent,
    IonTitle
  }
});
</script>
