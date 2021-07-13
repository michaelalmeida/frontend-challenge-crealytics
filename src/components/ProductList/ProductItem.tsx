import { useState, useCallback } from "react";

import {
  ListTitle,
  Content,
  Description,
  Info,
  ListItem,
  PriceTag,
  Price,
  GenderInfo,
  ImageContainer,
  Gallery,
} from "./ProductList.styled";
import { ProductProps } from "../../store/types/productsTypes";
import { useIntl, FormattedMessage } from "react-intl";
import { H3 } from "../style/Typhography";
import Image from "./Image";

const ProductItem = ({ product }: { product: ProductProps }): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const intl = useIntl();

  const toggleHandler = useCallback(
    () => setIsCollapsed(!isCollapsed),
    [isCollapsed]
  );
  return (
    <ListItem
      onClick={toggleHandler}
      className={isCollapsed ? "expanded" : "collapsed"}
    >
      <Content>
        <ImageContainer>
          <Image imageURL={product.image_link} />
        </ImageContainer>
        <Description>
          <ListTitle>
            <H3>{product.title}</H3>
            <span>{product.gtin}</span>
          </ListTitle>
          <Info>
            <GenderInfo>
              <FormattedMessage id="product.gender" />:
              <FormattedMessage
                id={`product.gender.type-${product.gender}`}
                defaultMessage={intl.formatMessage({
                  id: "product.gender.no-available",
                })}
              />
            </GenderInfo>
            <PriceTag>
              <Price>{product.price}</Price>
              <Price sale>{product.sale_price}</Price>
            </PriceTag>
          </Info>
        </Description>
      </Content>
      {isCollapsed && (
        <Gallery>
          {product.additional_image_link?.split(",").map((image) => (
            <Image key={image} imageURL={image} />
          ))}
        </Gallery>
      )}
    </ListItem>
  );
};

export default ProductItem;
