import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const explores = [
    { item: "About Us", url: "/about" },
    { item: "Services", url: "/services" },
    { item: "Pricing", url: "/pricing" },
    { item: "Blog", url: "/blog" },
    { item: "Contact", url: "/contact" },
  ];
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerDataTextContainer}>
        <div>
          <h2 className={styles.footerDataContainerFirstTextTitle}>
            Need it solutions ?
          </h2>
          <h2 className={styles.footerDataContainerSecondTextTitleContainer}>
            <span
              className={styles.footerDataContainerSecondTextTitleFirstText}
            >
              Let's
            </span>{" "}
            <span
              className={styles.footerDataContainerSecondTextTitleSecondText}
            >
              start now .
            </span>
          </h2>
        </div>

        <div>
          <Link href="/explore">
            <button className={styles.footerTitleBtn}>
              Get free consultation
              <Image
                src={"/assets/icons/Arrow-Icon.png"}
                width={90}
                height={0}
                alt="explore now arrow icon"
              />
            </button>
          </Link>
        </div>

        <div className={styles.footerBg}>
          <Image
            src={"/assets/image/footer/Wireframe-Vector.png"}
            width={1900}
            height={1000}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className={styles.footerItemsContainer}>
        <div>
          <Image
            src={"/assets/logo/Navbar/ecoysoft-logo.png"}
            width={180}
            height={100}
            alt="explore now arrow icon"
          />
        </div>

        <div className={styles.footerListItemsContainer}>
          <div>
            <h3>Explore</h3>
            <ul className={styles.footerItemsContainer}>
              {explores.map((exp, ind) => (
                <li key={ind}>
                  <Link href={exp.url}>{exp.itemName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
          </div>
          <div>
            <h3>Newsletter</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
