import styles from "./services.module.css";
import ServicesCategory from "@/modules/services/category";
import WhoWeAre from "@/modules/home/WhoWeAre/WhoWeAre";
import Blog from "@/modules/home/blog";

export default function Services() {
  return (
    <>
      <ServicesCategory />
      <WhoWeAre />
      <Blog />
    </>
  );
}
