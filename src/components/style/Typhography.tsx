import styled from "styled-components";

import colors from "./colors";
import { mainFont, secondaryFont } from "./fonts";
import { MAX_WIDTH } from "./sizes";

const { black, primary, white } = colors;

interface HeadingProps {
  white?: boolean;
  right?: boolean;
}

export const H1 = styled.h1<HeadingProps>`
  ${secondaryFont}
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
  margin: 0;
  ${mainFont}
  font-size: 2.4rem;
  font-weight: normal;
  color: ${(props) => (props.white ? white : black)};

  @media screen and (max-width: ${MAX_WIDTH}) {
    font-size: 1.8rem;
  }
`;

export const Paragraph = styled.p<HeadingProps>`
  ${mainFont}
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: ${(props) => (props.right ? "right" : "left")};
  color: ${(props) => (props.white ? white : primary)};
`;
