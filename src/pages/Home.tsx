import { BannerComponent } from "../components/carouselBanner/banner";
import { ProductsComponent } from "../components/productsRowOne/products";
import { CentralBannerComponent } from "../components/centralBanner/centralBanner";
import { ProductsTwoComponent } from "../components/productsRowTwo/productsTwo";
import { Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Container>
        <BannerComponent />
      </Container>

      <ProductsComponent />
      <Container className="mb-4">
        <CentralBannerComponent />
      </Container>

      <ProductsTwoComponent />
    </>
  );
};
