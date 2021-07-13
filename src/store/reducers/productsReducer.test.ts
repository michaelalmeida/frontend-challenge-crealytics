import productsReducer from './productsReducer';

test('should set action for isLoading', () => {
    expect(
        productsReducer(undefined, {
            isLoading: true,
            type: 'IS_LOADING',
        })
    ).toEqual({
        isLoading: true,
        status: 'NOT_LOADED',
        products: {
            page: 0,
            items: [],
            paginationLimite: 100,
        },
    });
});

test('should set action for status', () => {
    expect(
        productsReducer(undefined, {
            status: 'LOADED',
            type: 'SET_STATUS',
        })
    ).toEqual({
        isLoading: false,
        status: 'LOADED',
        products: {
            page: 0,
            items: [],
            paginationLimite: 100,
        },
    });
});
