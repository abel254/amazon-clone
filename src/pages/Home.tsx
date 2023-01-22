import { BannerComponent } from "../components/carouselBanner/banner";
import { ProductsComponent } from "../components/productsRowOne/products";
import { CentralBannerComponent } from "../components/centralBanner/centralBanner";
import { ProductsTwoComponent } from "../components/productsRowTwo/productsTwo";

export const Home = () => {
  return (
    <>
      <BannerComponent />
      <ProductsComponent />
      <CentralBannerComponent />
      <ProductsTwoComponent />
    </>
  );
};
