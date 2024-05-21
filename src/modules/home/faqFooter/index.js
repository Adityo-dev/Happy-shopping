import React from "react";
import styles from "./faqFooter.module.css";
import Image from "next/image";
import Link from "next/link";
import O from "../../../assets/image/FaqFooter/O.png";
import Arrow_icon from "../../../assets/image/FaqFooter/Arrow-Icon.png";

export default function FaqFooter() {
  return (
    <section className={styles.faqFooterContainer}>
      <h1 className={styles.faqFooterText}>
        Ready f
        <Image
          className={styles.faqFooterOImage}
          src={O}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        r the <p className={styles.faqFooterLineStyle}></p>
      </h1>

      <h1 className={styles.faqFooterNextLevelContainer}>
        <span className={styles.faqFooterNextText}>Next</span>{" "}
        <span className={styles.faqFooterLevelText}>Levele ?</span>
        <div className={styles.faqFooterGetFreeBtnContainer}>
          <Link href="/">
            <button className={styles.faqFooterGetFreeBtn}>
              GET FREE CONSULTATION
              <Image src={Arrow_icon} width={90} height={0} alt="arrow icon" />
            </button>
          </Link>
        </div>
      </h1>

      <div className={styles.faqFooterFirstBoxStyle}></div>
      <div className={styles.faqFooterFirstBoxStyle}></div>
    </section>
  );
}
