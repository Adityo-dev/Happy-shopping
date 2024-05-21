import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
import arrowIconBlack from "../../../assets/icons/Blog/Arrow-Icon-black.svg";
import arrowIcon from "../../../assets/icons/Blog/Arrow-Icon.svg";

export default function Blog() {
  const blogs = [
    {
      num: "01",
      title: "Tech",
      subTitle:
        "Why Cloud Computing is Essential for Your Business in Year 2024",
    },
    {
      num: "02",
      title: "Tips",
      subTitle: "How to Protect Your Business from Cybersecurity Threats",
    },
    {
      num: "03",
      title: "Review",
      subTitle: "5 Ways Software Developer Can Boost Your Business",
    },
    {
      num: "04",
      title: "Trends",
      subTitle: "The Future of IT: Trends to Watch in 2024 and Beyond",
    },
  ];
  return (
    <section className={styles.blogsHomeContainer}>
      <div className={styles.blogsHomeAllDataContainer}>
        <div className={styles.blogHomeHeaderContainer}>
          <h2 className={styles.blogsHomeTitleText}>Blog</h2>
          <div>
            <Link href="/explore">
              <button className={styles.blogHoemReadMoreBtn}>
                Read more articles
                <Image
                  src={arrowIconBlack}
                  width={90}
                  height={0}
                  alt="arrow icon"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.blogsHomeCardsContainer}>
          {blogs.map((blog, ind) => (
            <div
              className={`${styles.blogsHomeCards} ${
                ind === 2 ? styles.blogHoemCardHighlightBackground : ""
              } ${ind === 0 ? styles.blogHomeRows : ""} ${
                ind === 1 ? styles.blogHomeColumns : ""
              }`}
              key={ind}
            >
              <div
                className={`${styles.BlogHomeDataTextContainer} ${
                  ind === 0 ? styles.BlogHomeFirstBoxDataContainer : ""
                }`}
              >
                <p className={styles.blogHomeNumberText}>{blog.num}</p>

                <div>
                  <p className={styles.blogHomeTitle}>{blog.title}</p>
                  <h2 className={styles.blogHomeSubTitle}>{blog.subTitle}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
