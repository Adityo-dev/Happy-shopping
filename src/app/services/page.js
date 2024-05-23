import styles from "./services.module.css";
import ServicesCategory from "@/modules/services/category";
import RecentProject from "@/modules/services/recentProject";
import LatestNews from "@/modules/services/latestNews";

export default function Services() {
  return (
    <>
      <ServicesCategory />
      {/* <>Who we are component will there</> */}
      <RecentProject />
      <LatestNews />
    </>
  );
}
