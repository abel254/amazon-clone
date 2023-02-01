import "./header.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
} from "react-bootstrap";

// const logo = require("../assets/amazon-logo2.png");
const logo = require("../../assets/amazon-logo2.png");

const HeaderComponent = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <>
      {/* <section className="header" id="header">
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
            <span>{cartQuantity}</span>
            <p>Basket</p>
          </Link>
        </div>
      </section> */}
      <section className="header">
        <Navbar variant="dark" expand="lg" className="m-0 p-0">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="Amazon-Logo" />
            </Navbar.Brand>

            <Form className="d-flex w-50">
              <div className="searchbar">
                <input type="text" />
                <div className="search-icon">
                  <AiOutlineSearch />
                </div>
              </div>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll ">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">
                  <div className="signin d-flex align-item-center h-100">
                    <p>
                      Hello, sign in
                      <br />
                      <span>Account & Lists</span>
                    </p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="return-orders">
                    <p>
                      Returns <br />
                      <span>& Orders</span>
                    </p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="basket d-flex align-items-center h-100">
                    <Link to="/cart" className="basket-link">
                      <AiOutlineShoppingCart />
                      <span>{cartQuantity}</span>
                      <p>Basket</p>
                    </Link>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default HeaderComponent;
