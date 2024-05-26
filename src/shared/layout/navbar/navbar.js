import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
// IMPORT IMAGE
import ecoysoft from "../../../assets/ecoysoft/ecoysoft.webp";
// IMPORT REACT ICON
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  const navItems = [
    { name: "home", url: "/" },
    { name: "About us", url: "/about" },
    { name: "services", url: "/services" },
    { name: "pages", url: "/pages" },
    { name: "blog", url: "/blogs" },
    { name: "contact", url: "/contact" },
  ];

  return (
    <>
      <section className={styles.navBarBtnAllDataContainer}>
        <nav className={styles.navbarContainer}>
          <div className={styles.togoContainer}>
            <FiMenu /> <FiX />
          </div>

          <div>
            <Link href="/">
              <Image
                className={styles.ecoyLogo}
                src={ecoysoft}
                width={120}
                height={100}
                alt="Logo"
              ></Image>
            </Link>
          </div>

          <ul className={styles.navBavItemsContainer}>
            {navItems.map((item, ind) => (
              <Link href={item.url} className={styles.navBavItemData} key={ind}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>

          <div>
            <Link href={"/"}>
              <button className={styles.navBarBtn}>Explore Now</button>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}
