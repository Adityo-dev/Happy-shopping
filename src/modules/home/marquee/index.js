import styles from "./marquee.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Marquee() {
  const marqueeTextData = [
    "Returns accepted for 30 days",
    "Free return shipping",
    "No restocking fee",
    "No final sale items",
    "100% Payment Secure",
    "Online Support",
  ];
  return (
    <section>
      <marquee className={styles.marqueeDataContainer}>
        {marqueeTextData.map((marqueeData, ind) => (
          <div key={ind} className={styles.marqueeTextContainer}>
            <span className={styles.marqueeDotted}></span>
            <span className={styles.marqueeText}>{marqueeData}</span>
          </div>
        ))}
      </marquee>
    </section>
  );
}
