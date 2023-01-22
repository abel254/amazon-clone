import React from "react";

import HeaderComponent from "./components/headerComponent/header";
import NavbarComponent from "./components/navbar/navbar";
import { FooterComponent } from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
