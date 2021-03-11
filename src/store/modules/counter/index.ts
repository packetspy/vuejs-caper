import { Module } from "vuex";
import { CounterStateTypes, IRootState } from "@/store/interfaces";
import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { actions } from "./actions";

const counter: Module<CounterStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default counter;
