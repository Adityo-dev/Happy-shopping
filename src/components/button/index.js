import styles from "./button.module.css";
import Link from "next/link";

export default function Button({ btnName, btnUrl }) {
  return (
    <>
      <Link target="_blank" href={btnUrl}>
        <button className={styles.btn}>{btnName}</button>
      </Link>
    </>
  );
}
