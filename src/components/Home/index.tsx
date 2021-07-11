import { useState, useCallback } from "react";

import SearchBox from "../SearchBox";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { ProductsInitialState } from "../../store/reducers/productsReducer";
import { getProducts } from "../../store/actions/productsAction";
import Loading from "../Loading";

const Home = (): JSX.Element => {
  const DEBOUNCE_DELAY = 500;
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state: ProductsInitialState) => state.products);
  const isLoading = useSelector(
    (state: ProductsInitialState) => state.isLoading
  );

  const debounceToFetch = useCallback(
    debounce(() => {
      dispatch(getProducts());
    }, DEBOUNCE_DELAY),
    []
  );

  const searchChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
    if (products.items.length === 0) debounceToFetch();
  };

  return (
    <>
      {isLoading && <Loading />}
      <SearchBox value={searchValue} onChange={searchChangeHandler} />
    </>
  );
};

export default Home;
