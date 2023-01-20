import React from "react";
import { BannerComponent } from "./components/carouselBanner/banner";
import HeaderComponent from "./components/header";
import NavbarComponent from "./components/navbar/navbar";
import { ProductsComponent } from "./components/productsRowOne/products";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
      <ProductsComponent />
    </div>
  );
}

export default App;
