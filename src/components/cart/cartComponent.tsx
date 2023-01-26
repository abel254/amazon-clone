import axios from "axios";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formCurrency";
import "./cart.css";
import { CartCard } from "./cartCard";

const cartImage = require("../../assets/cart-image.png");

export const CartComponent = () => {
  const { cartItems } = useShoppingCart();

  const [apiProducts, setApiProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
    });
  }, []);


  return (
    <>
      <section className="cart">
        <div className="cart-info">
          <h3 className="cart-status">Your Amazon Shopping Basket is Empty</h3>
          <div className="cart-products">
            {cartItems.map((product) => {
              return <CartCard key={product.id} {...product} />;
            })}
          </div>
        </div>
        <div className="cart-total">
          <h3 className="subtotal">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = apiProducts.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </h3>
          <button>Sing in to Checkout</button>
        </div>
      </section>
    </>
  );
};
