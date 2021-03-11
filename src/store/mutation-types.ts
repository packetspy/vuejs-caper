import { MutationTypes as navbarTypes } from "./modules/navbar/mutation-types";
import { MutationTypes as counterTypes } from "./modules/counter/mutation-types";

export const AllMutationTypes = {
  ...navbarTypes,
  ...counterTypes
};
