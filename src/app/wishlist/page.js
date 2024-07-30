import styles from "./wishlist.module.css";
import Image from "next/image";
import Link from "next/link";

import f from "../../assets/Home/Image/baby.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Wishlist() {
  return (
    <>
      <div className={styles.wishlistContainer}>
        <h1 className={styles.wishlistText}>Wishlist</h1>
        <p className={styles.wishlistAndHomeText}>
          Home <MdOutlineKeyboardArrowRight />{" "}
          <span className={styles.wishlistSubText}>Wishlist</span>
        </p>
      </div>

      <div className={styles.wishlistAllDataContainer}>
        <div className={styles.wishlistDataContainer}>
          <Image className={styles.Image} src={f} alt="" />

          <div className={styles.wishlistTextContainer}>
            <p className={styles.cardDataName}>M. Denim Clothing Jacket</p>
            <p className={styles.cardDataPriceContainer}>
              <span className={styles.cardDiscountPrice}>$130.00 </span>
              <span className={styles.cardCurrentPrice}>$110.00</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
