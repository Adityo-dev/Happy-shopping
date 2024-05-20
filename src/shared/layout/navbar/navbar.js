import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
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
                <Image
                  src={"/assets/logo/Navbar/ecoysoft-logo.Png"}
                  width={180}
                  height={100}
                  alt="Picture of the author"
                />
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
