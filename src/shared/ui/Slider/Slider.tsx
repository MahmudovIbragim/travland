/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import { useState } from "react";
import { mockSliderData } from "../../../mock/data/data";
import SliderCard from "../sliderCard/SliderCard";

const CustomPrevArrow = (props: any) => (
  <div className="custom-arrow custom-prev" onClick={props.onClick}>
    ◀
  </div>
);

const CustomNextArrow = (props: any) => (
  <div className="custom-arrow custom-next" onClick={props.onClick}>
    ▶
  </div>
);

const CustomSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    arrows: true,
    beforeChange: (_: number, next: number) =>
      setActiveSlide(Math.floor(next / 5)),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const totalRows = Math.ceil(mockSliderData.length / 5);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {mockSliderData.map((item) => (
          <SliderCard
            classNames="slide"
            days={item.days}
            id={item.id}
            img={item.img}
            location={item.location}
            price={item.price}
            title={item.title}
          />
        ))}
      </Slider>
      <div className="custom-dots">
        {Array.from({ length: totalRows }).map((_, index) => (
          <div
            key={index}
            className={`dot-line ${index === activeSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
