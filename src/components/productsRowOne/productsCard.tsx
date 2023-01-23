import { prototype } from "events";
import "./productsCard.css";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsCardProps } from "../props/Product.type";


export const ProductsCard = ({
  title,
  price,
  description,
  category,
  image,
}: ProductsCardProps) => {
  const newDescription = description.slice(0, 52);
  const newTitle = title.slice(0, 18);

  return (
    <>
      <section className="products-card">
        <p className="product-type">{category}</p>
        <div className="info">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <h5>{newTitle}</h5>
          <div className="rating-icons">{}</div>
          <p>{newDescription}...</p>
          <h4>${price}</h4>
          <button>Add to Basket</button>
        </div>
      </section>
    </>
  );
};
