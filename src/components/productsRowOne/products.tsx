import "./products.css";
import { ProductsCard } from "./productsCard";
import { GrStar } from "react-icons/gr";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

export const ProductsComponent = () => {
  const [apiProducts, setApiProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
    });
  }, []);

  let slicedApiProducts = apiProducts.slice(0, 4);

  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={4} className="g-3 mt-1 mb-4">
          {slicedApiProducts.map((product) => {
            return (
              <Col key={product.id}>
                <ProductsCard {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
