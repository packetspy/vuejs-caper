import { ActionContext } from "vuex";
import { MutationTypes as RootMTypes } from "./modules/root/mutation-types";
import { ActionTypes as RootATypes } from "./modules/root/action-types";
import { INavbarActionsTypes, INavbarGettersTypes, INavbarStateTypes } from "./modules/navbar/interfaceNavbar";
import { CounterActionsTypes, CounterGettersTypes, CounterStateTypes } from "./modules/counter/interfaceCounter";

export interface IRootState {
  root: boolean;
  version: string;
}

export interface IMergedState extends IRootState {
  navbarModule: INavbarStateTypes;
  counterModule: CounterStateTypes;
}

export interface IRootActionsTypes {
  [RootATypes.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [RootATypes.COUNTER_CHECK]({ commit }: AugmentedActionContextRoot): void;
}

export interface IRootGettersTypes {
  getVersion(state: IRootState): string;
}

export type IRootMutationsTypes<S = IRootState> = {
  [RootMTypes.UPDATE_VERSION](state: S, payload: string): void;
};

type AugmentedActionContextRoot = {
  commit<K extends keyof IRootMutationsTypes>(
    key: K,
    payload: Parameters<IRootMutationsTypes[K]>[1]
  ): ReturnType<IRootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit">;

export interface StoreActions extends IRootActionsTypes,
  INavbarActionsTypes,
  CounterActionsTypes { }
export interface StoreGetters extends IRootGettersTypes,
  INavbarGettersTypes,
  CounterGettersTypes { }
