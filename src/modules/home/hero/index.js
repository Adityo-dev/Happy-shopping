import AboutHome from "../about";
import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
import O from "../../../assets/image/Hero/O.png";
import arrowIcon from "../../../assets/icons/Arrow-Icon.png";
import wireFrame from "../../../assets/image/Hero/Wireframe-Vector.png";

export default function Hero() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.heroAllTitleContainer}>
          <div className={styles.heroFirstBoxStyle}></div>

          <div className={styles.herSecondoBoxStyle}></div>

          <div className={styles.heroFirstTitleContainer}>
            <h1 className={styles.heroFirstTitleText}>
              Your{" "}
              <div>
                <Image
                  className={styles.heroOImage}
                  src={O}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                ne
              </div>
            </h1>

            <p className={styles.heroContainerSubTitle}>
              Create your future <br /> IT business with <br /> ecoysoft.
            </p>
          </div>

          <div className={styles.heroSecondTitleContainer}>
            <h1 className={styles.heroSecondTitleText}>
              <span className={styles.textItalic}> It</span>{" "}
              <span className={styles.textTransparentColor}>Solutions</span>
            </h1>

            <div>
              <Link href="/explore">
                <button className={styles.heroSecondSubTitleBtn}>
                  Explore now
                  <Image
                    src={arrowIcon}
                    width={90}
                    height={0}
                    alt="arrow icon"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              className={styles.heroBg}
              src={wireFrame}
              width={0}
              height={0}
              alt="Wireframe"
            />
          </div>
        </div>
        {/* Home Hero section */}
        <AboutHome />
      </section>
    </>
  );
}
