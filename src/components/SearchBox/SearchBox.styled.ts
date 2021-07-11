import styled from "styled-components";
import colors from "../style/colors";
import { FULL, MAX_WIDTH } from "../style/sizes";

const { primary, secondary } = colors;

export const ContainerWrapper = styled.div`
  margin: 0;
  display: flex;
  background: ${primary};
  width: ${FULL};
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: ${MAX_WIDTH}) {
    padding: 30px;
  }
`;

export const Container = styled.div`
  margin: 0;
  display: flex;
  width: ${MAX_WIDTH};
  flex-direction: column;

  @media screen and (max-width: ${MAX_WIDTH}) {
    width: ${FULL};
  }
`;

export const Input = styled.input`
  margin: 30px 0;
  padding: 15px;
  width: ${FULL};
  border-radius: 5px;
  transition: 1s;
  font-size: 1.8rem;
  box-sizing: border-box;
  border: 2px solid ${primary};

  &:focus {
    border: 2px solid ${secondary};
    outline: none;
  }
`;
