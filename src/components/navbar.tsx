import { FiMenu } from "react-icons/fi";

const NavbarComponent = () => {
  return (
    <>
      <section className="navbar">
        <nav>
          <ul>
            <li>
              <FiMenu />
              <a href="">All</a>
              <a href="">Today's Deals</a>
              <a href="">Customer Service</a>
              <a href="">Registry</a>
              <a href="">Gift Cards</a>
              <a href="">Sell</a>
            </li>
          </ul>
        </nav>
        <div className="shop-deals">
          <a href="">Shop deals in Electronics</a>
        </div>
      </section>
    </>
  );
};

export default NavbarComponent;
