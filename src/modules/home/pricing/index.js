import styles from "./pricing.module.css";
import Link from "next/link";

export default function Pricing() {
  const pricings = [
    {
      level: "Basic",
      price: "499",
      service1: "Web Development",
      service2: "Mobile Development",
      service3: "For small-sized business",
    },
    {
      level: "Medium",
      price: "599",
      service1: "Web & Mobile Development",
      service2: "Cybersecurity Protection",
      service3: "For medium-sized business",
    },
    {
      level: "Standard",
      price: "999",
      service1: "Web Development",
      service2: "Cybersecurity & Digital Marketing",
      service3: "For large-sized business",
    },
  ];
  return (
    <section className={styles.pricingsContainer}>
      <div className={styles.pricingsAllDataContainer}>
        <div className={styles.pricingsHeaderDataContainer}>
          <h1 className={styles.pricingsHeaderText}>Pricing</h1>
          <p className={styles.pricingsHeaderSubText}>
            Get the right services plan for your business.
          </p>
        </div>

        <div className={styles.pricingsAllCardContainer}>
          {pricings.map((pricing, ind) => (
            <div
              className={`${styles.pricingCardDataContainer} ${
                ind === 1 ? styles.pricingCardHighlightBackground : ""
              }`}
              key={ind}
            >
              <p className={styles.pricingLevelText}>{pricing.level}</p>
              <h2 className={styles.pricingPriceText}>
                $ {pricing.price}
                <span className={styles.pricingPriceTextMo}>/mo</span>
              </h2>
              <p className={styles.pricingServiceText}>{pricing.service1}</p>
              <p className={styles.pricingsCardHr} />
              <p className={styles.pricingServiceText}>{pricing.service2}</p>
              <p className={styles.pricingsCardHr} />
              <p className={styles.pricingServiceText}>{pricing.service3}</p>

              <Link href="/order">
                <button
                  className={`${styles.pricingOrderNowBtn} ${
                    ind === 1
                      ? styles.pricingOrderNowBtnHighlightBackground
                      : ""
                  }`}
                >
                  Order Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
