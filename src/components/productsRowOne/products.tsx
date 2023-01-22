import "./products.css";
import { ProductsCard } from "./productsCard";
import { GrStar } from "react-icons/gr";
import { useEffect, useState } from "react";
import axios from "axios";


export const ProductsComponent = () => {
  const [apiProducts, setApiProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
    });
  }, []);

  let slicedApiProducts = apiProducts.slice(0, 4);

  return (
    <>
      <section className="products">
        {slicedApiProducts.map((product) => {
          return <ProductsCard key={product.id} {...product} />;
        })}
      </section>
      {/* <section className="products">
        {apiProducts.map((product) => {
          return <ProductsCard key={product.id} {...product} />;
        })}
      </section> */}
      {/* <section className="products">
        {products.map((product, index) => {
          return <ProductsCard key={index} {...product} />;
        })}
      </section> */}
    </>
  );
};
