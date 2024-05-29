import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";
//IMPORT IMAGE
import about_image1 from "../../../assets/image/About/Image1.png";
import Frame_icon from "../../../assets/logo/About/Frame.svg";
import Frame2_icon from "../../../assets/logo/About/Frame2.svg";
import about_image2 from "../../../assets/image/About/Image2.png";
import ceo_image from "../../../assets/image/About/ceo-image.png";
import signature_image from "../../../assets/image/About/signature-image.png";
import Design_icon from "../../../assets/logo/About/Design.svg";
import Rectangle_Left_icon from "../../../assets/logo/About/Rectangle-Left.svg";
import Rectangle_Top_icon from "../../../assets/logo/About/Rectangle-Top.svg";
import Dotted_Frame_icon from "../../../assets/logo/About/Dotted-Frame.png";
import Play_button_icon from "../../../assets/logo/About/Play-button.png";
import web_development_icon from "../../../assets/logo/About/web-development.png";
import app_development_icon from "../../../assets/logo/About/app-development.png";
import ui_design_icon from "../../../assets/logo/About/ui-design.png";
import problem_solving_icon from "../../../assets/logo/About/problem-solving.png";
//IMPORT REACT ICONS

export default function AboutHome() {
  const services = [
    { name: "Web Development & Design", image: web_development_icon },
    { name: "Mobile Development", image: app_development_icon },
    { name: "UI/UX Design", image: ui_design_icon },
    { name: "Professional Problem Solutions", image: problem_solving_icon },
  ];
  return (
    <section className={styles.aboutAllDataContainer}>
      <h1 className={styles.aboutHeaderTitleText}>
        We Are Creative Agency <br /> Since 2024
      </h1>

      <div className={styles.aboutDataContainer}>
        <div className={styles.aboutTextDataContainer}>
          <h1 className={styles.aboutTitleText}>
            Professional Programer Agency to provide solutions
          </h1>
          <p className={styles.aboutSubTitleText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>

          <div className={styles.aboutServicesItemContainer}>
            {services.map((service, ind) => (
              <div className={styles.aboutServicesItem} key={ind}>
                <Image src={service.image} width={25} height={25} alt="" />
                <p>{service.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.aboutCEOAllDataContainer}>
            <div className={styles.aboutCEOContainer}>
              <Image src={ceo_image} width={75} height={75} alt="" />
              <div>
                <h3 className={styles.aboutCEONameText}>Esther Howard</h3>
                <p className={styles.aboutCEOText}>CEO & Founder </p>
              </div>
            </div>

            <div>
              <Image src={signature_image} width={110} height={65} alt="" />
            </div>
          </div>

          <Link className={styles.aboutDiscoverMoreBtn} href={"/"}>
            Discover more
          </Link>
        </div>

        <div className={styles.aboutImageAllDataContainer}>
          <div className={styles.aboutFirstImageDataContainer}>
            <Image
              className={styles.aboutFirstImage}
              src={about_image1}
              width={300}
              height={410}
              alt=""
            />
            <Image
              className={styles.aboutFirstImageFrame1}
              src={Frame_icon}
              width={0}
              height={0}
              alt=""
            />
            <Image
              className={styles.aboutFirstImageFrame2}
              src={Frame2_icon}
              width={0}
              height={0}
              alt=""
            />
          </div>

          <div className={styles.aboutSecondImageDataContainer}>
            <Image
              className={styles.aboutSecondImage}
              src={about_image2}
              width={300}
              height={418}
              alt=""
            />

            <Image
              className={styles.aboutSecondImageDesignIcon}
              src={Design_icon}
              width={0}
              height={0}
              alt=""
            />

            <Image
              className={styles.aboutSecondImageRectangleTopIcon}
              src={Rectangle_Top_icon}
              width={0}
              height={0}
              alt=""
            />

            <Image
              className={styles.aboutSecondImageRectangleLeftIcon}
              src={Rectangle_Left_icon}
              width={0}
              height={0}
              alt=""
            />

            <Image
              className={styles.aboutSecondImageDottedFrameIcon}
              src={Dotted_Frame_icon}
              width={0}
              height={0}
              alt=""
            />

            <Link href={"/"}>
              <Image
                className={styles.aboutSecondImagePlayButtonIcon}
                src={Play_button_icon}
                width={80}
                height={80}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
