import { ProductProps } from "../../store/types/productsTypes";
import { List } from "./ProductList.styled";
import ProductItem from "./ProductItem";
interface ProductListProps {
  products: Array<ProductProps>;
}

const ProductList = ({ products }: ProductListProps): JSX.Element => (
  <List>
    {products.map((product) => (
      <ProductItem key={product.gtin} product={product} />
    ))}
  </List>
);

export default ProductList;
