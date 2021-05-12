import { Module } from "vuex";
import { ICounterStateTypes } from "./interfaceCounter";
import { IRootState } from "@/store/interfaces";
import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { actions } from "./actions";

const counter: Module<ICounterStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default counter;
