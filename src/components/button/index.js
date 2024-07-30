import styles from "./button.module.css";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function Button({ btnName, btnUrl, btnIcon }) {
  return (
    <>
      <Link href={btnUrl}>
        <button className={styles.btn}>
          {btnIcon === true ? (
            <FaCartShopping className={styles.bntIcon} />
          ) : (
            ""
          )}
          {btnName}
        </button>
      </Link>
    </>
  );
}
