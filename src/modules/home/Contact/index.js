import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

// IMPORT IMAGE
import wepik_export from "../../../assets/image/Contact/wepik-export.png";
// import spider_web_frame from "../../../assets/image/Contact/spider-web-frame.png";

export default function Contact() {
  return (
    <section className={styles.contactAllDataContainer}>
      <div className={styles.contactDataContainer}>
        <div className={styles.contactTextAllDataContainer}>
          <div>
            <p></p>
            <p>GET IN TOUCH</p>
          </div>
          <h2>
            Get free IT business <br /> consultation today. Feel free <br /> to
            contact!
          </h2>
        </div>

        <div className={styles.contactFieldAllDataContainer}>
          <Image
            className={styles.contactWomenImage}
            src={wepik_export}
            width={289}
            height={520}
          />

          <div className={styles.contactFieldContainer}>
            <h3 className={styles.contactFieldHeaderTitleText}>
              Please fill in the information below
            </h3>
          </div>
        </div>
      </div>
      {/* <Image
        className={styles.contactSpiderWebFrameImage}
        src={spider_web_frame}
        width={577}
        height={578}
      /> */}
    </section>
  );
}
