import styles from "./bestOffer.module.css";
import Link from "next/link";
import Image from "next/image";
// import json from "../../.."

// Import Image
import BestOfferUpTo_image2 from "../../../assets/Home/Image/BestOfferUpToImage2.png";

// Import Components
import Button from "@/components/button";
import Countdown from "@/components/countDownTimer";

export default function BestOffer() {
  return (
    <section>
      <div className={styles.bestOfferUpToAllDataContainer}>
        <div className={styles.bestOfferUpToDataContainer}>
          <div className={styles.bestOfferTextDataContainer}>
            <h2 className={styles.bestOfferUpToTitle}>
              Best Offer - Up to <span className={styles.hiLightText}>50%</span>
            </h2>
            <p className={styles.bestOfferUpToSubTitle}>
              Explore our latest New Arrivals & unlock discounts of up to 50%
              off!
            </p>

            <Countdown />

            <Button btnName={"Shop now"} btnUrl={"/collections/sale"} />
          </div>

          <div>
            <Image
              className={styles.bestOfferUpToImage}
              src={BestOfferUpTo_image2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
