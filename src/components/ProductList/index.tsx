import { ProductProps } from "../../store/types/productsTypes";
import { List, ListItem } from "./ProductList.styled";

interface ProductListProps {
  products: Array<ProductProps>;
}

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <List>
      {products.map((products) => (
        <ListItem key={products.gtin}>{products.title}</ListItem>
      ))}
    </List>
  );
};

export default ProductList;
