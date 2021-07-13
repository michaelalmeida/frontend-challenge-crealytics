import styled from "styled-components";
import colors from "../style/colors";
import { FULL, MAX_WIDTH } from "../style/sizes";

const { white, gray, grayLight, grayDarker, secondary } = colors;

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
  padding: 15px;
  list-style: none;
  display: flex;
  width: ${FULL};
  flex-direction: column;
  background: ${white};
  border-bottom: 2px solid ${gray};
  cursor: pointer;
`;

export const ListTitle = styled.div`
  display: flex;

  h3 {
    flex-grow: 1;
  }

  @media screen and (max-width: ${MAX_WIDTH}) {
    margin-bottom: 15px;
    flex-flow: column;
  }
`;

export const Content = styled.div`
  flex-flow: row;
  display: flex;
`;

export const Description = styled.div`
  flex-grow: 1;
`;

export const Info = styled.div`
  display: flex;

  @media screen and (max-width: ${MAX_WIDTH}) {
    flex-flow: column;
  }
`;

export const GenderInfo = styled.div`
  flex-grow: 1;
`;

export const PriceTag = styled.div`
  display: flex;

  @media screen and (max-width: ${MAX_WIDTH}) {
    margin-top: 15px;
    justify-content: flex-end;
  }
`;

interface PriceProps {
  sale?: boolean;
}

export const Price = styled.b<PriceProps>`
  font-weight: ${(props) => (props.sale ? "700" : "400")};
  font-size: ${(props) => (props.sale ? "2rem" : "1.4rem")};
  background: ${(props) => (props.sale ? secondary : white)};
  ${(props) => !props.sale && "text-decoration: line-through;"}
`;

export const ImageContainer = styled.div`
  display: flex;

  img {
    max-width: 100px;
  }
`;

export const Gallery = styled.div`
  padding: 15px 15px 0;
  display: flex;
  flex-wrap: wrap;
  background: ${grayLight};

  img {
    max-width: 100px;
    margin: 0 15px 15px 0;
  }
`;

export const NoImage = styled.div`
  margin: 0 15px 15px 0;
  display: flex;
  align-items: center;
  width: 100px;
  min-height: 100px;
  background: ${grayDarker};
  text-align: center;
  color: ${white};
`;
