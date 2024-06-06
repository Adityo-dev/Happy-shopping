import styles from "./services.module.css";
import ServicesCategory from "@/modules/services/category";
import RecentProject from "@/modules/services/recentProject";
import LatestNews from "@/modules/services/latestNews";
import WhoWeAre from "@/modules/home/WhoWeAre/WhoWeAre";

export default function Services() {
  return (
    <>
      <ServicesCategory />
      <WhoWeAre />
      <RecentProject />
      <LatestNews />
    </>
  );
}
