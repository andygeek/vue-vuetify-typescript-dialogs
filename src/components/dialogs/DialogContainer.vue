<template>
  <div class="dialog-contaner">
    <v-dialog
      v-for="d in openDialogs"
      :key="d.id"
      :value="getDialogOpen(d.id)"
      @input="setDialogOpen(d.id, $event)"
      :persistent="!d.dismissable"
      :hide-overlay="d.hideOverlay"
      :overlay-color="d.overlayColor"
      :overlay-opacity="d.overlayOpacity"
      :fullscreen="d.fullscreen"
      :width="d.width"
      :max-width="d.maxWidth"
    >
      <component
        :is="d.component"
        v-bind="d.props"
        @result="resolveDialog(d.id, $event)"
      />
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Dialog } from "@/models/Dialogs";

@Component({})
export default class DialogContainer extends Vue {
  get openDialogs(): Dialog[] {
    return this.$store.state.dialogs.openDialogs;
  }

  getDialogOpen(dialogId: string) {
    return (this.openDialogs.find(d => d.id === dialogId) || {}).open;
  }

  setDialogOpen(dialogId: string, open: boolean) {
    console.log("XX" + dialogId + " - " + open);
  }
}
</script>
