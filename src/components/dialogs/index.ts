import store from "@/store";
import * as CommonDialogs from "./common";

import { Dialog } from "@/models/Dialogs";

import Chance from "chance";
const chance = new Chance();

export function showDialog(dialog: Dialog) {
  store.commit("dialogs/addDialog", {
    ...dialog,
    open: true
  });
}

export function showDialogPromise(dialog: Partial<Dialog>) {
  return new Promise(resolve => {
    store.commit("dialogs/addDialog", {
      dismissable: true,
      open: true,
      ...dialog,
      handler: resolve
    });
  });
}

export interface AlertDialogOptions {
  title?: string;
  okButtonText?: string;
  okButtonIcon?: string;
  okButtonColor?: string;
}

export interface ConfirmDialogOptions extends AlertDialogOptions {
  cancelButtonText?: string;
  cancelButtonIcon?: string;
  cancelButtonColor?: string;
}

export function confirmDelete(
  message: string,
  options: ConfirmDialogOptions = {}
): Promise<boolean> {
  return showDialogPromise({
    id: chance.guid(),
    component: CommonDialogs.ConfirmDelete,
    props: {
      message,
      ...options
    },
    width: 720
  }) as Promise<boolean>;
}

