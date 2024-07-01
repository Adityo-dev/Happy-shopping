import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

// React Icons
import { IoEyeSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { GoArrowSwitch } from "react-icons/go";
import ViewCardDetailsModal from "../viewCardDetailsModal";

// const handleCardPreview = () => {
// ;
// };

export default function Card({ cardData }) {
  const { cover, name, discountPrice, currentPrice } = cardData;
  return (
    <section className={styles.cardAllDataContainer}>
      <Link href={""}>
        <div className={styles.cardImageContainer}>
          <Image className={styles.cardImage1} src={cover[0]} alt="" />
          <Image className={styles.cardImage2} src={cover[1]} alt="" />
        </div>
      </Link>

      <div className={styles.cardTextDataContainer}>
        <h3 className={styles.cardDataName}>{name}</h3>

        <p className={styles.cardDataPriceContainer}>
          <del className={styles.cardDiscountPrice}>${discountPrice}</del>
          <span className={styles.cardCurrentPrice}>${currentPrice}</span>
        </p>
      </div>

      <div className={styles.cardPreviewAllDataContainer}>
        <div className={styles.cardPreviewContainer}>
          <ViewCardDetailsModal
            cardData={cardData}
            className={styles.cardPreviewIcon}
          />
          <FiShoppingCart className={styles.cardPreviewIcon} />
          <GiSelfLove className={styles.cardPreviewIcon} />
          <GoArrowSwitch className={styles.cardPreviewIcon} />
        </div>
      </div>
    </section>
  );
}
