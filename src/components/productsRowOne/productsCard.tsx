import { prototype } from "events";
import "./productsCard.css";
import { ReactNode } from "react";

type ProductsCardProps = {
  productType: string;
  image: string;
  productName: string;
  icon: ReactNode;
  description: string;
  cost: string;
};

export const ProductsCard = ({
  productType,
  image,
  productName,
  icon,
  description,
  cost,
}: ProductsCardProps) => {
  return (
    <>
      <section className="products-card">
        <p className="product-type">{productType}</p>
        <div className="info">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <h5>{productName}</h5>
          <div className="rating-icons">{icon}</div>
          <p>{description}</p>
          <h4>{cost}</h4>
          <button>Add to Basket</button>
        </div>
      </section>
    </>
  );
};
