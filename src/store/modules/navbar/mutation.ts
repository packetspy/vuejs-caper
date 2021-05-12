import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { NavbarMutationsTypes, INavbarStateTypes } from "./interfaceNavbar";

export const mutations: MutationTree<INavbarStateTypes> &
  NavbarMutationsTypes = {
  [MutationTypes.SIDEBAR_OPEN](state: INavbarStateTypes, payload: boolean) {
    console.log("mutation.ts:7", "pasouuu aqui", payload);
    state.sidebarOpen = payload;
  }
};
