import { useState, useEffect, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { ProductProps } from '../../store/types/productsTypes';

import SearchBox from '../SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { ProductsInitialState } from '../../store/reducers/productsReducer';
import { getProducts } from '../../store/actions/productsAction';

import Loading from '../Loading';
import ProductList from '../ProductList';
import ReactPaginate from 'react-paginate';
import { ContainerWrapper } from '../style/Container';

const Home = (): JSX.Element => {
    const DEBOUNCE_DELAY = 500;
    const intl = useIntl();

    const [searchValue, setSearchValue] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [filteredList, setFilteredList] = useState<Array<ProductProps>>([]);
    const [pageListItems, setPageListItems] = useState<Array<ProductProps>>([]);

    const dispatch = useDispatch();

    const products = useSelector((state: ProductsInitialState) => state.products);
    const isLoading = useSelector((state: ProductsInitialState) => state.isLoading);
    const paginationLimit = useSelector(
        (state: ProductsInitialState) => state.products.paginationLimite
    );

    const setFilteredListCallBack = useCallback(() => {
        setFilteredList(products.items.filter((product) => product.title.includes(searchValue)));
    }, [products.items]);

    useEffect(() => {
        setFilteredListCallBack();
    }, [setFilteredListCallBack]);

    useEffect(() => {
        setPageCount(Math.ceil(filteredList.length / paginationLimit));
        setPageListItems(filteredList.slice(0, paginationLimit));
    }, [filteredList]);

    const debounceToFetch = useCallback(
        debounce(() => {
            dispatch(getProducts());
        }, DEBOUNCE_DELAY),
        []
    );

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
        setFilteredList(products.items.filter((product) => product.title.includes(e.target.value)));
        if (products.items.length === 0) debounceToFetch();
    };

    const pageClickHandler = ({ selected: number }: { selected: number; number: number }): void => {
        const curentItemIndex = number * paginationLimit;
        const lastItemIndex = number * paginationLimit + 100;
        setPageListItems(products.items.slice(curentItemIndex, lastItemIndex));
    };

    return (
        <>
            <Loading isLoading={isLoading} />
            <SearchBox
                placeholder={intl.formatMessage({ id: 'products.search' })}
                value={searchValue}
                onChange={searchChangeHandler}
            />
            <ContainerWrapper>
                {products.items.length !== 0 && (
                    <>
                        <ProductList products={pageListItems} />
                        {filteredList.length !== 0 && (
                            <ReactPaginate
                                previousLabel={intl.formatMessage({
                                    id: 'products.pagination.previous',
                                })}
                                nextLabel={intl.formatMessage({
                                    id: 'products.pagination.next',
                                })}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={pageClickHandler}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        )}
                    </>
                )}
            </ContainerWrapper>
        </>
    );
};

export default Home;
