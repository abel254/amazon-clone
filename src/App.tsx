import React from "react";
import { BannerComponent } from "./components/carouselBanner/banner";
import { CentralBannerComponent } from "./components/centralBanner/centralBanner";
import HeaderComponent from "./components/header";
import NavbarComponent from "./components/navbar/navbar";
import { ProductsComponent } from "./components/productsRowOne/products";
import { ProductsTwoComponent } from "./components/productsRowTwo/productsTwo";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
      <ProductsComponent />
      <CentralBannerComponent />
      <ProductsTwoComponent />
    </div>
  );
}

export default App;
