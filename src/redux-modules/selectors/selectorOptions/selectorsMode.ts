import { TStore } from "../../declarations/store";
import { TMode } from "../../reducers/reducerOptions";

export const selectorMode = (store: TStore): TMode => store.options.mode;
