import AboutHome from "../about";
import styles from "./hero.module.css";
import Image from "next/image";
// IMPORT IMAGE
import heco_Computer_img from "../../../assets/image/Hero/heco-computer-img.png";
import points_group_img1 from "../../../assets/image/Hero/points-group1.png";
import heco_Play_Bottun from "../../../assets/image/Hero/Play-Bottun.png";
import spider_web_img from "../../../assets/image/Hero/spider-web.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section>
        <div className={styles.heroContainer}>
          <div className={styles.heroAllDataContainer}>
            <div className={styles.heroDataTextContainer}>
              <p className={styles.hecoFirstTitleText}>IT Software & Design</p>
              <div className={styles.heroTitleText}>
                <h1>Your Operations with </h1>
                <h1>Smart IT Solutions</h1>
              </div>
              <p className={styles.heroSubTitleText}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div className={styles.ButtonContainer}>
                <Link href={"/"}>
                  <button className={styles.heroStartNowBtn}>Start Now</button>
                </Link>

                <Link href={"/"}>
                  <Image
                    className={styles.heroPalyBtn}
                    src={heco_Play_Bottun}
                    width={60}
                    height={60}
                    alt=""
                  ></Image>
                </Link>
                <p className={styles.heroPalyBtnText}>Watch Demo </p>
              </div>
            </div>

            <div className={styles.heroDataImageContainer}>
              <Image
                className={styles.heroComputerImage}
                src={heco_Computer_img}
                width={1500}
                height={1000}
                alt=""
              ></Image>

              <Image
                className={styles.heroPontsGroupImage1}
                src={points_group_img1}
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </div>
          </div>

          <div>
            <Image
              className={styles.heroSpiderWebImage}
              src={spider_web_img}
              width={1000}
              height={1000}
              alt=""
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
