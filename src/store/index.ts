import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { RootStoreModuleTypes } from "./modules/root/types";
import { NavbarStoreModuleTypes } from "./modules/navbar/types";
import { CounterStoreModuleTypes } from "./modules/counter/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  navbar: NavbarStoreModuleTypes;
  counter: CounterStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = RootStoreModuleTypes<Pick<StoreModules, "root">> &
  NavbarStoreModuleTypes<Pick<StoreModules, "navbar">> &
  CounterStoreModuleTypes<Pick<StoreModules, "counter">>;
