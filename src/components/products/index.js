import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
// component
import ProductDetailsSlider from "../productImageSlider";
// icon
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

// image
import T_Shirt from "../../assets/Men/MenKnittedCasua_ShortSleeveT-Shirt3.png";
import Counter from "../counter";
import Button from "../button";
// logo
import bkash from "../../assets/Home/icons/bkash.png";
import nagad from "../../assets/Home/icons/nagad.png";
import dutch_bangla from "../../assets/Home/icons/dutch-bangla.png";
import paypal from "../../assets/Home/icons/paypal.png";
import visa from "../../assets/Home/icons/visa.png";

const ProductsDetails = () => {
  const productModel = [
    { model: "Availability", modelType: "17 left in stork" },
    { model: "SKU", modelType: "202" },
    { model: "Vendor", modelType: "Vendor F" },
    { model: "Type", modelType: "Type F" },
  ];

  const rulesSummary = [
    "Returns accepted for 30 days",
    "Free return shipping",
    "No restocking fee",
    "No final sale items",
  ];

  const billPayLogos = [
    bkash,
    nagad,
    dutch_bangla,
    paypal,
    visa,
    bkash,
    nagad,
    dutch_bangla,
    paypal,
    visa,
    bkash,
    nagad,
    dutch_bangla,
    paypal,
    visa,
  ];

  const shareIconAndName = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaXTwitter />, name: "Twitter" },
    { icon: <FaPinterest />, name: "Pinterest" },
  ];

  return (
    <section>
      <div className={styles.productsDetailsAllDataContainer}>
        <div className={styles.productsDetailsImage}>
          <ProductDetailsSlider />
        </div>

        <div className={styles.productsDetailsInfoContainer}>
          <h1 className={styles.productName}>Short Sleeve T-Shirt</h1>
          <p className={styles.productPriceContainer}>
            <del className={styles.productPevPrice}>$75.00</del>
            <span className={styles.productCurrentPrice}>$55.00</span>
            <span className={styles.productSavePrice}>Save -27%</span>
          </p>

          <hr className={styles.hr} />

          <p className={styles.productSubText}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>

          <hr className={styles.hr} />

          <div>
            <p>
              <strong>20</strong>{" "}
              <span className={styles.productSubText}>
                People are viewing this right now.
              </span>
            </p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.productModelDataInfoContainer}>
            {productModel.map((model, ind) => (
              <div className={styles.productModelInfoContainer} key={ind}>
                <p className={styles.productModelText}>{model.model}:</p>
                <p
                  className={
                    ind === 0
                      ? styles.markProductModelType
                      : styles.productModelType
                  }
                >
                  {model.modelType}
                </p>
              </div>
            ))}
          </div>

          <hr className={styles.hr} />

          <div>
            <p>Size :</p>
          </div>

          <div>
            <p>Color :</p>
          </div>

          <hr className={styles.hr} />

          <div className={styles.counterAndAllBtnContainer}>
            <Counter />
            <Button btnName={"Add to cart"} btnUrl={""} btnIcon={true} />
            <button className={styles.handleButtonStyle}>Buy it now</button>
          </div>

          <hr className={styles.hr} />

          <div>
            <p className={styles.deliveryDateInfo}>
              <CiDeliveryTruck className={styles.deliveryCarIcon} /> Estimated
              Delivery Date :<strong>27 - 30 July, 2024.</strong>
            </p>
            <p className={styles.rulesSummaryText}>Return rules summary</p>
            <ul className={styles.rulesSummaryListContainer}>
              {rulesSummary.map((rules, ind) => (
                <li key={ind}>{rules}</li>
              ))}
            </ul>
          </div>

          <hr className={styles.hr} />

          <div>
            <p className={styles.checkoutText}>Guaranteed safe checkout</p>
            <div className={styles.payLogoContainer}>
              {billPayLogos.map((payLogo, ind) => (
                <Image
                  key={ind}
                  className={styles.payLogo}
                  src={payLogo}
                  alt=""
                />
              ))}
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.shareDataContainer}>
            <p className={styles.shareText}>Share:</p>
            <div className={styles.shareDataAllInfoContainer}>
              {shareIconAndName.map((shareData, ind) => (
                <Link
                  href={""}
                  className={styles.shareDataInfoContainer}
                  key={ind}
                >
                  <p className={styles.shareDataIcon}>{shareData.icon}</p>
                  <p>{shareData.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <hr className={styles.hr} />
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
