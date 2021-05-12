import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { ICounterActionsTypes, ICounterStateTypes } from "./interfaceCounter"
import { IRootState } from "@/store/interfaces";

export const actions: ActionTree<ICounterStateTypes, IRootState> &
  ICounterActionsTypes = {
  [ActionTypes.GET_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload);
  },

  [ActionTypes.CALL_COUNTER]({ commit }, payload: boolean) {
    debugger;
    console.log();
  },

  [ActionTypes.SET_ROOT_DISPATCH]({ commit }) {
    commit(MutationTypes.SET_ROOT_DISPATCH, true);
  }
};
