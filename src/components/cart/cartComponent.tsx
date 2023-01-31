import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formCurrency";
import Loading from "../Loading";
import "./cart.css";
import { CartCard } from "./cartCard";

const cartImage = require("../../assets/cart-image.png");

export const CartComponent = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const [apiProducts, setApiProducts] = useState<any[]>([]);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setApiProducts(res.data);
      setLoading(true)
    });
  }, []);


  return (
    <>
      

      <section className="cart d-flex justify-content-between">
        <div className="cart-info col-sm-12 col-md-8">
          <div className="cart-banner col-sm-12"></div>
          {cartQuantity === 0 ? (
            <h4>Your Shopping Basket is Empty</h4>
          ) : (
            <h4>Your Shopping Basket List</h4>
          )}
          <div className="cart-products"></div>
          <Row>
            <Stack gap={2} className="mt-3 mb-3">
              {loading ? cartItems.map((product) => (
                <Col>
                  <CartCard key={product.id} {...product} />
                </Col>
              )): <Loading/>}
            </Stack>
          </Row>
        </div>

        <div className="cart-total bg-white m-3 p-2">
          <h4 className="subtotal fs-5 fw-bold">
            Subtotal{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = apiProducts.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </h4>
        </div>
      </section>
    </>
  );
};
