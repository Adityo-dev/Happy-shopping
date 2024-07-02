"use client";
import styles from "./featuredProduct.module.css";
import Link from "next/link";
import Image from "next/image";
import DSlider from "@/components/slider";

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

export default function FeaturedProduct() {
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

  return (
    <section>
      <h1 className={styles.featuredProductText}>featured Product</h1>
      <DSlider sliderData={mens} />
    </section>
  );
}
