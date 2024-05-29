import Link from "next/link";
import styles from "./notFound.module.css";
import Image from "next/image";
// IMPORT IMAGE
import men_img from "../assets/image/ErrorPage/men.png";
import shado_img from "../assets/image/ErrorPage/shado.png";
import NotFound404_img from "../assets/image/ErrorPage/404.svg";
// IMPORT REACT ICONS
import { GoTriangleRight } from "react-icons/go";

export default function NotFound() {
  return (
    <section>
      <div className={styles.notFoundAllDatContainer}>
        <div className={styles.notFoundContainer}>
          <div>
            <h1 className={styles.notFoundTitleText}>404 (Error Page) </h1>
            <p className={styles.notFoundSubTitleText}>
              Home <GoTriangleRight /> 404 (Error Page)
            </p>
          </div>

          <div>
            <Image
              className={styles.notFoundMenImage}
              src={men_img}
              width={100}
              height={100}
              alt=""
            />

            <Image
              className={styles.notFoundShadoImage}
              src={shado_img}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.notFound404DataContainer}>
        <Image
          className={styles.notFound404Image}
          src={NotFound404_img}
          width={100}
          height={100}
          alt=""
        />

        <h1 className={styles.notFound404TitleText}>Oops! Nothing Was Found</h1>
        <p className={styles.notFound404SubTitleText}>
          Sorry, we couldn’t find the page you where looking for. We suggest
          that you return to homepage.
        </p>

        <Link href={"/"}>
          <button className={styles.notFound404BackHoemBtn}>
            Back To Home Page
          </button>
        </Link>
      </div>
    </section>
  );
}
