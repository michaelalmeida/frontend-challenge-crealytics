import { screen } from '@testing-library/react';

import { renderWithStore } from '../../utils/testUtils';

import Loading from '.';

describe('<Loading />', () => {
    test('renders the Loading component', () => {
        renderWithStore(<Loading isLoading />);
        const loadingComponent = screen.getByTestId('loading-component');
        expect(loadingComponent).toBeTruthy();
    });
});
