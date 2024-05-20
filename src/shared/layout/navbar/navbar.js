import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo/Navbar/ecoysoft-logo.png";

export default function Navbar() {
  const navBarItems = [
    { itemName: "Home", url: "/" },
    { itemName: "About Us", url: "/about" },
    { itemName: "Services", url: "/services" },
    { itemName: "Pricing", url: "/pricing" },
    { itemName: "Blog", url: "/blog" },
    { itemName: "Contact", url: "/contact" },
  ];

  return (
    <>
      <section className={styles.navBarContaine}>
        <nav className={styles.navBarAllItemsContainer}>
          <div>
            <li>
              <Link className={styles.navBarItems} href="/">
                <Image src={logo} width={180} height={100} alt="Logo" />
              </Link>
            </li>
          </div>

          <div>
            <ul className={styles.navBarItemsContainer}>
              {navBarItems.map((item, ind) => (
                <li key={ind}>
                  <Link className={styles.navBarItems} href={item.url}>
                    {item.itemName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link href="/signIn">
              <button className={styles.navBarTalkBtn}>Let's Talk</button>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}
