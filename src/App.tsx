import React, { useEffect, useState } from "react";

import HeaderComponent from "./components/headerComponent/header";
import NavbarComponent from "./components/navbar/navbar";
import { FooterComponent } from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import axios from "axios";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Container } from "react-bootstrap";

export const apiProductsOneContext = React.createContext<any[]>([]);
export const apiProductsTwoContext = React.createContext<any[]>([]);

function App() {
  return (
    <ShoppingCartProvider>
      <HeaderComponent />
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <FooterComponent />
    </ShoppingCartProvider>
  );
}

export default App;
