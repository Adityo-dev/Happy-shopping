import styles from "./suitsFormalWearAndTopsGowns.module.css";
import Image from "next/image";

// Import Image
import suitsFormalWear_image from "../../../assets/Home/Image/suits_formalWear.png";
import topsGowns_image from "../../../assets/Home/Image/tops_gowns.png";
import Button from "@/components/button";

export default function SuitsFormalWearAndTopsGowns() {
  const suitsFormalWearAndTopsGowns = [
    {
      title: "suits & Formalwear",
      image: suitsFormalWear_image,
    },

    {
      title: "Tops & Gowns",
      image: topsGowns_image,
    },
  ];

  return (
    <section>
      <div className={styles.suitsFormalWearAndTopsGownsAllDataContainer}>
        {suitsFormalWearAndTopsGowns.map((suitsAndTopsData, ind) => (
          <div
            className={styles.suitsFormalWearAndTopsGownsDataContainer}
            key={ind}
          >
            <div>
              <h2 className={styles.suitsFormalWearAndTopsGownsTitle}>
                {suitsAndTopsData.title}
              </h2>
              <Button btnName={"shop now"} btnUrl={"/"} />
            </div>

            <Image
              className={styles.suitsFormalWearAndTopsGownsImage}
              src={suitsAndTopsData.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
