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
  const { increaseCartQuantity } = useShoppingCart();

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
    <Stack
      direction="horizontal"
      gap={2}
      className="bg-white p-2 ml-4"
      style={{ boxShadow: "1px 1px 20px #ccd1d1" }}
    >
      <div className="image h-5" style={{ height: "9.6em", width: "8em" }}>
        <img src={item.image} alt="cart-image" className="w-100 h-100" />
      </div>

      <div className="info">
        <Stack gap={1}>
          <span>{newTitle}</span>
          <span>{newDescription}</span>
          <span>{formatCurrency(Number(item.price))}</span>
        </Stack>
      </div>

      <div className="buttons d-flex flex-column ms-auto mr-3">
        <Stack gap={2}>
          <button onClick={() => increaseCartQuantity(Number(item.id))}>
            Add to Basket
          </button>
          <button onClick={() => removeFromCart(Number(item.id))}>
            Remove
          </button>
        </Stack>
      </div>
    </Stack>
  );
};
