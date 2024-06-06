import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

import { MdArrowForward } from "react-icons/md";

// import logo
import web_development_logo from "../../../assets/logo/Services/web-development.png";
import app_development_logo from "../../../assets/logo/Services/app-development.png";
import security_development_logo from "../../../assets/logo/Services/security.png";
import it_consultancy_logo from "../../../assets/logo/Services/It-consultancy.png";
import backup_Recovery_logo from "../../../assets/logo/Services/backup-&-Recovery.png";
import ui_ux_logo from "../../../assets/logo/Services/ui-ux.png";
import graphic_designer_logo from "../../../assets/logo/Services/graphic-designer.png";
import product_designer_logo from "../../../assets/logo/Services/product-design.png";
import branding_designer_logo from "../../../assets/logo/Services/Branding-design.png";
import Union_logo from "../../../assets/logo/Services/Union.png";

export default function ServicesCategory() {
  const servicesCategory = [
    {
      image: web_development_logo,
      name: "Web Development",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: app_development_logo,
      name: "App Development",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: security_development_logo,
      name: "Cyber Security",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: it_consultancy_logo,
      name: "IT Consultancy",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: backup_Recovery_logo,
      name: "Backup & Recovery",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: ui_ux_logo,
      name: "UI/UX Design",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: graphic_designer_logo,
      name: "Graphic Design",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: product_designer_logo,
      name: "Product Design",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
    {
      image: branding_designer_logo,
      name: "Branding Designer",
      title:
        "It is a long established fact desins that a reader will be distracted thats by the readable desihb content ",
      url: "/",
    },
  ];
  return (
    <section className={styles.servicesCategoryAllDataContainer}>
      <div>
        <h2 className={styles.servicesCategoryHeaderTitle}>
          Find Your Category
        </h2>

        <p className={styles.servicesCategoryHeaderSubTitle}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority <br /> have suffered alteration in some form, .
        </p>
      </div>

      <div className={styles.servicesCategoryCardContainer}>
        {servicesCategory.map((service, ind) => (
          <div className={styles.servicesCategoryCardDataContainer} key={ind}>
            <div className={styles.servicesCategoryImageAndNumContainer}>
              <Image
                className={styles.servicesCategoryLogo}
                src={service.image}
                alt=""
              />

              <Image
                className={styles.servicesCategoryUnionLogo}
                src={Union_logo}
                alt=""
              />
              <h4 className={styles.servicesCategoryNumber}>
                {ind <= 8 ? 0 : ""}
                {ind + 1}
              </h4>
            </div>
            <h3 className={styles.servicesCategoryName}>{service.name}</h3>
            <p className={styles.servicesCategoryTitle}>{service.title}</p>

            <Link className={styles.servicesCategoryBtn} href={service.url}>
              Read more <MdArrowForward />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
