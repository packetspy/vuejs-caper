import { Module } from "vuex";
import { INavbarStateTypes } from "./interfaceNavbar";
import { IRootState } from "@/store/interfaces";
import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { actions } from "./actions";

const navbar: Module<INavbarStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default navbar;
