import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPORT IMAGE
import Line_bg from "../../../assets/logo/Footer/line.svg";
// IMPORT REACT ICONS
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const contactSocialMediaIcon = [
    { icon: <FaFacebookF />, url: "/" },
    { icon: <FaLinkedinIn />, url: "/" },
    { icon: <SiUpwork />, url: "/" },
    { icon: <TbBrandFiverr />, url: "/" },
  ];

  const getFreeLink = [
    { name: "Software Development", url: "/" },
    { name: "Data Analytics", url: "/" },
    { name: "IT Consulting", url: "/" },
    { name: "UI/UX Design", url: "/" },
    { name: "Network Solutions", url: "/" },
  ];

  const ourServices = [
    { name: "Tech Solutions", url: "/" },
    { name: "Digital Marketing", url: "/" },
    { name: "Web Development", url: "/" },
    { name: "IT Consulting", url: "/" },
    { name: "Data Analytics", url: "/" },
  ];

  const aboutUs = [
    { name: "Tech Solutions", url: "/" },
    { name: "Digital Marketing", url: "/" },
    { name: "Web Development", url: "/" },
    { name: "IT Consulting", url: "/" },
    { name: "Data Analytics", url: "/" },
  ];

  const contactIcons = [
    {
      icon: <FaPhoneAlt />,
      title: "Requesting A Call:",
      subTitle: "(629) 555-0129",
    },
    {
      icon: <BiSolidTimeFive />,
      title: "Sunday - Friday:",
      subTitle: "(629) 555-0129",
    },
    {
      icon: <FaLocationDot />,
      title: "6391 Elgin St. Celina, Delaware 10299",
    },
  ];

  const copyRightFooterListItem = [
    { item: "Trams & Condition", url: "/" },
    { item: "Privacy Policy", url: "/" },
    { item: "Contact Us", url: "/" },
  ];
  return (
    <footer className={styles.footerAllDataContainer}>
      <div className={styles.footerTextDataContainer}>
        <div>
          <h1 className={styles.footerTitleText}>About Company</h1>
          <Image
            className={styles.footerLineBgImageContainer}
            src={Line_bg}
            width={70}
            height={0}
          />

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>

          <div className={styles.footerContactIconsContainer}>
            {contactSocialMediaIcon.map((icon, ind) => (
              <Link
                className={`${styles.footerContactIconsList} ${
                  ind === 2 ? styles.footerContactIconsHighLiteBg : ""
                } `}
                href={icon.url}
                key={ind}
              >
                <p>{icon.icon}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.footerTitleText}>Get Free Link</h1>
          <div>
            {getFreeLink.map((getItem, ind) => (
              <ul key={ind} className={styles.footerListItemContainer}>
                <GoChevronRight />
                <Link className={styles.footerItemList} href={getItem.url}>
                  <li>{getItem.name}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.footerTitleText}>Our Services</h1>
          <div>
            {ourServices.map((service, ind) => (
              <ul key={ind} className={styles.footerListItemContainer}>
                <GoChevronRight />
                <Link className={styles.footerItemList} href={service.url}>
                  <li>{service.name}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.footerTitleText}>About Us</h1>
          <div>
            {aboutUs.map((about, ind) => (
              <ul key={ind} className={styles.footerListItemContainer}>
                <GoChevronRight />
                <Link className={styles.footerItemList} href={about.url}>
                  <li>{about.name}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerContactContainer}>
        {contactIcons?.map((icon, ind) => (
          <div className={styles.footerContactTextContainer} key={ind}>
            <p className={styles.footerContactIcon}>{icon?.icon}</p>
            <div className={styles.footerContactInfoTextContainer}>
              <p>{icon?.title}</p>
              <p>{icon?.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.copyRightFooterListItemContainer}>
        <p>© ecoysoft 2024 | All Rights Reserved</p>

        <div className={styles.copyRightFooterListItem}>
          {copyRightFooterListItem.map((item, ind) => (
            <ul key={ind}>
              <Link className={styles.copyRightFooterItem} href={item.url}>
                <li>{item.item}</li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
