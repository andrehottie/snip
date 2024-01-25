import {
  Store,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { utilityGetFromLocalStorage } from "../utils";
import { reducers } from "./reducers";
import { TStore } from "./declarations/store";
import { watchers } from "./watchers";
import { middlwareSaga } from "./middlewares/middlewareSaga";
import { createMiddlewares } from "./middlewares";

export const APP_NAME = "Snip";
export const configureStore = (): Store => {
  const prevStore: TStore = utilityGetFromLocalStorage(APP_NAME);
  const enhancer = composeWithDevTools({ trace: true, traceLimit: 25 });
  const store = createStore(
    reducers(),
    //@ts-ignore
    prevStore,
    enhancer(applyMiddleware(...createMiddlewares()))
  );

  //@ts-ignore
  watchers.forEach((watcher) => middlwareSaga.run(watcher));

  //@ts-ignore
  return store;
};
