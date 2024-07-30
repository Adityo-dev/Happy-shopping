import styles from "./yourShoppingCards.module.css";
import AddYourShoppingCard from "@/modules/addYourShoppingCard";
import FeaturedProduct from "@/modules/home/featuredProduct";

export default function YourShoppingCards() {
  return (
    <>
      <AddYourShoppingCard />
      <FeaturedProduct />
    </>
  );
}
