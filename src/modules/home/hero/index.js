import AboutHome from "../about";
import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
import o_image from "../../../assets/image/Hero/O.Png";
import bg_image from "../../../assets/image/Hero/Wireframe-Vector.Png";
import Arrow_icon from "../../../assets/icons/Arrow-Icon.Png";

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
                  src={o_image}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                ne
              </div>
            </h1>

            <p className={styles.heroContainerSubTitle}>
              Create your future <br /> IT business with <br /> WaveNet.
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
                    src={Arrow_icon}
                    width={90}
                    height={0}
                    alt="explore now arrow icon"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.heroBg}>
            <Image
              src={bg_image}
              width={1900}
              height={1000}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* Home Hero section */}
        <AboutHome />
      </section>
    </>
  );
}
