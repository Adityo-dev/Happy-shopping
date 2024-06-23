import Blogs from "@/modules/blog/blogs";
import styles from "./blog.module.css";
import BlogFooter from "@/modules/blog/blogFooter";
import BlogDetails from "@/modules/blog/blogDetails";

export default function BlogPage() {
  return (
    <>
      <div className={styles.blogPageContainer}>
        <Blogs />
        <BlogFooter />
        <BlogDetails />
      </div>
    </>
  );
}
