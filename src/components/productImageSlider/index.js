"use client";
import styles from "./productImageSlider.module.css";
import Image from "next/image";
//Import component
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

//
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// image
import sunglass1 from "../../assets/Men/men-sunglass1.png";
import sunglass2 from "../../assets/Men/men-sunglass2.png";
import sunglass3 from "../../assets/Men/men-sunglass3.png";
import Hat1 from "../../assets/Men/BoyModPorkpieHat1.png";
import Hat2 from "../../assets/Men/BoyModPorkpieHat2.png";
import Hat3 from "../../assets/Men/BoyModPorkpieHat3.png";

const imageData = [sunglass1, sunglass2, sunglass3, Hat1, Hat2, Hat3];

function ProductDetailsSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider
        className={styles.firstImageContainer}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {imageData.map((image, ind) => (
          <div key={ind}>
            <Image className={styles.firstImage} src={image} alt="" />
          </div>
        ))}
      </Slider>
      {/* Second Slider */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
        className={styles.secondImageAllDataContainer}
      >
        {imageData.map((image, ind) => (
          <div className={styles.secondImageContainer} key={ind}>
            <Image className={styles.secondImage} src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductDetailsSlider;
