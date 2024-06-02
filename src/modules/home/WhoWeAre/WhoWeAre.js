import React from "react";
import styles from "./whoWeAre.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPORT IMAGE
import WhoWeAre_img from "../../../assets/image/WhoWeAre/WhoWeAre_img.png";
import vector1_img from "../../../assets/image/WhoWeAre/vector_image.png";
import vector2_img from "../../../assets/logo/WhoWeAre/Vector.png";
import Success_img from "../../../assets/logo/WhoWeAre/Success-icon.png";
// IMPORT REACT ICONS
import { GoCheck } from "react-icons/go";

export default function WhoWeAre() {
  const items = [
    "Strategy Consulting",
    "Mistakes To Avoid",
    "Analytics and Reporting",
    "Your Startup",
  ];
  return (
    <section className={styles.whoWeAreAllDataContainer}>
      <div className={styles.whoWeAreDataContainer}>
        <div className={styles.whoWeAreImageContainer}>
          <Image
            className={styles.whoWeAreImage}
            src={WhoWeAre_img}
            width={592}
            height={479}
            alt=""
          />
          <Image
            className={styles.whoWeAreImageVector1}
            src={vector2_img}
            width={100}
            height={100}
            alt=""
          />
          <div className={styles.whoWeAreImageSuccessContainer}>
            <Image
              className={styles.whoWeAreImageSuccessImg}
              src={Success_img}
              width={44}
              height={62}
              alt=""
            />
            <p className={styles.whoWeAreImageSuccessNumText}>200+</p>
            <p className={styles.whoWeAreImageSuccessText}>Awards Winners </p>
          </div>
        </div>

        <div className={styles.whoWeAreTextDataContainer}>
          <div className={styles.whoWeAreTextContainer}>
            <p className={styles.whoWeAreHrLine}></p>
            <p className={styles.whoWeAreText}>Who we are</p>
          </div>
          <h3 className={styles.whoWeAreTitleText}>
            Designing dreams, building brands
          </h3>
          <p className={styles.whoWeAreSubTitleText}>
            It is a long established fact that a reader will be distracted by le
            content of a page when looking at its layout. Lorem Ipsum is simply
            dummy tex
          </p>

          <p className={styles.whoWeAreSubTitleText}>
            It is a long established fact that a reader will be distracted bye
            content of a page when looking at its layout.
          </p>

          <div className={styles.whoWeAreItemsListContainer}>
            {items.map((item, ind) => (
              <div className={styles.whoWeAreItemsContainer} key={ind}>
                <GoCheck className={styles.whoWeAreItemsCheckIcon} />
                <p className={styles.whoWeAreItemsText}>{item}</p>
              </div>
            ))}
          </div>

          <Link className={styles.whoWeAreReadMoreBtn} href={"/"}>
            Read more
          </Link>
        </div>
      </div>

      <div>
        <Image
          className={styles.whoWeAreImageVector2}
          src={vector1_img}
          width={690}
          height={690}
          alt=""
        />
      </div>
    </section>
  );
}
