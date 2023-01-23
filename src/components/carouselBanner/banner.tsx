import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./banner.css";

const image1 = require("../../assets/img1.jpg");
const image2 = require("../../assets/img2.jpg");
const image3 = require("../../assets/img3.jpeg");
const image4 = require("../../assets/img4.jpg");
const image5 = require("../../assets/img5.jpg");


export const BannerComponent = () => {
  return (
    <>
      <section className="banner">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          swipeable={false}
          showThumbs={false}
          showStatus={false}
          className="main-slide"
        >
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
