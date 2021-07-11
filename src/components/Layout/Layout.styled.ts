import styled from "styled-components";
import colors from "../style/colors";
import { FULL } from "../style/sizes";

const { background } = colors;

export const MainContent = styled.div`
  display: flex;
  background: ${background};
  flex-direction: column;
  flex-grow: 1;
  width: ${FULL};
`;
