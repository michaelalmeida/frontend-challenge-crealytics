import createMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { setIsLoading, setProducts, setStatus } from "./productsAction";
import {
  ProductsActiontypes,
  IS_LOADING,
  SET_PRODUCTS,
  SET_STATUS,
} from "../types/productsTypes";

import { ProductsInitialState } from "../reducers/productsReducer";

type DispatchExts = ThunkDispatch<
  ProductsInitialState,
  void,
  ProductsActiontypes
>;

const middleware = [thunk];
const mockStore = createMockStore<ProductsInitialState, DispatchExts>(
  middleware
);
let store = mockStore();

describe("dispatching actions for productsActions", () => {
  beforeEach(() => {
    store = mockStore();
  });

  test("isLoading", () => {
    store.dispatch(setIsLoading(true));

    const actions = store.getActions();
    const expectedPayload = { isLoading: true, type: IS_LOADING };
    expect(actions).toEqual([expectedPayload]);
  });

  test("setStatus", () => {
    store.dispatch(setStatus("LOADED"));

    const actions = store.getActions();
    const expectedPayload = { status: "LOADED", type: SET_STATUS };
    expect(actions).toEqual([expectedPayload]);
  });

  test("setProducts", () => {
    store.dispatch(setProducts([]));

    const actions = store.getActions();
    const expectedPayload = {
      items: [],
      type: SET_PRODUCTS,
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
