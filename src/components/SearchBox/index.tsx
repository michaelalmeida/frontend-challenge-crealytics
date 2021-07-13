import PropTypes from 'prop-types';

import { Input, Container, ContainerWrapper } from './SearchBox.styled';

interface SearchBoxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchBox = ({ value, onChange, placeholder }: SearchBoxProps): JSX.Element => {
    return (
        <ContainerWrapper>
            <Container>
                <Input value={value} onChange={onChange} placeholder={placeholder} />
            </Container>
        </ContainerWrapper>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

SearchBox.defaultProps = {
    placeholder: '',
};

export default SearchBox;
