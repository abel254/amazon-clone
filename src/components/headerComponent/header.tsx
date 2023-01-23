import "./header.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

// const logo = require("../assets/amazon-logo2.png");
const logo = require("../../assets/amazon-logo2.png");

const HeaderComponent = () => {
  return (
    <>
      <section className="header" id="header">
        <img src={logo} alt="Amazon-Logo" />

        <div className="searchbar">
          <input type="text" />
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="signin">
          <p>
            Hello, sign in
            <br />
            <span>Account & Lists</span>
          </p>
        </div>
        <div className="return-orders">
          <p>
            Returns <br />
            <span>& Orders</span>
          </p>
        </div>
        <div className="basket">
          <Link to="/cart" className="basket-link">
            <AiOutlineShoppingCart />
            <span>0</span>
            <p>Basket</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
