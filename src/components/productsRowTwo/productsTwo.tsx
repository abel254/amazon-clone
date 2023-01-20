import "./productsTwo.css";
import { GrStar } from "react-icons/gr";
import { ProductsCard } from "../productsRowOne/productsCard";

const image1 = require("./jewellery.jpeg");
const image2 = require("./electronics.jpg");
const image3 = require("./women.jpg");
const image4 = require("./computing.png");

export const ProductsTwoComponent = () => {
  const products = [
    {
      productType: `jewelly`,
      image: image1,
      productName: "White Gold Plat",
      icon: [<GrStar />, <GrStar />],
      description: "Classic Created Wedding Engagement Solitaire Diamond...",
      cost: "$67.89",
    },
    {
      productType: `jewelly`,
      image: image1,
      productName: "White Gold Plat",
      icon: [<GrStar />, <GrStar />],
      description: "Classic Created Wedding Engagement Solitaire Diamond...",
      cost: "$67.89",
    },
    {
      productType: `jewelly`,
      image: image1,
      productName: "White Gold Plat",
      icon: [<GrStar />, <GrStar />],
      description: "Classic Created Wedding Engagement Solitaire Diamond...",
      cost: "$67.89",
    },
    {
      productType: `jewelly`,
      image: image1,
      productName: "White Gold Plat",
      icon: [<GrStar />, <GrStar />],
      description: "Classic Created Wedding Engagement Solitaire Diamond...",
      cost: "$67.89",
    },
    {
      productType: `electronics`,
      image: image2,
      productName: "WD 4TB Gamming D",
      icon: [<GrStar />, <GrStar />],
      description: "Expand Your PS4 Gamming Experience, Play anywhere fast...",
      cost: "$67.89",
    },
    {
      productType: `electronics`,
      image: image2,
      productName: "WD 4TB Gamming D",
      icon: [<GrStar />, <GrStar />],
      description: "Expand Your PS4 Gamming Experience, Play anywhere fast...",
      cost: "$67.89",
    },
    {
      productType: `electronics`,
      image: image2,
      productName: "WD 4TB Gamming D",
      icon: [<GrStar />, <GrStar />],
      description: "Expand Your PS4 Gamming Experience, Play anywhere fast...",
      cost: "$67.89",
    },
    {
      productType: `electronics`,
      image: image2,
      productName: "WD 4TB Gamming D",
      icon: [<GrStar />, <GrStar />],
      description: "Expand Your PS4 Gamming Experience, Play anywhere fast...",
      cost: "$67.89",
    },
    {
      productType: `women's clothing`,
      image: image3,
      productName: "MBJ Women's Sol",
      icon: [<GrStar />, <GrStar />],
      description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not…",
      cost: "$9.95",
    },
    {
      productType: `women's clothing`,
      image: image3,
      productName: "MBJ Women's Sol",
      icon: [<GrStar />, <GrStar />],
      description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not…",
      cost: "$9.95",
    },
    {
      productType: `women's clothing`,
      image: image3,
      productName: "MBJ Women's Sol",
      icon: [<GrStar />, <GrStar />],
      description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not…",
      cost: "$9.95",
    },
    {
      productType: `women's clothing`,
      image: image3,
      productName: "MBJ Women's Sol",
      icon: [<GrStar />, <GrStar />],
      description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not…",
      cost: "$9.95",
    },
    {
      productType: `computing`,
      image: image4,
      productName: "Laptop Lacunari",
      icon: [<GrStar />, <GrStar />],
      description:
        "Core i5, 64 Bits Operating System, 6.2 Inches, 1TB Harddisk, Touchscreen...",
      cost: "$9.95",
    },
    {
      productType: `computing`,
      image: image4,
      productName: "Laptop Lacunari",
      icon: [<GrStar />, <GrStar />],
      description:
        "Core i5, 64 Bits Operating System, 6.2 Inches, 1TB Harddisk, Touchscreen...",
      cost: "$9.95",
    },
    {
      productType: `computing`,
      image: image4,
      productName: "Laptop Lacunari",
      icon: [<GrStar />, <GrStar />],
      description:
        "Core i5, 64 Bits Operating System, 6.2 Inches, 1TB Harddisk, Touchscreen...",
      cost: "$9.95",
    },
    {
      productType: `computing`,
      image: image4,
      productName: "Laptop Lacunari",
      icon: [<GrStar />, <GrStar />],
      description:
        "Core i5, 64 Bits Operating System, 6.2 Inches, 1TB Harddisk, Touchscreen...",
      cost: "$9.95",
    },
  ];

  return (
    <>
      <section className="products-two">
        {products.map((product, index) => {
          return <ProductsCard key={index} {...product} />;
        })}
      </section>
    </>
  );
};
