import styles from "./page.module.css";
import Button from "@/components/button";
import Hero from "@/modules/home/hero";
import Services from "@/modules/home/services";

import CaseStudies from "@/modules/home/caseStudy";
import Feedback from "@/modules/home/feedback";
import ClientCompany from "@/modules/home/clientCompany";
import Pricing from "@/modules/home/pricing";
import Blog from "@/modules/home/blog";
import FAQ from "@/modules/home/FAQ";
import OurIntroduction from "@/modules/home/OurIntroduction/OurIntroduction";
import Contact from "@/modules/home/Contact";
import AboutHome from "@/modules/home/about";

export default function Home() {
  return (
    <>
      {/* <Button /> */}
      <Hero />
      <AboutHome />
      <Services />
      <OurIntroduction />
      {/* <CaseStudies /> */}
      <Feedback />
      {/* <ClientCompany /> */}
      <Pricing />
      <Contact />
      {/* <FAQ /> */}
      {/* <Blog /> */}
    </>
  );
}
