import Slide1 from "../assets/slider1.png";
import Slide2 from "../assets/slider2.png";
import Slide3 from "../assets/slider3.png";
import Slide4 from "../assets/slider4.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  marginBottom:"80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "520px",
};

const slideImages = [
  {
    url: Slide1,
  },
  {
    url: Slide2,
  },
  {
    url: Slide3,
  },
  {
    url: Slide4,
  },
];

export const Slider = () => {
  return (
    <Slide>
      {slideImages.map((slideImage, index) => (
        <div key={index}>
          <div
            style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};
