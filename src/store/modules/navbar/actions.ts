import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { INavbarActionsTypes, INavbarStateTypes } from "./interfaceNavbar";
import { IRootState } from "@/store/interfaces";

export const actions: ActionTree<INavbarStateTypes, IRootState> &
  INavbarActionsTypes = {
  [ActionTypes.TOGGLE_SIDEBAR]({ commit }, payload: boolean) {
    console.log("actions.ts:9", "pasouuu aqui", payload);
    commit(MutationTypes.SIDEBAR_OPEN, payload);
  }
};
