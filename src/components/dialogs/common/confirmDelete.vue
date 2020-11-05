<template>
  <v-card>
    <v-card-title v-text="title" />
    <v-card-text>
      <div v-for="(line, n) in message.split('\n')" :key="n" v-text="line" />
      <v-alert type="warning" class="mt-4">
        Este es un mensaje
      </v-alert>
      <slot />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text :color="cancelButtonColor" @click="$emit('result', false)">
        <span v-text="cancelButtonText" />
      </v-btn>
      <v-btn :color="okButtonColor" @click="$emit('result', true)">
        <span v-text="okButtonText" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ConfirmDeleteDialog extends Vue {
  @Prop({ type: String }) title?: string;
  @Prop({ type: String }) message?: string;
  @Prop({ type: String, default: "Eliminar" }) okButtonText?: string;
  @Prop({ type: String, default: "" }) okButtonColor?: string;
  @Prop({ type: String, default: "Cancelar" }) cancelButtonText?: string;
  @Prop({ type: String, default: "" }) cancelButtonIcon?: string;
  @Prop({ type: String, default: "" }) cancelButtonColor?: string;
}
</script>
