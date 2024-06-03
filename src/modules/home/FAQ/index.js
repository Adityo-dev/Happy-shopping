import styles from "./faq.module.css";
import Image from "next/image";
// IMPORT IMAGE
import dsdc_image from "../../../assets/image/Faq/dsdc.png";
import Frame from "../../../assets/logo/Faq/Frame.svg";
import Frame2 from "../../../assets/logo/Faq/Frame2.svg";
import start from "../../../assets/logo/Faq/star.png";
import ControlledAccordions from "./Faq";
export default function FAQ() {
  return (
    <>
      <section className={styles.faqAllDataContainer}>
        <div className={styles.faqDataContainer}>
          <div>
            <h1 className={styles.faqTitleText}>
              Frequently <br className={styles.faqBrTitleText} /> Asked
              Questions
            </h1>

            <div className={styles.faqCompoContainer}>
              <ControlledAccordions />
            </div>
          </div>

          <div className={styles.faqMenImageContainer}>
            <Image
              className={styles.faqMenImage}
              src={dsdc_image}
              width={500}
              height={500}
              alt=""
            />
            <Image
              className={styles.faqFrame2Image}
              src={Frame2}
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <Image
          className={styles.faqFrameImage}
          src={Frame}
          width={0}
          height={0}
          alt=""
        />
        <Image
          className={styles.faqStart1Image}
          src={start}
          width={0}
          height={0}
          alt=""
        />

        <Image
          className={styles.faqStart2Image}
          src={start}
          width={0}
          height={0}
          alt=""
        />

        <Image
          className={styles.faqStart3Image}
          src={start}
          width={0}
          height={0}
          alt=""
        />

        <Image
          className={styles.faqStart4Image}
          src={start}
          width={0}
          height={0}
          alt=""
        />

        <Image
          className={styles.faqStart5Image}
          src={start}
          width={0}
          height={0}
          alt=""
        />
      </section>
    </>
  );
}
