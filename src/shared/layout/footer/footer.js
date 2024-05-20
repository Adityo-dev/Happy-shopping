import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h2>Need it solutions ?</h2>
          <h2>
            <span>Let's</span> <span>start now .</span>
          </h2>
        </div>

        <div>
          <Link href="/explore">
            <button className={styles.heroSecondSubTitleBtn}>
              Explore now
              <Image
                src={"/assets/icons/Arrow-Icon.Png"}
                width={90}
                height={0}
                alt="explore now arrow icon"
              />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
