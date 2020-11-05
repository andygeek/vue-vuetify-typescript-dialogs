import { RootState } from "@/store/index";
import { Module } from "vuex";
import { Dialog } from "@/models/Dialogs";

export interface DialogsState {
  openDialogs: Dialog[];
}

const defaults = {
  openDialogs: []
};

const DialogsModule: Module<DialogsState, RootState> = {
  namespaced: true,
  state: {
    ...defaults
  },
  mutations: {
    addDialog(state, dialog: Dialog) {
      if (!dialog.id) throw new Error("Dialog has no ID");
      if (!dialog.component) throw new Error("Dialog has no component");
      if (state.openDialogs.find(d => d.id === dialog.id)) {
        throw new Error("Dialog is already open");
      }
      state.openDialogs.push(dialog);
    }
  }
};

export default DialogsModule;
