import ServicesHero from "@/modules/services/hero";
import styles from "./services.module.css";
import HowItWorks from "@/modules/services/howItWorks";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <HowItWorks />
    </>
  );
}
