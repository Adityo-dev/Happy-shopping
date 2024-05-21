import FaqFooter from "../faqFooter";
import styles from "./faq.module.css";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className={styles.faqContainer}>
      <div className={styles.faqAllDataContainer}>
        <div>
          <h1 className={styles.faqTitleText}>
            Frequently <br /> Asked Questions
          </h1>
        </div>

        <div className={styles.faqMessgeContainer}>
          <h3 className={styles.faqMessgeTitleText}>
            Any Questions <br /> About Us?
          </h3>
          <p className={styles.faqMessgeSubTitleText}>Leave us a message.</p>

          <form className={styles.faqMessgeFieldContainer}>
            <div>
              <label for="messageNameField">Name</label>
              <br />
              <input
                type="text"
                id="messageNameField"
                className={styles.messageTextField}
                placeholder="Your Name ..."
              ></input>
            </div>

            <div>
              <label for="fname">Message</label>
              <br />
              <textarea
                className={styles.messageTextField}
                id="review"
                name="review"
                rows="6"
                cols="35"
                placeholder="Your Message ..."
              ></textarea>
            </div>

            <div className={styles.faqMessgeSenBtnContainer}>
              <Link href="/order">
                <button className={styles.faqMessgeSenBtn}>Order Now</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <FaqFooter />
    </section>
  );
}
