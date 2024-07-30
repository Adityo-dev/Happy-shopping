import styles from "./addYourShoppingCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@headlessui/react";

// Import Image
import Watch_Image from "../../assets/Men/AppleWatchSeries8GPS1.png";
// React Icons
import { GoX } from "react-icons/go";
import Counter from "@/components/counter";

const handleButton = (btnName) => {
  return (
    <>
      <button className={styles.handleButtonStyle}>{btnName}</button>
    </>
  );
};

export default function AddYourShoppingCard() {
  return (
    <>
      <h1 className={styles.yourShoppingCardText}>Your Shopping Cart</h1>

      <section className={styles.addCardAllDataContainer}>
        <div className={styles.addCardDataContainer}>
          <Image className={styles.addCardImage} src={Watch_Image} alt="" />
          <div className={styles.nameAndSizeTextContainer}>
            <p className={styles.nameText}>Apple Watch Series 8 GPS1</p>
            <p className={styles.sizeText}>
              size : <span className={styles.nameText}>40</span>
            </p>
          </div>

          <p className={styles.priceText}>$80.00</p>
          <Counter />
          <p className={styles.priceText}>$80.00</p>
          <GoX className={styles.addCardGoxIcon} />
        </div>

        <div className={styles.addCardBtnContainer}>
          {handleButton("Continue Shopping")}
          {handleButton("Clear Cart")}
        </div>

        <div className={styles.instructionsAndTotalPriceContainer}>
          <div className={styles.instructionsAndTotalPriceDataContainer}>
            <h2 className={styles.instructionsAndTotalPriceText}>
              Special instructions for seller
            </h2>
            <Textarea
              className={styles.textArea}
              placeholder="Special instructions for seller..."
            />
          </div>

          <div className={styles.instructionsAndTotalPriceDataContainer}>
            <h2 className={styles.instructionsAndTotalPriceText}>
              Cart Totals
            </h2>

            <div>
              <div className={styles.cardTotalsDataContainer}>
                <h3 className={styles.cardTotalsDataText1}>Subtotal</h3>
                <h3 className={styles.cardTotalsDataPrice1}>$80.00</h3>
              </div>

              <div className={styles.cardTotalsDataContainer}>
                <h3 className={styles.cardTotalsDataText2}>Total</h3>
                <h3 className={styles.cardTotalsDataPrice2}>$80.00</h3>
              </div>

              <div className={styles.cardTotalsPriceBtn}>
                {handleButton("Proceed to Checkout")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
