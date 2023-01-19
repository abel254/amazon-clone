import React from "react";
import { BannerComponent } from "./components/carouselBanner/banner";
import HeaderComponent from "./components/header";
import NavbarComponent from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
    </div>
  );
}

export default App;
