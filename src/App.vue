<template>
  <v-app>
    <router-view class="main-container" />
    <dialog-container />
  </v-app>
</template>
<script>
import DialogContainer from "@/components/dialogs/DialogContainer.vue";

export default {
  name: "App",
  components: {
    DialogContainer
  }
};
</script>
