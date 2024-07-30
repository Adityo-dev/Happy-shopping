"use client";
import styles from "./hero.module.css";
import Image from "next/image";

// Import Compo
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// Import Image
import men_image from "../../../assets/Home/Image/men.png";
import woMen_image from "../../../assets/Home/Image/women.png";
import baby_image from "../../../assets/Home/Image/baby.png";

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "@/components/button";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const homeHeroSliderData = [
    {
      title: "Men collection",
      subTitle: "Elevate Your Basics with a Touch of Glam",
      image: men_image,
      url: "/collections/mens",
    },
    {
      title: "Women collection",
      subTitle: "Elevate Your Basics with a Touch of Glam",
      image: woMen_image,
      url: "/collections/womens",
    },
    {
      title: "Baby collection",
      subTitle: "Elevate Your Basics with a Touch of Glam",
      image: baby_image,
      url: "/collections/baby",
    },
  ];

  return (
    <>
      <section className={styles.sliderAllDataContainer}>
        <Slider {...settings}>
          {homeHeroSliderData.map((sliderData, ind) => (
            <div key={ind}>
              <div className={styles.sliderDataContainer}>
                <div>
                  <h3 className={styles.sliderDataTitle}>{sliderData.title}</h3>
                  <p className={styles.sliderDataSubTitle}>
                    {sliderData.subTitle}
                  </p>
                  <Button btnName={"Shop now"} btnUrl={sliderData.url} />
                </div>

                <div>
                  <Image
                    className={styles.sliderDataImage}
                    src={sliderData.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
