import styles from "./yourShoppingCards.module.css";
import AddCard from "@/modules/addCard";
import FeaturedProduct from "@/modules/home/featuredProduct";

export default function YourShoppingCards() {
  return (
    <>
      <AddCard />
      <FeaturedProduct />
    </>
  );
}
