import styles from "./services.module.css";
import ServicesCategory from "@/modules/services/category";
import WhoWeAre from "@/modules/home/WhoWeAre/WhoWeAre";
import LeastWork from "@/modules/home/leastWork";
import Blog from "@/modules/home/blog";
import ServiceDetails from "@/modules/services/serviceDetails";

export default function Services() {
  return (
    <>
      <ServicesCategory />
      <WhoWeAre />
      <LeastWork />
      <Blog />
      <ServiceDetails />
    </>
  );
}
