import styles from "./loading.module.css";
import Image from "next/image";
import loader from "../assets/image/Loader/Loader-image2.gif";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <Image className={styles.loaderImage} src={loader} alt="" />
    </div>
  );
}
