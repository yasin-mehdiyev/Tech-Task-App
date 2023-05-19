import { FC } from "react";
// Models
import { Product } from "../../../models/api/Products/Product";
// Components
import Col from "../../layout/base/Col";
import ProductItem from "./ProductItem";

type ProductListProps = {
  data: Product[];
};

const ProductList: FC<ProductListProps> = ({ data }) => {
  return (
    <>
      {data.length > 0
        ? data.map((item: Product) => (
            <Col
              columnName={
                "col-lg-3 d-flex justify-content-center align-items-center mb-3"
              }
              key={item.id}
            >
              <ProductItem {...item} />
            </Col>
          ))
        : null}
    </>
  );
};

export default ProductList;
