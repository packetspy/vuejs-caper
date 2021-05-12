import {
  ICounterStateTypes,
  CounterMutationsTypes,
  CounterGettersTypes,
  ICounterActionsTypes
} from "./interfaceCounter";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type CounterStoreModuleTypes<S = ICounterStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof CounterMutationsTypes,
    P extends Parameters<CounterMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CounterMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof CounterGettersTypes]: ReturnType<CounterGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof ICounterActionsTypes>(
    key: K,
    payload?: Parameters<ICounterActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ICounterActionsTypes[K]>;
};
