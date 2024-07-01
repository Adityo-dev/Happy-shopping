import styles from "./service.module.css";
import Link from "next/link";
import Image from "next/image";

// Import Icons
import track_Icon from "../../../assets/Home//icons/track.svg";
import money_Icon from "../../../assets/Home//icons/money.svg";
import creditCard_Icon from "../../../assets/Home//icons/credit-card.svg";
import support_Icon from "../../../assets/Home//icons/support.svg";

export default function ServicesHome() {
  const services = [
    {
      icon: track_Icon,
      title: "Free Shipping",
      subTitle: "On orders over $99.",
    },
    {
      icon: money_Icon,
      title: "Money Back",
      subTitle: "Money back in 15 days.",
    },
    {
      icon: creditCard_Icon,
      title: "Secure Checkout",
      subTitle: "100% Payment Secure.",
    },
    {
      icon: support_Icon,
      title: "Online Support",
      subTitle: "Ensure the product quality",
    },
  ];

  return (
    <>
      <div className={styles.servicesAllDataContainer}>
        {services.map((service, ind) => (
          <div className={styles.servicesDataContainer} key={ind}>
            <div>
              <Image
                className={styles.servicesIcon}
                src={service.icon}
                alt=""
              />
            </div>
            <div>
              <h3 className={styles.servicesTitle}>{service.title}</h3>
              <p className={styles.servicesSubTitle}>{service.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
