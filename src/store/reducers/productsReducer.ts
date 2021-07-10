import {
  ProductsProps,
  ProductsActiontypes,
  SET_PRODUCTS,
  SET_PAGE,
  IS_LOADING,
  SET_STATUS,
} from "../types/productsTypes";

export interface ProcutsInitialState {
  isLoading: boolean;
  status: string;
  products: ProductsProps;
}

export const initialState: ProcutsInitialState = {
  isLoading: false,
  status: "NOT_LOADED",
  products: {
    page: 0,
    items: [],
    paginationLimite: 100,
  },
};

export default function productsReducer(
  state = initialState,
  action: ProductsActiontypes
): ProcutsInitialState {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          items: [...state.products.items, ...action.items],
        },
      };
    case SET_PAGE:
      return {
        ...state,
        products: {
          ...state.products,
          page: action.page,
        },
      };
    default:
      return state;
  }
}
