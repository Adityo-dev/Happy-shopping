"use client";
import styles from "./feedback.module.css";
import Image from "next/image";
import Link from "next/link";
// import slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import image
import logo from "../../../assets/logo/clientsFeedback/”.png";
import Ellipse1 from "../../../assets/image/clientsFeedback/Ellipse1.png";
import Ellipse2 from "../../../assets/image/clientsFeedback/Ellipse2.png";
import Ellipse3 from "../../../assets/image/clientsFeedback/Ellipse3.png";
import start from "../../../assets/logo/clientsFeedback/start.png";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function Feedback() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const clientsFeedback = [
    {
      titleL:
        "Their team of experts demonstrated unparalleled professionalism and expertise throughout the entire implementation process. From initial consultation to final deployment,",
      name: "Pelican steve",
      service: "Web development ",
      image: Ellipse1,
      starts: [start, start, start, start, start],
    },
    {
      titleL:
        "Their team of experts demonstrated unparalleled professionalism and expertise throughout the entire implementation process. From initial consultation to final deployment,",
      name: "Jack Kalis Harsh",
      service: "App development ",
      image: Ellipse2,
      starts: [start, start, start, start, start],
    },
    {
      titleL:
        "Their team of experts demonstrated unparalleled professionalism and expertise throughout the entire implementation process. From initial consultation to final deployment,",
      name: "Alex Hils King",
      service: "UI/UX Designer",
      image: Ellipse3,
      starts: [start, start, start, start, start],
    },
  ];
  return (
    <>
      <section className={styles.clientsFeedbackAllDatContainer}>
        <div className={styles.clientsFeedbackContainer}>
          <div>
            <div className={styles.clientsFeedbackHeaderTitleTextContainer}>
              <p className={styles.clientsFeedbackHeaderTitleText}>
                What say clients
              </p>
              <p className={styles.clientsFeedbackHeaderTitleTextHrLine}></p>
            </div>
            <h1 className={styles.clientsFeedbackTitleText}>
              Our Clients are important to Us
            </h1>
          </div>

          <Slider {...settings} className={styles.clientsFeedbackCardContainer}>
            {clientsFeedback.map((fb, ind) => (
              <div className={styles.clientsFeedbackCard} key={ind}>
                <div className={styles.clientsFeedbackCardHeaderLogo}>
                  <Image
                    className={styles.clientsFeedbackLogo}
                    src={logo}
                    width={0}
                    height={0}
                    alt=""
                  />

                  <div className={styles.clientsFeedbackCardStart}>
                    {fb.starts.map((start, ind) => (
                      <Image
                        className={styles.clientsFeedbackStartImage}
                        key={ind}
                        src={start}
                        width={0}
                        height={0}
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <p className={styles.clientsFeedbackCardTitleText}>
                  {fb.titleL}
                </p>

                <div className={styles.clientsFeedbackCardDataContainer}>
                  <Image
                    className={styles.clientsFeedbackClientsImage}
                    src={fb.image}
                    width={0}
                    height={0}
                    alt="clients image"
                  />
                  <div>
                    <p className={styles.clientsFeedbackCardName}>{fb.name}</p>
                    <p className={styles.clientsFeedbackCardService}>
                      {fb.service}
                    </p>
                  </div>
                </div>
                <p className={styles.clientsFeedbackCardHrLine}></p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
