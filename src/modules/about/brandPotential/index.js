import styles from "./brandPotential.module.css";
import Link from "next/link";
import Image from "next/image";

//import image
import menImage from "../../../assets/image/BrandPotentialImage/Ellipse.png";
import vectorImage from "../../../assets/logo/BrandPotentialImage/Vector.png";
import designProcessImage from "../../../assets/logo/BrandPotentialImage/DesignProcess.png";

export default function BrandPotential() {
  return (
    <>
      <section className={styles.brandPotentialAllDataContainer}>
        <div>
          <Image
            className={styles.brandPotentialMenImage}
            src={menImage}
            alt=""
          />
        </div>

        <div>
          <h1 className={styles.brandPotentialTitleText}>
            Seeing the full potential <br /> of your brand
          </h1>
          <p className={styles.brandPotentialSubTitleText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            gdfh Ipsum is simply More than one thing of the dummy text.
          </p>

          <div className={styles.brandPotentialInfoContainer}>
            <div className={styles.brandPotentialInfoDataCond}>
              <Image
                className={styles.brandPotentialInfoImage}
                src={designProcessImage}
                alt=""
              />
              <p className={styles.brandPotentialInfoText}>
                Best Awarded <br /> Company
              </p>
            </div>

            <div className={styles.brandPotentialInfoDataCond}>
              <Image
                className={styles.brandPotentialInfoImage}
                src={vectorImage}
                alt=""
              />
              <p className={styles.brandPotentialInfoText}>
                5k+ Full Times <br /> Employees
              </p>
            </div>
          </div>

          <Link className={styles.brandPotentialBtn} href={"/"}>
            Read More
          </Link>
        </div>
      </section>
    </>
  );
}
