import React from "react";
import Carousel from "better-react-carousel";
import L from "../assets/l.jpg";
import L1 from "../assets/l1.jpg";

const Card = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <img src={L} width="100%" alt="Love" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={L1} width="100%" alt="Love" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={L} width="100%" alt="Love" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Card;
