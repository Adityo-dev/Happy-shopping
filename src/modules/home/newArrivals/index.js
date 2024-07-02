import styles from "./newArrivals.module.css";
import Image from "next/image";

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

import DSlider from "@/components/slider";

export default function NewArrivals() {
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

  return (
    <>
      <section>
        <h1 className={styles.newArrivalsText}>new Arrivals</h1>
        <DSlider sliderData={woMens} />
      </section>
    </>
  );
}
