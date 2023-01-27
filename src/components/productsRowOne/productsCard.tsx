import { prototype } from "events";
import "./productsCard.css";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsCardProps } from "../props/Product.type";
import { formatCurrency } from "../../utilities/formCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Card } from "react-bootstrap";

export const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductsCardProps) => {
  const newDescription = description.slice(0, 42);
  const newTitle = title.slice(0, 18);

  const { increaseCartQuantity, getItemQuantity } = useShoppingCart();

  let quantity = getItemQuantity(Number(id));

  return (
    <>
      <Card className="products-card h-100 mb-4">
        <Card.Text className="product-type text-muted ms-auto fst-italic mr-3">
          {category}
        </Card.Text>
        <div className="image w-100 d-flex justify-content-center">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold fs-6">{newTitle}</Card.Title>
          <Card.Text className="description mt-auto">
            {newDescription}...
          </Card.Text>
          <Card.Subtitle className="mb-3">
            {formatCurrency(Number(price))}
          </Card.Subtitle>
          <button
            className="info-button w-100"
            onClick={() => increaseCartQuantity(Number(id))}
          >
            Add to Basket
          </button>
        </Card.Body>
      </Card>
    </>
  );
};
