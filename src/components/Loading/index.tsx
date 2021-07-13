import { LoadingScreen, LoadingSpinner } from './Loading.styled';
import PropTypes from 'prop-types';

const Loading = ({ isLoading }: { isLoading: boolean }): JSX.Element =>
    isLoading ? (
        <LoadingScreen data-testid="loading-component">
            <LoadingSpinner />
        </LoadingScreen>
    ) : (
        <></>
    );

Loading.propTypes = {
    isLoading: PropTypes.bool,
};

Loading.defaultProps = {
    isLoading: false,
};

export default Loading;
