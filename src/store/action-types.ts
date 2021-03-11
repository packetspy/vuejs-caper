import { ActionTypes as rootATypes } from "./modules/root/action-types";
import { ActionTypes as navbarATypes } from "./modules/navbar/action-types";
import { ActionTypes as counterATypes } from "./modules/counter/action-types";

export const AllActionTypes = {
  ...rootATypes,
  ...navbarATypes,
  ...counterATypes
};
