// import logo from "../assets/amazon-logo.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const logo = require("../assets/amazon-logo2.png");

const HeaderComponent = () => {
  return (
    <>
      <section className="header" id="header">
        <img src={logo} alt="" />

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
          <AiOutlineShoppingCart />
          <span>0</span>
          <p>Basket</p>
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
