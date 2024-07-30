import styles from "./page.module.css";
import Hero from "@/modules/home/hero";
import SuitsFormalWearAndTopsGowns from "@/modules/home/suitsFormalWearAndTopsGowns";
import BestSelling from "@/modules/home/bestSelling";
import BestOffer from "@/modules/home/bestOffer";
import FeaturedCollection from "@/modules/home/featuredCollection";
import Services from "@/modules/home/services";
import NewArrivals from "@/modules/home/newArrivals";
import Marquee from "@/modules/home/marquee";
import ProductsDetails from "@/components/products";

export default function Home() {
  return (
    <main className={styles.pageMainAllDataContainer}>
      <Hero />
      <SuitsFormalWearAndTopsGowns />
      <BestSelling />
      <BestOffer />
      <FeaturedCollection />
      <NewArrivals />
      <Marquee />
      <Services />
      <ProductsDetails />
    </main>
  );
}
