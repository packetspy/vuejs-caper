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

export type NavbarMutationsTypes<S = INavbarStateTypes> = {
  [NavbarMTypes.SIDEBAR_OPEN](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof NavbarMutationsTypes>(
    key: K,
    payload: Parameters<NavbarMutationsTypes[K]>[1]
  ): ReturnType<NavbarMutationsTypes[K]>;
} & Omit<ActionContext<INavbarStateTypes, IRootState>, "commit">;
