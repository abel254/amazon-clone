
import { GrStar } from "react-icons/gr";
import { ProductsCard } from "../productsRowOne/productsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { ProductsCardProps } from "../props/Product.type";
import Loading from "../Loading";

export const ProductsTwoComponent = () => {
  const [apiProducts, setApiProducts] = useState<ProductsCardProps[]>([]);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
      setLoading(true)
    });
  }, []);

  let slicedApiProducts = apiProducts.slice(4, 20);
  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={4} className="g-3 mb-4">
          {loading ? slicedApiProducts.map((product) => (
            <Col key={product.id}>
              <ProductsCard {...product} />
            </Col>
          )): <Loading/>}
        </Row>
      </Container>
    </>
  );
};
