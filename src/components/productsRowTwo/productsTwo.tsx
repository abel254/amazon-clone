import "./productsTwo.css";
import { GrStar } from "react-icons/gr";
import { ProductsCard } from "../productsRowOne/productsCard";
import { useEffect, useState } from "react";
import axios from "axios";

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
    </>
  );
};
