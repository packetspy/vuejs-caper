import { GetterTree } from "vuex";
import { CounterGettersTypes, ICounterStateTypes } from "./interfaceCounter";
import { IRootState } from "@/store/interfaces"

export const getters: GetterTree<ICounterStateTypes, IRootState> &
  CounterGettersTypes = {
  counterValue: (state: ICounterStateTypes) => {
    return state.counter || 0;
  },
  doubledCounter: (state: ICounterStateTypes) => {
    return state.counter || 0 * 2;
  },
  getRootDispatch: (state: ICounterStateTypes) => {
    return state.rootDispatch || false;
  }
};
