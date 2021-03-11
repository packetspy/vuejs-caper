import { ActionContext } from "vuex";
import { MutationTypes as CounterMTypes } from "./mutation-types";
import { ActionTypes as CounterATypes } from "./action-types";
import {
  IRootState,
  IRootActionsTypes,
  IRootGettersTypes
} from "@/store/interfaces";

export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterActionsTypes {
  [CounterATypes.GET_COUNTER]({ commit }: AugmentedActionContext, payload: number): void;
  [CounterATypes.CALL_COUNTER]({ commit }: AugmentedActionContext, payload: boolean): void;
  [CounterATypes.SET_ROOT_DISPATCH]({ commit }: AugmentedActionContext, payload: number): void;
}

export interface CounterGettersTypes {
  doubledCounter(state: CounterStateTypes): number;
  counterValue(state: CounterStateTypes): number;
  getRootDispatch(state: CounterStateTypes): boolean;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [CounterMTypes.SET_COUNTER](state: S, payload: number): void;
  [CounterMTypes.RESET_COUNTER](state: S): void;
  [CounterMTypes.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, "commit">;
