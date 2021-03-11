import { GetterTree } from "vuex";
import { INavbarGettersTypes, INavbarStateTypes } from "./interfaceNavbar";
import { IRootState } from "@/store/interfaces";

export const getters: GetterTree<INavbarStateTypes, IRootState> &
  INavbarGettersTypes = {
  getSidebarStatus: (state: INavbarStateTypes) => {
    return state.sidebarOpen || false;
  }
};
