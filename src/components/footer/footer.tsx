import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

export const FooterComponent = () => {
  return (
    <>
      <section className="footer">
        <a href="#">
          <button>Back to Top</button>
        </a>
        <div className="footer-info">
          <Container>
            <Row sm={2} lg={4}>
              <Col>
                <div className="know-us footer-div">
                  <h5>Get to know us</h5>
                  <a href="">Careers</a>
                  <a href="">Blog</a>
                  <a href="">About Amazon</a>
                  <a href="">Investor Reactions</a>
                  <a href="">Amazon Devices</a>
                  <a href="">Amazon Tours</a>
                </div>
              </Col>
              <Col>
                <div className="make-money footer-div">
                  <h5>Make Money with Us</h5>
                  <a href="">Sell Product on Amazon</a>
                  <a href="">Sell on Amazon Business</a>
                  <a href="">Sell Amazon Apps</a>
                  <a href="">Become an Investor</a>
                  <a href="">Sell Publish with Us</a>
                  <a href="">Host on Amazon Hub</a>
                </div>
              </Col>
              <Col>
                <div className="business footer-div">
                  <h5>Amazon Business Products</h5>
                  <a href="">Shop with Points</a>
                  <a href="">Record your Balance</a>
                  <a href="">Amazon Currency Converter</a>
                  <a href="">Become an Investor</a>
                  <a href="">Sell Publish with Us</a>
                  <a href="">Host on Amazon Hub</a>
                </div>
              </Col>
              <Col>
                <div className="covid footer-div">
                  <h5>Amazon and Covid-19</h5>
                  <a href="">Your account</a>
                  <a href="">Your orders</a>
                  <a href="">Shipping rates and policies</a>
                  <a href="">Shipping rates and policies</a>
                  <a href="">Manage your content and devices</a>
                  <a href="">Help</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
