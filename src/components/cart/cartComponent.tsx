import "./cart.css";

const cartImage = require('../../assets/cart-image.png')

export const CartComponent = () => {
  return <>
  <section className="cart">
    <div className="cart-info">
        <div className="cart-image">
            {/* <img src={cartImage} alt="Cart Image" /> */}
        </div>
        <h3 className="cart-status">Your Amazon Shopping Basket is Empty</h3>
        <div className="cart-products"></div>
    </div>
    <div className="cart-total">
        <h3 className="subtotal">Subtotal 204.03</h3>
        <button>Sing in to Checkout</button>
    </div>
  </section>
  </>;
};
