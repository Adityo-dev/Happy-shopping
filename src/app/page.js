import styles from "./page.module.css";
import Hero from "@/modules/home/hero";
import BestSelling from "@/modules/home/bestSelling";
import BestOffer from "@/modules/home/bestOffer";
import Services from "@/modules/home/services";
import SuitsFormalWearAndTopsGowns from "@/modules/home/suitsFormalWearAndTopsGowns";

export default function Home() {
  return (
    <main className={styles.pageMainAllDataContainer}>
      <Hero />
      <SuitsFormalWearAndTopsGowns />
      <BestSelling />
      <BestOffer />
      <Services />
    </main>
  );
}
