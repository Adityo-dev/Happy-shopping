import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
// IMPORT IMAGE
import ecoy_logo from "../../../assets/logo/Navbar/ecoysoft-logo.png";

export default function Navbar() {
  const navItems = [
    { name: "home", url: "/" },
    { name: "About us", url: "/about" },
    { name: "services", url: "/services" },
    { name: "pages", url: "/pages" },
    { name: "blog", url: "/blog" },
    { name: "contact", url: "/contact" },
  ];
  return (
    <>
      <section>
        <nav className={styles.navbarContainer}>
          <div>
            <Image
              className={styles.ecoyLogo}
              src={ecoy_logo}
              width={120}
              height={100}
            ></Image>
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
