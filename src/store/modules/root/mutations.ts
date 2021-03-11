import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { IRootMutationsTypes, IRootState } from "@/store/interfaces";

export const mutations: MutationTree<IRootState> & IRootMutationsTypes = {
  [MutationTypes.UPDATE_VERSION](state: IRootState, payload: string) {
    state.version = payload;
  }
};
