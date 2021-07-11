import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancers = composeWithDevTools({
  stateSanitizer: (state: any) =>
    state.products
      ? { ...state, products: { ...state.products, items: "<<LONG_DATA>>" } }
      : state,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
