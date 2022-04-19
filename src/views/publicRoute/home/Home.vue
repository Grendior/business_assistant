<template>
  <ion-page>
    <ion-content :overscroll="true" :fullscreen="true">
      <ion-toolbar>
        <ion-title>Asystent Firmy </ion-title>
      </ion-toolbar>

      <ion-button expand="block">Logowanie</ion-button>

      <ion-button expand="block">Rejestracja</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
});
</script>
