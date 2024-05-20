import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AboutHome() {
  return (
    <section>
      <div className={styles.aboutHomeAllTitleContainer}>
        <div>
          <div className={styles.aboutHomeFirstTitleContainer}>
            <h1 className={styles.aboutHomeFirstTitleFirstText}>
              We believe that
            </h1>

            <h1 className={styles.aboutHomeFirstTitleSecondText}>technology</h1>
          </div>

          <div className={styles.aboutHomeSecondTitleContainer}>
            <h1 className={styles.aboutHomeSecondTitleFirstText}>
              can change the
            </h1>

            <h1 className={styles.aboutHomeSecondTitleSecondText}>WORLD.</h1>
          </div>

          <div>
            <div className={styles.aboutHomeLearnMoreDataContainer}>
              <div className={styles.aboutHomeLearnMoreDataContainerTitle}>
                <div
                  className={
                    styles.aboutHomeLearnMoreDataContainerTitleLeftBorder
                  }
                ></div>
                <p>
                  That's why we're committed to delivering innovative IT
                  solutions to businesses of all sizes. Our team of experienced
                  professionals is dedicated to helping you achieve your goals
                  and thrive in a rapidly evolving digital landscape.
                </p>
              </div>

              <div>
                <Link href="/explore">
                  <button className={styles.aboutHomeLearnMoreDataContainerBtn}>
                    Learn more
                    <Image
                      src="/assets/icons/Arrow-Icon.png"
                      width={90}
                      height={0}
                      alt="Learn more arrow icon"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
