import AboutHero from "@/modules/about/hero";
import styles from "./about.module.css";
import AboutExpertise from "@/modules/about/expertise";
import AboutVideo from "@/modules/about/video";
import SuccessCompany from "@/modules/about/successCompany";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutExpertise />
      <AboutVideo />
      <SuccessCompany />
    </>
  );
}
