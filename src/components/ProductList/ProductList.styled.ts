import styled from "styled-components";
import colors from "../style/colors";
import { FULL, MAX_WIDTH } from "../style/sizes";

const { white, gray } = colors;

export const List = styled.ul`
  padding: 0;
  margin: 60px 0;
  list-style: none;
  display: flex;
  width: ${MAX_WIDTH};
  flex-direction: column;

  @media screen and (max-width: ${MAX_WIDTH}) {
    width: ${FULL};
  }
`;

export const ListItem = styled.li`
  padding: 30px;
  list-style: none;
  display: flex;
  width: ${FULL};
  flex-direction: column;
  background: ${white};
  border-bottom: 2px solid ${gray};
`;
