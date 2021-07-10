import styled from "styled-components";
import colors from "../style/colors";
import { FULL, MAX_WIDTH } from "../style/sizes";

const { background } = colors;

export const Container = styled.div`
  margin: 0;
  display: flex;
  background: ${background};
  width: ${MAX_WIDTH};
  flex-direction: column;
  @media screen and (max-width: ${MAX_WIDTH}) {
    width: ${FULL};
  }
`;

export const MainContent = styled.div`
  display: flex;
  background: ${background};
  flex-direction: column;
  flex-grow: 1;
`;
