import AboutHome from "@/modules/home/about";
import styles from "./about.module.css";
import TeamMembers from "@/modules/about/teamMembers";
import Blog from "@/modules/home/blog";
import WhyClientsLoveUs from "@/modules/about/whyClient’sLoveUs";
import BrandPotential from "@/modules/about/brandPotential";

export default function About() {
  return (
    <>
      <AboutHome />
      <TeamMembers />
      <WhyClientsLoveUs />
      <BrandPotential />
      {/* <Blog /> */}
    </>
  );
}
