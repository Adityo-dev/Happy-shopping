import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../assets/icons/Arrow-Icon.png";
import wireFrame from "../../../assets/image/Footer/Wireframe-Vector.png";
import ecoysoft_logo from "../../../assets/logo/Navbar/ecoysoft-logo.png";
import facebook from "../../../assets/icons/Facebook.svg";
import Twitter from "../../../assets/icons/Twitter.svg";
import Instagram from "../../../assets/icons/Instagram.svg";

export default function Footer() {
  const explores = [
    { item: "About Us", url: "/about" },
    { item: "Services", url: "/services" },
    { item: "Pricing", url: "/pricing" },
    { item: "Blog", url: "/blog" },
    { item: "Contact", url: "/contact" },
  ];

  const contacts = [
    { name: "Email", url: "/" },
    { name: "Phone", url: "/" },
    { name: "Address", url: "/" },
    { name: "Social Media", url: "/" },
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
                src={arrowIcon}
                width={90}
                height={0}
                alt="explore now arrow icon"
              />
            </button>
          </Link>
        </div>

        <div>
          <Image
            className={styles.footerBg}
            src={wireFrame}
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className={styles.footerAllItemsContainer}>
        <div className={styles.footerContactAllLogoContaier}>
          <div>
            <Image
              src={ecoysoft_logo}
              width={200}
              height={120}
              alt="explore now arrow icon"
            />
          </div>

          <div className={styles.footerContactLogoContaier}>
            <Image
              className={styles.footerContactLogo}
              src={facebook}
              width={100}
              height={100}
              alt="explore now arrow icon"
            />

            <Image
              className={styles.footerContactLogo}
              src={Instagram}
              width={100}
              height={100}
              alt="explore now arrow icon"
            />

            <Image
              className={styles.footerContactLogo}
              src={Twitter}
              width={110}
              height={100}
              alt="explore now arrow icon"
            />
          </div>
        </div>

        <div className={styles.footerListItemsContainer}>
          <div>
            <h3 className={styles.footerListTitle}>Explore</h3>
            <ul className={styles.footerItemsContainer}>
              {explores.map((exp, ind) => (
                <li key={ind}>
                  <Link className={styles.footerItems} href={exp.url}>
                    {exp.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerListTitle}>Contact</h3>
            <ul className={styles.footerItemsContainer}>
              {contacts.map((contact, ind) => (
                <li key={ind}>
                  <Link className={styles.footerItems} href={contact.url}>
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerListTitle}>Newsletter</h3>
            <div className={styles.footerNewsSecContainer}>
              <p>
                Subscribe to our newsletter to stay informed about our latest
                products, services, and promotions. Feel free to unsubscribe
                anytime!
              </p>

              <div>
                <label htmlFor="emails"></label>
                <input
                  className={styles.footerEmailField}
                  type="email"
                  name="name"
                  placeholder="Enter Your Email Address ..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.footerHr}></hr>

      <div className={styles.footerCopyrigthContainer}>
        <p>Copyright © 2023 for ecoysoft. All rights reserved.</p>
        <p>Terms & Condition | Privacy Policy</p>
      </div>
    </footer>
  );
}
