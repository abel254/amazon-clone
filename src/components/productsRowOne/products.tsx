import "./products.css";
import { ProductsCard } from "./productsCard";
import { GrStar } from "react-icons/gr";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { ProductsCardProps } from "../props/Product.type";
import Loading from "../Loading";

export const ProductsComponent = () => {
  const [apiProducts, setApiProducts] = useState<ProductsCardProps[]>([]);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
      setLoading(true)
    });
  }, []);

  let slicedApiProducts = apiProducts.slice(0, 4);

  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={4} className="g-3 mt-1 mb-4">
          {loading ? slicedApiProducts.map((product) => {
            return (
              <Col key={product.id}>
                <ProductsCard {...product} />
              </Col>
            );
          }): <Loading/>}
        </Row>
      </Container>
    </>
  );
};
