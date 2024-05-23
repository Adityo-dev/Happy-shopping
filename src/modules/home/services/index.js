import styles from "./service.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPOER IMAGE
import web_development_icon from "../../../assets/logo/Services/web-development.png";
import app_development_icon from "../../../assets/logo/Services/app-development.png";
import security_icon from "../../../assets/logo/Services/security.png";
// IMPORT REACT ICONS
import { MdArrowForward } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

export default function ServicesHome() {
  const services = [
    {
      image: web_development_icon,
      service: "Web Development",
      title:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply ",
      url: "/service",
    },
    {
      image: app_development_icon,
      service: "Mobile Development",
      title:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply ",
      url: "/service",
    },
    {
      image: security_icon,
      service: "Cyber Security",
      title:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply ",
      url: "/service",
    },
  ];
  return (
    <>
      <section className={styles.servicesAllDataContainer}>
        <div className={styles.servicesTitleTextContainer}>
          <h2 className={styles.servicesTitleText}>What We Have To Offer</h2>

          <p>
            <Link
              className={styles.servicesViewAllServicesBtn}
              href={"/service"}
            >
              View all Services
              <MdArrowForward className={styles.servicesViewAllServicesIcon} />
            </Link>
          </p>
        </div>

        <div className={styles.servicesCardContainer}>
          {services.map((service, ind) => (
            <div
              className={`${styles.servicesCard} ${
                ind === 1 ? styles.servicesHighLightBg : ""
              }`}
              key={ind}
            >
              <Image
                className={styles.servicesCardImage}
                src={service?.image}
                width={70}
                height={70}
              />
              <h3
                className={`${styles.servicesCardTitleText} ${
                  ind === 1 ? styles.servicesHighLightText : ""
                }`}
              >
                {service?.service}
              </h3>
              <p
                className={`${styles.servicesCardSubTitleText} ${
                  ind === 1 ? styles.servicesHighLightText : ""
                }`}
              >
                {service?.title}
              </p>

              <Link
                className={`${styles.servicesReadMoreBtn} ${
                  ind === 1 ? styles.servicesReadMoreHighLightBtn : ""
                }`}
                href={service?.url}
              >
                Read More
                <IoIosArrowRoundForward
                  className={`${styles.servicesReadMoreBtnIcon} ${
                    ind === 1 ? styles.servicesReadMoreHighLightBtnIcon : ""
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <WhoWeAre />
    </>
  );
}
