import axios from "axios";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formCurrency";
import { ProductsCardProps } from "../props/Product.type";
import "./cartCard.css";

type cartCardProps = {
  id: number;
  quantity: number;
};

export const CartCard = ({ id, quantity }: cartCardProps) => {
  const [apiProducts, setApiProducts] = useState<ProductsCardProps[]>([]);
  const { getItemQuantity, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();

  let itemQuantity = getItemQuantity(id);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
    });
  }, []);

  const { removeFromCart } = useShoppingCart();
  const item = apiProducts.find((i) => Number(i.id) === id);
  if (item == null) return null;

  const newDescription = item.description.slice(0, 52);
  const newTitle = item.title.slice(0, 18);

  return (
    <div className="cart d-flex align-items-center justify-content-between">
      <div className="image">
        <img src={item.image} alt="Image" />
      </div>
      <div className="info">
        <span>{newTitle}</span>
        <span>{newDescription}</span>
        <span>{formatCurrency(Number(item.price))}</span>
      </div>

      <div className="buttons d-flex flex-column">
        <button onClick={() => increaseCartQuantity(Number(item.id))}>
          Add to Basket
        </button>
        <button onClick={() => removeFromCart(Number(item.id))}>Remove</button>
      </div>
    </div>
  );
};
