import styles from "./service.module.css";
import Link from "next/link";
import Image from "next/image";
import Web_icon from "../../../assets/icons/Services/Web-Icon.svg";
import Mobile_icon from "../../../assets/icons/Services/Mobile-Icon.svg";
import Security_icon from "../../../assets/icons/Services/Security-Icon.svg";
import Cloud_icon from "../../../assets/icons/Services/Cloud-Icon.svg";
import Marketing_icon from "../../../assets/icons/Services/Marketing-Icon.svg";
import Arrow_icon from "../../../assets/icons/Services/Arrow-Icon.svg";
import Arrow_icon_bg from "../../../assets/icons/Services/Arrow-Icon-bg.svg";

export default function ServicesHome() {
  const servicesCardFirstPart = [
    { image: Web_icon, name: "Web  Development", url: "/" },
    { image: Mobile_icon, name: "Mobile Development", url: "/" },
  ];

  const servicesCardSecondPart = [
    { image: Security_icon, name: "Cyber Security", url: "/" },
    { image: Cloud_icon, name: "Cloud Computing", url: "/" },
    { image: Marketing_icon, name: "Digital Marketing", url: "/" },
  ];
  return (
    <section className={styles.servicesHomeContainer}>
      <div className={styles.servicesHomeAllDataContainer}>
        <h2 className={styles.servicesHomeMainTitleText}>Services</h2>

        <div>
          <div className={styles.servicesCardFirstPartAllContainer}>
            {servicesCardFirstPart.map((firstPart, ind) => (
              <div className={styles.servicesCardDataContainer} key={ind}>
                <Image
                  className={styles.servicesCardImage}
                  src={firstPart.image}
                  width={90}
                  height={90}
                  alt="Logo"
                />

                <div className={styles.servicesCardFirstPartTextDataContainer}>
                  <p className={styles.servicesCardText}>{firstPart.name}</p>

                  <Link href={firstPart.url}>
                    <Image
                      className={styles.servicesCardArrowIcon}
                      src={Arrow_icon}
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servicesCardSecondPartAllContainer}>
            {servicesCardSecondPart.map((secondPart, ind) => (
              <div
                className={`${styles.servicesCardDataContainer} ${
                  ind === 1 ? styles.servicesCardHighlightBackground : ""
                }`}
                key={ind}
              >
                <div className={styles.servicesCardSecondPartImageContainer}>
                  <Image
                    className={styles.servicesCardImage}
                    src={secondPart.image}
                    width={90}
                    height={90}
                    alt="Logo"
                  />
                  <Link href={secondPart.url}>
                    <Image
                      className={styles.servicesCardArrowIcon}
                      src={ind === 1 ? Arrow_icon_bg : Arrow_icon}
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <p className={styles.servicesCardText}>{secondPart.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
