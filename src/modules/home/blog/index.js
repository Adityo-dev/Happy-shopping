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
      <div className={styles.blogAllDataContainer}>
        <div className={styles.blogDataContainer1}>
          <div className={styles.newsAndBlogHeaderTitleContainer}>
            <p className={styles.newsAndBlogHeaderTitle}>NEWS & BLOG</p>
            <p className={styles.newsAndBlogHeaderTitleLLineStyle}></p>
          </div>
          <div className={styles.latestNewsAndBlogContainer}>
            <h1 className={styles.latestNewsAndBlogTitle}>Our Latest News</h1>
            <Link className={styles.newsAndBlogViewAllBtn} href={"/"}>
              View all
            </Link>
          </div>
          <p className={styles.newsAndBlogHeaderSubTitle}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words
          </p>
        </div>

        <div className={styles.blogDataContainer2}>
          <div>
            <Image
              className={styles.blogDataContainer2Image}
              src={newsAndBlogs.newsAndBlog1.image}
              alt=""
            />
          </div>

          <div className={styles.newsAndBlogTextDataContainer1}>
            <h1 className={styles.newsAndBlogTitle}>
              {newsAndBlogs.newsAndBlog1.title}
            </h1>
            <p className={styles.newsAndBlogDate}>
              {newsAndBlogs.newsAndBlog1.date}
            </p>
            <p className={styles.newsAndBlogSubTitle}>
              {newsAndBlogs.newsAndBlog1.subTitle}
            </p>
            <Link className={styles.newsAndBlogReadMoreBtn} href={"?"}>
              Read more{" "}
              <FaArrowRightLong className={styles.ArrowRightLongIcons} />
            </Link>
          </div>
        </div>

        <div className={styles.blogDataContainer3}>
          <div>
            <Image
              className={styles.blogDataContainer3Image}
              src={newsAndBlogs.newsAndBlog2.image}
              alt=""
            />
          </div>

          <div className={styles.newsAndBlogTextDataContainer2}>
            <h1 className={styles.newsAndBlogTitle}>
              {newsAndBlogs.newsAndBlog2.title}
            </h1>
            <p className={styles.newsAndBlogDate}>
              {newsAndBlogs.newsAndBlog2.date}
            </p>
            <p className={styles.newsAndBlogSubTitle}>
              {newsAndBlogs.newsAndBlog2.subTitle}
            </p>
            <Link className={styles.newsAndBlogReadMoreBtn} href={"?"}>
              Read more{" "}
              <FaArrowRightLong className={styles.ArrowRightLongIcons} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
