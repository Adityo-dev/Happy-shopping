"use client";
import styles from "./bestSelling.module.css";
import Link from "next/link";
import Image from "next/image";

// Import Image

// Mens Image
import BaroccoSeaCamp1_Image from "../../../assets/Men/BaroccoSeaCamp-CollarPrintedSilk-TwillShirt1.png";
import BaroccoSeaCamp2_Image from "../../../assets/Men/BaroccoSeaCamp-CollarPrintedSilk-TwillShirt2.png";
import BaroccoSeaCamp3_Image from "../../../assets/Men/BaroccoSeaCamp-CollarPrintedSilk-TwillShirt3.png";
import nikeShoes1_Image from "../../../assets/Men/nike-shoes1.png";
import nikeShoes2_Image from "../../../assets/Men/nike-shoes3.png";
import nikeShoes3_Image from "../../../assets/Men/nike-shoes2.png";
import AppleWatchSeries8GPS1_Image from "../../../assets/Men/AppleWatchSeries8GPS1.png";
import AppleWatchSeries8GPS2_Image from "../../../assets/Men/AppleWatchSeries8GPS2.png";
import AppleWatchSeries8GPS3_Image from "../../../assets/Men/AppleWatchSeries8GPS3.png";
import MenSunglass1_Image from "../../../assets/Men/men-sunglass3.png";
import MenSunglass2_Image from "../../../assets/Men/men-sunglass1.png";
import MenSunglass3_Image from "../../../assets/Men/men-sunglass2.png";
import BoyModPorkpieHat1_Image from "../../../assets/Men/BoyModPorkpieHat1.png";
import BoyModPorkpieHat2_Image from "../../../assets/Men/BoyModPorkpieHat2.png";
import BoyModPorkpieHat3_Image from "../../../assets/Men/BoyModPorkpieHat3.png";
import ShortSleeveTShirt1_Image from "../../../assets/Men/MenKnittedCasua_ShortSleeveT-Shirt1.png";
import ShortSleeveTShirt2_Image from "../../../assets/Men/MenKnittedCasua_ShortSleeveT-Shirt3.png";
import ShortSleeveTShirt3_Image from "../../../assets/Men/MenKnittedCasua_ShortSleeveT-Shirt1.png";
import POLOShortsForMen1_Image from "../../../assets/Men/POLO-Shorts-for-Men1.png";
import POLOShortsForMen2_Image from "../../../assets/Men/POLO-Shorts-for-Men3.png";
import POLOShortsForMen3_Image from "../../../assets/Men/POLO-Shorts-for-Men1.png";

// woMens Image
import CROPPED_TEE_KHAKI1_Image from "../../../assets/WoMen/CROPPED-TEE-KHAKI-L-1.png";
import CROPPED_TEE_KHAKI2_Image from "../../../assets/WoMen/CROPPED-TEE-KHAKI-L-2.png";
import CROPPED_TEE_KHAKI3_Image from "../../../assets/WoMen/CROPPED-TEE-KHAKI-L-3.png";
import Tumble_Dry_Low_jersey1_Image from "../../../assets/WoMen/Tumble-Dry-Low-jersey1.png";
import Tumble_Dry_Low_jersey2_Image from "../../../assets/WoMen/Tumble-Dry-Low-jersey2.png";
import Tumble_Dry_Low_jersey3_Image from "../../../assets/WoMen/Tumble-Dry-Low-jersey3.png";
import Luisa_Pleated_Wide_leg_Pants1_Image from "../../../assets/WoMen/Luisa-Pleated-Wide-leg-Pants1.png";
import Luisa_Pleated_Wide_leg_Pants2_Image from "../../../assets/WoMen/Luisa-Pleated-Wide-leg-Pants2.png";
import Luisa_Pleated_Wide_leg_Pants3_Image from "../../../assets/WoMen/Luisa-Pleated-Wide-leg-Pants3.png";
import Textured_Leather_Crossbody_Bag1_Image from "../../../assets/WoMen/Textured_Leather_Crossbody_Bag1.png";
import Textured_Leather_Crossbody_Bag2_Image from "../../../assets/WoMen/Textured_Leather_Crossbody_Bag2.png";
import Textured_Leather_Crossbody_Bag3_Image from "../../../assets/WoMen/Textured_Leather_Crossbody_Bag3.png";
import High_Heels1_Image from "../../../assets/WoMen/High-Heels1.png";
import High_Heels2_Image from "../../../assets/WoMen/High-Heels3.png";
import High_Heels3_Image from "../../../assets/WoMen/High-Heels2.png";
import Ring1_Image from "../../../assets/WoMen/Ring1.png";
import Ring2_Image from "../../../assets/WoMen/Ring2.png";
import Ring3_Image from "../../../assets/WoMen/Ring3.png";
import Wristwatch2_Image from "../../../assets/WoMen/Wristwatch1.png";
import Wristwatch1_Image from "../../../assets/WoMen/Wristwatch2.png";
import Wristwatch3_Image from "../../../assets/WoMen/Wristwatch3.png";
import Cotton_Skirt1_Image from "../../../assets/WoMen/cotton-summer-skirt3.png";
import Cotton_Skirt2_Image from "../../../assets/WoMen/cotton-summer-skirt1.png";
import Cotton_Skirt3_Image from "../../../assets/WoMen/cotton-summer-skirt2.png";

// Baby Image
import BabyShoes1_Image from "../../../assets/Baby/BabyShoes1.png";
import BabyShoes2_Image from "../../../assets/Baby/BabyShoes2.png";
import BabyShoes3_Image from "../../../assets/Baby/BabyShoes3.png";

//Tabs
import { Tab } from "@headlessui/react";
import Card from "@/components/card";
import Button from "@/components/button";

export default function BestSelling() {
  const mens = [
    {
      cover: [
        BaroccoSeaCamp1_Image,
        BaroccoSeaCamp2_Image,
        BaroccoSeaCamp3_Image,
      ],
      name: "Barocco Sea Twill Shirt",
      title:
        " It's hard to ignore the siren call of Versace's 'Barocco Sea' camp-collar shirt. It's been cut in Italy from smooth silk-twill and printed with shells, corals and starfish in the house's signature ornate style. Wear yours with the matching shorts for the full effect.",
      details: "A thrilling adventure novel",
      discountPrice: 50.99,
      currentPrice: 10.99,
    },
    {
      cover: [nikeShoes1_Image, nikeShoes2_Image, nikeShoes3_Image],
      name: "W. Men Formal T-shirt",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A romantic comedy",
      discountPrice: 50.99,
      currentPrice: 12.5,
    },
    {
      cover: [
        AppleWatchSeries8GPS1_Image,
        AppleWatchSeries8GPS3_Image,
        AppleWatchSeries8GPS2_Image,
      ],
      name: "Apple Watch Series 8 GPS",
      title:
        "Apple Watch Series 8 GPS 45mm Silver Aluminum with White Sport Band A2771 || Buy and sell the hottest sneakers including Adidas Yeezy and Retro Jordans, Supreme streetwear, trading cards, collectibles, designer handbags and watches.",
      details: "A historical fiction",
      discountPrice: 50.99,
      currentPrice: 15.99,
    },
    {
      cover: [MenSunglass2_Image, MenSunglass1_Image, MenSunglass2_Image],
      name: "W. Men Formal T-shirt",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A sci-fi epic",
      discountPrice: 50.99,
      currentPrice: 14.25,
    },
    {
      cover: [
        BoyModPorkpieHat1_Image,
        BoyModPorkpieHat3_Image,
        BoyModPorkpieHat2_Image,
      ],
      name: "Dasmarca Rico Porkpie Hat",
      title:
        "Men's Dasmarca Rico Summer Telescope Crown Lightweight Breathable Rude-Boy Mod Porkpie Hat - Black | 59Cm | Dasmarca Hats",
      details: "A self-help guide",
      discountPrice: 50.99,
      currentPrice: 9.99,
    },
    {
      cover: [
        ShortSleeveTShirt2_Image,
        ShortSleeveTShirt1_Image,
        ShortSleeveTShirt3_Image,
      ],
      name: "W. Men Formal T-shirt",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A mystery thriller",
      discountPrice: 50.99,
      currentPrice: 11.75,
    },
    {
      cover: [
        POLOShortsForMen2_Image,
        POLOShortsForMen3_Image,
        POLOShortsForMen1_Image,
      ],
      name: "polo ralph lauren shorts",
      title:
        "POLO RALPH LAUREN Mid-Length Straight-Leg Striped Cotton-Blend Seersucker Swim Shorts for Men || Blue and white cotton-blend seersucker 68% cotton, 27% polyester, 5% elastane Machine wash Designer colour: Cruise Royal",
      details: "A fantasy adventure",
      discountPrice: 50.99,
      currentPrice: 13.49,
    },
    {
      cover: [
        ShortSleeveTShirt2_Image,
        ShortSleeveTShirt1_Image,
        ShortSleeveTShirt3_Image,
      ],
      name: "W. Men Formal T-shirt",
      title:
        " Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnico...",
      details: "A psychological drama",
      discountPrice: 50.99,
      currentPrice: 16.99,
    },
  ];

  const woMens = [
    {
      cover: [
        CROPPED_TEE_KHAKI2_Image,
        CROPPED_TEE_KHAKI1_Image,
        CROPPED_TEE_KHAKI3_Image,
      ],
      name: "Cropped Tee Khaki",
      title:
        "Color: BeigeFabric: Cotton 100%Care: Machine Wash Cold/ Tumble Dry Low Raw-edge dense jersey tee. 18.5' (47cm) long. Made in USA.",
      details: "A thrilling adventure novel",
      discountPrice: 50.99,
      currentPrice: 10.99,
    },
    {
      cover: [
        Tumble_Dry_Low_jersey1_Image,
        Tumble_Dry_Low_jersey2_Image,
        Tumble_Dry_Low_jersey3_Image,
      ],
      name: "Tumble Dry Low jersey",
      title:
        "Color: BeigeFabric: Cotton 100%Care: Machine Wash Cold/ Tumble Dry Low Raw-edge dense jersey tee. 18.5' (47cm) long. Made in USA.",
      details: "A romantic comedy",
      discountPrice: 50.99,
      currentPrice: 12.5,
    },
    {
      cover: [
        Luisa_Pleated_Wide_leg_Pants1_Image,
        Luisa_Pleated_Wide_leg_Pants2_Image,
        Luisa_Pleated_Wide_leg_Pants3_Image,
      ],
      name: "Luisa Pleated Wide-leg Pants ",
      title:
        "STAUD - Luisa Pleated Twill Wide-leg Pants - Brown - US2STAUD's  'Luisa' pants are made from twill in a neutral sand hue. Detailed with pleats at the high waist, they have voluminous wide legs with floor-sweeping hems. Pair yours with a cropped top and mules, as the brand would.",
      details: "A historical fiction",
      discountPrice: 50.99,
      currentPrice: 15.99,
    },
    {
      cover: [
        Textured_Leather_Crossbody_Bag3_Image,
        Textured_Leather_Crossbody_Bag2_Image,
        Textured_Leather_Crossbody_Bag1_Image,
      ],
      name: "Textured Leather Crossbody Bag",
      title:
        "DKNY Bryant Park MD Textured Leather Crossbody Bag DKNY Bryant Park MD crossbody bag Black textured leather Removable shoulder strap, gold-tone hardware, removable charm Internal slip pocket, fully lined Designer colour: Black/Gold",
      details: "A sci-fi epic",
      discountPrice: 50.99,
      currentPrice: 14.25,
    },
    {
      cover: [High_Heels1_Image, High_Heels2_Image, High_Heels3_Image],
      name: "Dasmarca Rico Porkpie Hat",
      title:
        "Men's Dasmarca Rico Summer Telescope Crown Lightweight Breathable Rude-Boy Mod Porkpie Hat - Black | 59Cm | Dasmarca Hats",
      details: "A self-help guide",
      discountPrice: 50.99,
      currentPrice: 9.99,
    },
    {
      cover: [Ring3_Image, Ring1_Image, Ring2_Image],
      name: "Celestial Mujer Pandora",
      title:
        " Anillo Sol Celestial Mujer Pandora Nombre comercial: Anillo Sol Celestial,Posee niquel: No,Garantia del proveedor_: 1 Ano,Temporada: Toda temporada,Modelo: 162674C01,Incluye: Empaque de la Marca,Material_: Banado en oro,Condicion del producto: Nuevo,Pais de origen: Tailandia,Genero: Mujer... less",
      details: "A mystery thriller",
      discountPrice: 50.99,
      currentPrice: 11.75,
    },
    {
      cover: [Wristwatch1_Image, Wristwatch2_Image, Wristwatch3_Image],
      name: "Alloy Strap Lady Wristwatch",
      title:
        "CURREN 9016 Women Quartz Watch Casual Style Simple Dial Luxury Alloy Strap Lady Wristwatch - NO.5 CURREN 9016 Women Quartz Watch Casual Style Simple Dial Luxury Alloy Strap Lady Wristwatch Specification Brand Name: CURREN Model Number: 9106 Movement: Quartz Item Type: Wrist Watch Dial Window Material: Glass Band Material: Alloy Dial Display: Analog Clasp Type: Fold Buckle Style: Fashion, Casual Gender: Female Water Resistance: Life Waterproof. (Sweat, small raindrops not afraid, But don't flush, Bubble water, Bathing etc.) Features: Time Display Dial Diameter: about 30 mm Case Thickness: abo",
      details: "A fantasy adventure",
      discountPrice: 50.99,
      currentPrice: 13.49,
    },
    {
      cover: [Cotton_Skirt1_Image, Cotton_Skirt2_Image, Cotton_Skirt3_Image],
      name: "cotton summer skirt ",
      title:
        "Light and airy cotton summer skirt with a beautiful oriental print Light and airy Jaipuri skirt with a beautiful oriental print, made from sustainable Indian cotton. Absolute eye-catcher! Universal size. Depending on the length, the skirt falls on the calves or ankles.",
      details: "A psychological drama",
      discountPrice: 50.99,
      currentPrice: 16.99,
    },
  ];

  const babys = [
    {
      cover: [BabyShoes3_Image, BabyShoes1_Image, BabyShoes2_Image],
      name: "Sneaker Toddler Shoes ",
      title:
        "Nike Kids' Court Legacy Low Top Sneaker Toddler Shoes (White/Blue/Pink) Give them a classic look in the Kids' Nike Court Legacy Low Top Sneaker. Leather upper in a classic lifestyle sneaker style with a round toe. Slip-on entry with elastic laces and adjustable hook and loop strap. Padded collar and tongue for increased comfort. Soft lining with foam cushioning. Durable rubber traction outsole.",
      details: "A thrilling adventure novel",
      discountPrice: 50.99,
      currentPrice: 10.99,
    },
    {
      cover: [
        Tumble_Dry_Low_jersey1_Image,
        Tumble_Dry_Low_jersey2_Image,
        Tumble_Dry_Low_jersey3_Image,
      ],
      name: "Tumble Dry Low jersey",
      title:
        "Color: BeigeFabric: Cotton 100%Care: Machine Wash Cold/ Tumble Dry Low Raw-edge dense jersey tee. 18.5' (47cm) long. Made in USA.",
      details: "A romantic comedy",
      discountPrice: 50.99,
      currentPrice: 12.5,
    },
    {
      cover: [
        Luisa_Pleated_Wide_leg_Pants1_Image,
        Luisa_Pleated_Wide_leg_Pants2_Image,
        Luisa_Pleated_Wide_leg_Pants3_Image,
      ],
      name: "Luisa Pleated Wide-leg Pants ",
      title:
        "STAUD - Luisa Pleated Twill Wide-leg Pants - Brown - US2STAUD's  'Luisa' pants are made from twill in a neutral sand hue. Detailed with pleats at the high waist, they have voluminous wide legs with floor-sweeping hems. Pair yours with a cropped top and mules, as the brand would.",
      details: "A historical fiction",
      discountPrice: 50.99,
      currentPrice: 15.99,
    },
    {
      cover: [
        Textured_Leather_Crossbody_Bag3_Image,
        Textured_Leather_Crossbody_Bag2_Image,
        Textured_Leather_Crossbody_Bag1_Image,
      ],
      name: "Textured Leather Crossbody Bag",
      title:
        "DKNY Bryant Park MD Textured Leather Crossbody Bag DKNY Bryant Park MD crossbody bag Black textured leather Removable shoulder strap, gold-tone hardware, removable charm Internal slip pocket, fully lined Designer colour: Black/Gold",
      details: "A sci-fi epic",
      discountPrice: 50.99,
      currentPrice: 14.25,
    },
    {
      cover: [High_Heels1_Image, High_Heels2_Image, High_Heels3_Image],
      name: "Dasmarca Rico Porkpie Hat",
      title:
        "Men's Dasmarca Rico Summer Telescope Crown Lightweight Breathable Rude-Boy Mod Porkpie Hat - Black | 59Cm | Dasmarca Hats",
      details: "A self-help guide",
      discountPrice: 50.99,
      currentPrice: 9.99,
    },
    {
      cover: [Ring3_Image, Ring1_Image, Ring2_Image],
      name: "Celestial Mujer Pandora",
      title:
        " Anillo Sol Celestial Mujer Pandora Nombre comercial: Anillo Sol Celestial,Posee niquel: No,Garantia del proveedor_: 1 Ano,Temporada: Toda temporada,Modelo: 162674C01,Incluye: Empaque de la Marca,Material_: Banado en oro,Condicion del producto: Nuevo,Pais de origen: Tailandia,Genero: Mujer... less",
      details: "A mystery thriller",
      discountPrice: 50.99,
      currentPrice: 11.75,
    },
    {
      cover: [Wristwatch1_Image, Wristwatch2_Image, Wristwatch3_Image],
      name: "Alloy Strap Lady Wristwatch",
      title:
        "CURREN 9016 Women Quartz Watch Casual Style Simple Dial Luxury Alloy Strap Lady Wristwatch - NO.5 CURREN 9016 Women Quartz Watch Casual Style Simple Dial Luxury Alloy Strap Lady Wristwatch Specification Brand Name: CURREN Model Number: 9106 Movement: Quartz Item Type: Wrist Watch Dial Window Material: Glass Band Material: Alloy Dial Display: Analog Clasp Type: Fold Buckle Style: Fashion, Casual Gender: Female Water Resistance: Life Waterproof. (Sweat, small raindrops not afraid, But don't flush, Bubble water, Bathing etc.) Features: Time Display Dial Diameter: about 30 mm Case Thickness: abo",
      details: "A fantasy adventure",
      discountPrice: 50.99,
      currentPrice: 13.49,
    },
    {
      cover: [Cotton_Skirt1_Image, Cotton_Skirt2_Image, Cotton_Skirt3_Image],
      name: "cotton summer skirt ",
      title:
        "Light and airy cotton summer skirt with a beautiful oriental print Light and airy Jaipuri skirt with a beautiful oriental print, made from sustainable Indian cotton. Absolute eye-catcher! Universal size. Depending on the length, the skirt falls on the calves or ankles.",
      details: "A psychological drama",
      discountPrice: 50.99,
      currentPrice: 16.99,
    },
  ];

  return (
    <>
      <section className={styles.bestSellingAllDataContainer}>
        <div className={styles.bestSellingTextAndTabsContainer}>
          <h1 className={styles.bestSellingText}>Best Selling</h1>

          <div>
            <Tab.Group>
              <Tab.List className={styles.bestSellingTabListContainer}>
                <Tab className={styles.bestSellingTabBtn}>Men</Tab>
                <Tab className={styles.bestSellingTabBtn}>Women</Tab>
                <Tab className={styles.bestSellingTabBtn}>Baby</Tab>
              </Tab.List>
              <Tab.Panels className={styles.bestSellingTabPanelsContainer}>
                <Tab.Panel>
                  <div className={styles.bestSellingCar}>
                    {mens.map((men, ind) => (
                      <Card key={ind} cardData={men} />
                    ))}
                  </div>
                  <div className={styles.viewAllButton}>
                    <Button btnName={"View All"} btnUrl={"/collections/mens"} />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className={styles.bestSellingCar}>
                    {woMens.map((woMen, ind) => (
                      <Card key={ind} cardData={woMen} />
                    ))}
                  </div>
                  <div className={styles.viewAllButton}>
                    <Button
                      btnName={"View All"}
                      btnUrl={"/collections/womens"}
                    />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className={styles.bestSellingCar}>
                    {babys.map((baby, ind) => (
                      <Card key={ind} cardData={baby} />
                    ))}
                  </div>
                  <div className={styles.viewAllButton}>
                    <Button btnName={"View All"} btnUrl={"/collections/baby"} />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  );
}
