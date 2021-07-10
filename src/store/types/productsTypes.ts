export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PAGE = "SET_PAGE";
export const IS_LOADING = "IS_LOADING";
export const SET_STATUS = "SET_STATUS";

export interface ProductProps {
  title: string;
  gtin: number;
  gender: "female" | "male" | "unisex";
  price: string;
  sale_price: string;
  image_link: string;
  additional_image_link?: Array<string>;
}

export interface ProductsProps {
  items: Array<ProductProps>;
  page: number;
  paginationLimite: number;
}

interface ProductsAction {
  type: typeof SET_PRODUCTS;
  items: Array<ProductProps>;
}

interface IsLoadingAction {
  type: typeof IS_LOADING;
  isLoading: boolean;
}

interface StatusAction {
  type: typeof SET_STATUS;
  status: string;
}

interface PageAction {
  type: typeof SET_PAGE;
  page: number;
}

export type ProductsActiontypes =
  | ProductsAction
  | IsLoadingAction
  | StatusAction
  | PageAction;
