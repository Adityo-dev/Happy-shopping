import FaqFooter from "../faqFooter";
import styles from "./faq.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPORT IMAGE
import dsdc_image from "../../../assets/image/Faq/dsdc.png";
export default function FAQ() {
  return (
    <>
      <section className={styles.faqAllDataContainer}>
        <div className={styles.faqDataContainer}>
          <div>
            <h1 className={styles.faqTitleText}>
              Frequently <br /> Asked Questions
            </h1>

            <p
              style={{
                marginTop: "50px",
                fontSize: "20px",
                fontWeight: "700",
                color: "green",
              }}
            >
              Coming soon.......
            </p>
          </div>

          <div>
            <Image
              className={styles.faqDadImage}
              src={dsdc_image}
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <FaqFooter />
    </>
  );
}
