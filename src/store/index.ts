import Vue from "vue";
import Vuex from "vuex";

import DialogsModule from "./dialogs";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

export default new Vuex.Store({
  state: {
    version: "1.0.0"
  },
  modules: {
    dialogs: DialogsModule
  }
});
