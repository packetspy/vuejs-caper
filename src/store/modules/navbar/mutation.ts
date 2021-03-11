import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { INavbarMutationsTypes, INavbarStateTypes } from "./interfaceNavbar";

export const mutations: MutationTree<INavbarStateTypes> &
  INavbarMutationsTypes = {
  [MutationTypes.SIDEBAR_OPEN](state: INavbarStateTypes, payload: boolean) {
    console.log("mutation.ts:7", "pasouuu aqui", payload);
    state.sidebarOpen = payload;
  }
};
