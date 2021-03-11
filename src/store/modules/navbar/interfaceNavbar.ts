import { ActionContext } from "vuex";
import { MutationTypes as NavbarMTypes } from "./mutation-types";
import { ActionTypes as NavbarATypes } from "./action-types";
import {
  IRootState,
  IRootActionsTypes,
  IRootGettersTypes
} from "@/store/interfaces";

export interface INavbarStateTypes {
  sidebarOpen?: boolean;
}

export interface INavbarActionsTypes {
  [NavbarATypes.TOGGLE_SIDEBAR](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

export interface INavbarGettersTypes {
  getSidebarStatus(state: INavbarStateTypes): boolean;
}

export type INavbarMutationsTypes<S = INavbarStateTypes> = {
  [NavbarMTypes.SIDEBAR_OPEN](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof INavbarMutationsTypes>(
    key: K,
    payload: Parameters<INavbarMutationsTypes[K]>[1]
  ): ReturnType<INavbarMutationsTypes[K]>;
} & Omit<ActionContext<INavbarStateTypes, IRootState>, "commit">;
