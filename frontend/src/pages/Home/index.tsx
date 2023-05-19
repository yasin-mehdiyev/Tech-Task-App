import { FC, useEffect } from "react";
// Components
import Col from "../../components/layout/base/Col";
import Row from "../../components/layout/base/Row";
import ProductList from "../../components/features/products/ProductList";
// Custom Hooks
import useProducts from "../../hooks/useProducts";
import useResources from "../../hooks/useResources";

const Home: FC = () => {
  // Custom Hooks
  const { products, getProducts }= useProducts();
  const { resources } = useResources();

  useEffect(() => {
    try {
      getProducts();
      document.body.setAttribute("style", "background: #fffdfe !important;");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={"products"}>
      <Row>
        <Col columnName={"col-lg-12"}>
          <div className={"product__title"}>
            <span>{resources["innovationLeader"]}</span>
            <h4>{resources["getStarted"]}</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <ProductList data={products} />
      </Row>
    </div>
  );
};

export default Home;
