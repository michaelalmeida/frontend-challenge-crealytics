import {
  ProductProps,
  ProductsActiontypes,
  SET_PRODUCTS,
  IS_LOADING,
  SET_STATUS,
  SET_PAGE,
} from "../types/productsTypes";

export const setProducts = (
  products: Array<ProductProps>
): ProductsActiontypes => ({
  type: SET_PRODUCTS,
  items: products,
});

export const setIsLoading = (isLoading: boolean): ProductsActiontypes => ({
  type: IS_LOADING,
  isLoading,
});

export const setPage = (page: number): ProductsActiontypes => ({
  type: SET_PAGE,
  page,
});

export const setStatus = (status: string): ProductsActiontypes => ({
  type: SET_STATUS,
  status,
});
