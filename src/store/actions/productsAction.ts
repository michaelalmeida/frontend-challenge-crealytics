import {
  ProductProps,
  ProductsActiontypes,
  SET_PRODUCTS,
  IS_LOADING,
  SET_STATUS,
  SET_PAGE,
} from "../types/productsTypes";

import service from "../../services/productsService";

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

export const getProducts = () => {
  return (dispatch: (arg0: ProductsActiontypes) => void): void => {
    dispatch(setIsLoading(true));
    service
      .get<Array<ProductProps>>("products")
      .then((res) => {
        dispatch(setProducts(res.data));
        dispatch(setStatus("LOADED"));
      })
      .catch(() => {
        dispatch(setStatus("ERROR"));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
