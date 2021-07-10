/* eslint-disable import/prefer-default-export */

import { render } from "@testing-library/react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import reducers from "../store/reducers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderWithStore = (
  children: JSX.Element,
  // eslint-disable-next-line @typescript-eslint/ban-types
  initialState?: object
) => {
  const customStore = initialState ? createStore(reducers) : store;

  return render(
    <BrowserRouter>
      <Provider store={customStore}>{children}</Provider>
    </BrowserRouter>
  );
};
