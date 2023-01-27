
import { GrStar } from "react-icons/gr";
import { ProductsCard } from "../productsRowOne/productsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

export const ProductsTwoComponent = () => {
  const [apiProducts, setApiProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
    });
  }, []);

  let slicedApiProducts = apiProducts.slice(4, 20);
  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={4} className="g-3 mb-4">
          {slicedApiProducts.map((product) => (
            <Col key={product.id}>
              <ProductsCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
