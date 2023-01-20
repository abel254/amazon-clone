import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./banner.css";

const image1 = require("./img1.jpg");
const image2 = require("./img2.jpg");
const image3 = require("./img3.jpeg");
const image4 = require("./img4.jpg");
const image5 = require("./img5.jpg");

export const BannerComponent = () => {
  return (
    <>
      <section className="banner">
        <Carousel className="main-slide">
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
          <div>
            <img src={image4} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={image5} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </section>
    </>
  );
};
