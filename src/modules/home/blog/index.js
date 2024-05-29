import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
//IMPORT IMAGE
import newsAndBlog_image1 from "../../../assets/image/Blog/blog2image.png";
import newsAndBlog_image2 from "../../../assets/image/Blog/blog1image.png";
import Frame from "../../../assets/logo/Blog/Frame1.svg";
//IMPORT REACT ICONS
import { FaArrowRightLong } from "react-icons/fa6";

export default function Blog() {
  const newsAndBlogs = {
    newsAndBlog1: {
      image: newsAndBlog_image1,
      title: "Consulted admitting is power acuteness.",
      date: "January 10, 2024",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
      url: "/blog-details",
    },

    newsAndBlog2: {
      image: newsAndBlog_image2,
      title: "Unsuitable entreaties may collecting",
      date: "May 23 , 2024",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
      url: "/blog-details",
    },
  };
  return (
    <section>
      <div className={styles.newsAndBlogContainer}>
        <div className={styles.newsAndBlogLeftDataContainer}>
          <div>
            <div className={styles.newsAndBlogTextContainer}>
              <p className={styles.newsAndBlogText}>News & blog</p>
              <p className={styles.newsAndBlogHrLine}></p>
            </div>
            <div className={styles.newsAndBlogOurLatestNewsContainer}>
              <h2 className={styles.newsAndBlogOurLatestNewsText}>
                Our Latest News
              </h2>
              <Link className={styles.newsAndBlogViewAllBtn} href={"/blogs"}>
                View all
              </Link>
            </div>
            <p className={styles.newsAndBlogHeaderSubTitle}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </p>
          </div>

          <div className={styles.newsAndBlogFirstContainer}>
            <Image
              className={styles.newsAndBlogImage1}
              src={newsAndBlogs?.newsAndBlog1?.image}
            />

            <Image className={styles.newsAndBlogFrameImage1} src={Frame} />

            <div className={styles.newsAndBlog1TextContainer}>
              <h3 className={styles.newsAndBlogTitleText}>
                {newsAndBlogs?.newsAndBlog1?.title}
              </h3>
              <p className={styles.newsAndBlogDateText}>
                {newsAndBlogs?.newsAndBlog1?.date}
              </p>
              <p className={styles.newsAndBlogSubTitleText}>
                {newsAndBlogs?.newsAndBlog1?.subTitle}
              </p>

              <Link
                className={styles.newsAndBlogReadMoreBtn}
                href={newsAndBlogs?.newsAndBlog1.url}
              >
                Read more <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.newsAndBlogSecondContainer}>
          <Image
            className={styles.newsAndBlogImage2}
            src={newsAndBlogs?.newsAndBlog2?.image}
          />

          <Image className={styles.newsAndBlogFrameImage2} src={Frame} />

          <div className={styles.newsAndBlog2TextContainer}>
            <h3 className={styles.newsAndBlogTitleText}>
              {newsAndBlogs?.newsAndBlog2?.title}
            </h3>
            <p className={styles.newsAndBlogDateText}>
              {newsAndBlogs?.newsAndBlog2?.date}
            </p>
            <p className={styles.newsAndBlogSubTitleText}>
              {newsAndBlogs?.newsAndBlog2?.subTitle}
            </p>

            <Link
              className={styles.newsAndBlogReadMoreBtn}
              href={newsAndBlogs?.newsAndBlog2.url}
            >
              Read more <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
