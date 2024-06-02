import styles from "./pricing.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPORT REACT ICONS
import { IoIosCheckbox } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
// IMPORT IMAGE
import Union_icon from "../../../assets/logo/Pricing/Union.png";

export default function Pricing() {
  const pricingCardData = [
    {
      type: "Basic plan",
      price: "399",
      category: [
        "Mistakes to avoid",
        "knew about fonts",
        "Your startup",
        "Winning metric for your ",
        "Knew about fonts",
        "Your startup",
      ],
    },
    {
      type: "Optimum plan",
      price: "699",
      category: [
        "Mistakes to avoid",
        "knew about fonts",
        "Your startup",
        "Winning metric for your",
        "Knew about fonts",
        "Your startup",
      ],
    },
    {
      type: "Premium plan",
      price: "999",
      category: [
        "Mistakes to avoid",
        "knew about fonts",
        "Your startup",
        "Winning metric for your ",
        "Knew about fonts",
        "Your startup",
      ],
    },
  ];
  return (
    <section className={styles.pricingAllDataContainer}>
      <div className={styles.pricingDataContainer}>
        <div className={styles.pricingHeaderTitleTextContainer}>
          <div className={styles.pricingHeaderPricingTextContainer}>
            <p className={styles.pricingHeaderPricingTextHrLine}></p>
            <p className={styles.pricingHeaderPricingText}>Pricing</p>
            <p className={styles.pricingHeaderPricingTextHrLine}></p>
          </div>
          <h2 className={styles.pricingHeaderTitleText}>
            Elevate your brand to new <br /> Heights
          </h2>
        </div>

        <div>
          {pricingCardData.map((data, ind) => (
            <div
              className={`${styles.pricingCardTextContainer} ${
                ind === 1 ? styles.pricingCardTextHighLightContainer : ""
              }`}
              key={ind}
            >
              <div>
                <p
                  className={`${styles.pricingTypeText} ${
                    ind === 1 ? styles.pricingHighLight : ""
                  }`}
                >
                  {data.type}
                </p>
                <h3
                  className={`${styles.pricingPriceText} ${
                    ind === 1 ? styles.pricingHighLight : ""
                  }`}
                >
                  <p className={styles.pricingDollarText}>$</p> {data.price}
                  <span className={styles.pricingMonthText}>/month</span>
                </h3>
              </div>

              <div className={styles.pricingCategoryContainer}>
                {data.category.map((cat, ind) => (
                  <div className={styles.pricingCategory} key={ind}>
                    <IoIosCheckbox
                      className={`${styles.pricingCategoryCheckbox}`}
                    />
                    <p className={styles.pricingCategoryText}>{cat}</p>
                  </div>
                ))}
              </div>

              <div>
                <button
                  key={ind}
                  className={`${ind === 1 ? styles.pricingHighLightBtn : ""}`}
                >
                  <Link className={styles.pricingCardGetStartBtn} href={"/"}>
                    Get Started <IoArrowForwardSharp />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        className={styles.pricingUnionIcons}
        src={Union_icon}
        width={0}
        height={0}
        alt=""
      />
    </section>
  );
}
