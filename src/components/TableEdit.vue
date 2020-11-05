<template>
  <v-container>
    <v-btn elevation="2" @click="deleteItem">Click me</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { confirmDelete } from "@/components/dialogs";

@Component({})
export default class TableEdit extends Vue {
  saving = false;
  deleteItem() {
    console.log(
      confirmDelete(
        "¿Seguro que quieres eliminar por completo esta tabla del ambiente?"
      )
    );
  }
}
</script>
