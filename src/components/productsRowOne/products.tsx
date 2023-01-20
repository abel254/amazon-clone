import "./products.css";
import { ProductsCard } from "./productsCard";
import { GrStar } from "react-icons/gr";

const image1 = require("./men-clothing.jpeg");

export const ProductsComponent = () => {
  const products = [
    {
      productType: `men's clothing`,
      image: image1,
      productName: "Mens Causal",
      icon: [<GrStar />, <GrStar />],
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley...",
      cost: "$22.3",
    },
    {
      productType: `men's clothing`,
      image: image1,
      productName: "Mens Causal",
      icon: [<GrStar />, <GrStar />],
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley...",
      cost: "$22.99",
    },
    {
      productType: `men's clothing`,
      image: image1,
      productName: "Mens Causal",
      icon: [<GrStar />, <GrStar />],
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley...",
      cost: "$22.99",
    },
    {
      productType: `men's clothing`,
      image: image1,
      productName: "Mens Causal",
      icon: [<GrStar />, <GrStar />],
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley...",
      cost: "$22.99",
    },
  ];

  return (
    <>
      <section className="products">
        {products.map((product, index) => {
          return <ProductsCard key={index} {...product} />;
        })}
      </section>
    </>
  );
};
