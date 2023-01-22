import "./productsTwo.css";
import { GrStar } from "react-icons/gr";
import { ProductsCard } from "../productsRowOne/productsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const image1 = require("./jewellery.jpeg");
const image2 = require("./electronics.jpg");
const image3 = require("./women.jpg");
const image4 = require("./computing.png");

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
      <section className="products-two">
        {slicedApiProducts.map((product) => {
          return <ProductsCard key={product.id} {...product} />;
        })}
      </section>
      {/* <section className="products-two">
        {products.map((product, index) => {
          return <ProductsCard key={index} {...product} />;
        })}
      </section> */}
    </>
  );
};
