"use client";
import styles from "./leastWork.module.css";
import Image from "next/image";
import Link from "next/link";

// import slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// Import image
import workImage1 from "../../../assets/image/OurWork/work01.png";
import workImage2 from "../../../assets/image/OurWork/work02.png";
import workImage3 from "../../../assets/image/OurWork/work03.png";
import workImage4 from "../../../assets/image/OurWork/work04.png";
import workImage5 from "../../../assets/image/OurWork/work05.png";
import workImage6 from "../../../assets/image/OurWork/work06.png";
import workImage7 from "../../../assets/image/OurWork/work07.png";
import workImage8 from "../../../assets/image/OurWork/work08.png";

export default function ClientCompany() {
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
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectData = [
    {
      image: workImage1,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/",
    },
    {
      image: workImage2,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/about",
    },
    {
      image: workImage3,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/services",
    },
    {
      image: workImage4,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/blogs",
    },
    {
      image: workImage5,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/contact",
    },
    {
      image: workImage6,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/services",
    },
    {
      image: workImage7,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/",
    },
    {
      image: workImage8,
      whoseProject: "Our Projects",
      projectTitle: "Website Design For Digital Agency",
      url: "https://dev.ecoysoft.com/contact",
    },
  ];

  return (
    <section className={styles.projectAllDataContainer}>
      <div className={styles.tabsAllDataContainer}>
        <div className={styles.leastWorkLineTextAndLineContainer}>
          <p className={styles.leastWorkText}>Least Work</p>
          <p className={styles.leastWorkLineText}></p>
        </div>
        <h1 className={styles.projectHeaderTitle}>
          Our Project Make Us <br className={styles.projectHeaderTitleBrTag} />
          Proud
        </h1>
      </div>

      <Slider className={styles.sliderContainer} {...settings}>
        {projectData.map((project, ind) => (
          <div className={styles.sliderAllDataContainer} key={ind}>
            <Link href={project.url} target={"_blank"}>
              <Image
                className={styles.sliderWorkImage}
                src={project.image}
                alt=""
              />

              <div className={styles.projectInfoAllDataContainer}>
                <div className={styles.projectInfoContainer}>
                  <p className={styles.whoseProjectText}>
                    {project.whoseProject}
                  </p>
                  <h3 className={styles.projectTitleText}>
                    {project.projectTitle}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}
