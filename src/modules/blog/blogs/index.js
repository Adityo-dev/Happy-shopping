import Image from "next/image";
import Link from "next/link";
import styles from "./blogs.module.css";
import blog1 from "@/assets/image/Blog/Blog-image1.png";
import blog2 from "@/assets/image/Blog/Blog-image2.png";
import blog3 from "@/assets/image/Blog/Blog3.png";
import blog4 from "@/assets/image/Blog/Blog4.png";
import blog5 from "@/assets/image/Blog/Blog5.png";
import blog6 from "@/assets/image/Blog/Blog6.png";
import { FaUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog1,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
  {
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog2,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
  {
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog3,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
  {
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog4,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
  {
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog5,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
  {
    blogTitle: "The Best Choice For All Business Needs 2024",
    blogDescription:
      "It is a long established fact that a reader des will oi beik distracted by the readable",
    blogImage: blog6,
    creator: "Admin",
    createdDate: "January 1, 2024",
  },
];

export default function Blogs() {
  return (
    <>
      <div className={styles.blogsContainer}>
        {blogsData.map((blog, ind) => {
          return (
            <div key={ind} className={styles.blogCard}>
              <div className={styles.blogCardImageContainer}>
                <Image
                  src={blog.blogImage}
                  className={styles.blogImage}
                  alt=""
                />
              </div>

              <div className={styles.blogContent}>
                <div className={styles.createdDetails}>
                  <span>
                    <FaUser className={styles.userIcon} />
                    &nbsp; &nbsp;By {blog.creator}
                  </span>{" "}
                  &nbsp; &nbsp;
                  <span>
                    <FaCalendarAlt className={styles.calenderIcon} />
                    &nbsp; &nbsp;
                    {blog.createdDate}
                  </span>
                </div>
                <h1 className={styles.blogTitle}>{blog.blogTitle}</h1>
                <p className={styles.blogDescription}>{blog.blogDescription}</p>
                <Link href={"/"} className={styles.blogBtn}>
                  <span>Read more &nbsp;</span>
                  <FaArrowRight className={styles.rightArrowIcon} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
