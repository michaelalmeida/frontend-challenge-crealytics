import { screen, waitFor } from '@testing-library/react';

import { renderWithStore } from '../../utils/testUtils';

import SerchBox from '.';

describe('<SerchBox />', () => {
    let props = {
        value: '',
        onChange: jest.fn(),
        placeholder: '',
    };
    test('renders the Searchbox', () => {
        renderWithStore(<SerchBox {...props} />);
        const input = screen.getByRole('textbox');

        expect(input).toBeTruthy;
    });
});
