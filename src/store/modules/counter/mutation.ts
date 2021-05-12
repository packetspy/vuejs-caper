import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { CounterMutationsTypes, ICounterStateTypes } from "./interfaceCounter";

export const mutations: MutationTree<ICounterStateTypes> &
  CounterMutationsTypes = {
  [MutationTypes.SET_COUNTER](state: ICounterStateTypes, payload: number) {
    state.counter = payload;
  },
  [MutationTypes.RESET_COUNTER](state: ICounterStateTypes) {
    state.counter = 0;
  },
  [MutationTypes.SET_ROOT_DISPATCH](
    state: ICounterStateTypes,
    payload: boolean
  ) {
    state.rootDispatch = payload;
  }
};
