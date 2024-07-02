"use client";
import styles from "./slider.module.css";
import Image from "next/image";
import Link from "next/link";

// Import component
import Button from "../button";

// import slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Card from "../card";

export default function DSlider({ sliderData }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className={styles.sliderAllDataContainer}>
        <Slider {...settings}>
          {sliderData.map((cardData, ind) => (
            <div key={ind}>
              <Card cardData={cardData} />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.viewAllBtn}>
        <Button btnName={"View All"} btnUrl={""} />
      </div>
    </section>
  );
}
