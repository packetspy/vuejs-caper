import {
  INavbarStateTypes,
  INavbarMutationsTypes,
  INavbarGettersTypes,
  INavbarActionsTypes
} from "./interfaceNavbar";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type NavbarStoreModuleTypes<S = INavbarStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof INavbarMutationsTypes,
    P extends Parameters<INavbarMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<INavbarMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof INavbarGettersTypes]: ReturnType<INavbarGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof INavbarActionsTypes>(
    key: K,
    payload?: Parameters<INavbarActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<INavbarActionsTypes[K]>;
};
