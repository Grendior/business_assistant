<template>
  <ion-page>
    <ion-header>
      <ion-title>Business Assistant - home </ion-title>
    </ion-header>

    <ion-content>
      <ion-item lines="none" class="item-self-center-400">
        <ion-label class="ion-text-wrap text-align-center">
          <h1>Twoja Aplikacja do zarządzania firmą</h1>
        </ion-label>
      </ion-item>

      <ion-button expand="block">Logowanie</ion-button>

      <ion-button expand="block">Rejestracja</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonHeader, IonLabel, IonButton, IonItem, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

/**
 * Widok główny
 */
export default defineComponent({
  name: 'App',
  components: {
    IonHeader,
    IonPage,
    IonButton,
    IonItem,
    IonLabel,
    IonContent,
    IonTitle
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
