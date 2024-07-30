import CollectionsHero from "@/modules/collections/hero";
import styles from "./collections.module.css";
import CollectionCardData from "@/modules/collections/collectionCardData";

const Collections = ({ params }) => {
  return (
    <div className={styles.collectionsAllDataContainer}>
      <CollectionsHero heroData={params} />
      <CollectionCardData cartData={params} />
    </div>
  );
};

export default Collections;
