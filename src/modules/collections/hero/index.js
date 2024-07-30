"use client";
import styles from "./collectionHero.module.css";
import Link from "next/link";
import Image from "next/image";
// image
import hat1 from "../../../assets/Men/BoyModPorkpieHat1.png";
import hat2 from "../../../assets/Men/BoyModPorkpieHat2.png";
import hat3 from "../../../assets/Men/BoyModPorkpieHat3.png";
// icon
import { SlArrowRight } from "react-icons/sl";

const CollectionsHero = ({ heroData }) => {
  return (
    <section>
      <div className={styles.collectionsHeroAllDataContainer}>
        <div className={styles.collectionsHeroAllTextData}>
          <h2 className={styles.collectionsHeroTitle}>
            {heroData.productName}
          </h2>
          <p className={styles.collectionsHeroSubTitle}>
            <span>
              <Link className={styles.homeText} href={"/"}>
                Home
              </Link>
            </span>
            <SlArrowRight className={styles.arrowIcon} />
            <span className={styles.collectionsName}>
              {heroData.productName}
            </span>
          </p>

          <p className={styles.collectionsHeroSubInfo}>
            Welcome to our collection, where excitement meets discovery. We're
            committed to keeping you at the forefront of fashion, technology,
            and lifestyle trends.
          </p>
        </div>

        <div>
          <Image className={styles.collectionsHeroImage} src={hat1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CollectionsHero;
