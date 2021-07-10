import styled from "styled-components";

import colors from "./colors";
import { mainFont } from "./fonts";

const { primary, white } = colors;

interface HeadingProps {
  white?: boolean;
  right?: boolean;
}

export const H1 = styled.h1<HeadingProps>`
  ${mainFont}
  font-size: 4.2rem;
  font-weight: 700;
  color: ${(props) => (props.white ? white : primary)};
`;

export const H2 = styled.h2<HeadingProps>`
  ${mainFont}
  margin: 0;
  padding: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${(props) => (props.white ? white : primary)};
`;

export const H3 = styled.h3<HeadingProps>`
  ${mainFont}
  font-size: 2.4rem;
  font-weight: normal;
  color: ${(props) => (props.white ? white : primary)};
`;

export const H5 = styled.h5<HeadingProps>`
    ${mainFont}
    font-size: 1.4rem;
    font-weight: 700;
    text-align: ${(props) => (props.right ? "right" : "left")};
    color: (props) => (props.white ? white : primary)};
    text-transform: uppercase;
`;

export const Paragraph = styled.p<HeadingProps>`
  ${mainFont}
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: ${(props) => (props.right ? "right" : "left")};
  color: ${(props) => (props.white ? white : primary)};
`;
