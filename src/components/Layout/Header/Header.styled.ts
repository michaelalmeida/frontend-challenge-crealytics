import styled from 'styled-components';
import colors from '../../style/colors';
import { MAX_WIDTH, FULL } from '../../style/sizes';

const { white } = colors;

export const HeaderBar = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: ${FULL};
    padding: 15px 0;
    display: flex;
    background: ${white};
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.div`
    margin-right: 60px;
    flex-grow: 0;
    img {
        max-width: 150px;
    }
    @media screen and (max-width: ${MAX_WIDTH}) {
        margin-left: 30px;
    }
`;

export const LoginArea = styled.div`
    flex-grow: 0;
`;

export const GridWrapper = styled.div`
    display: flex;
    width: ${MAX_WIDTH};
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: ${MAX_WIDTH}) {
        width: ${FULL};
    }
`;
