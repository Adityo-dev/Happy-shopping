import styles from "./serviceDetails.module.css";
import Link from "next/link";
import Image from "next/image";

//Import react icons
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkCircle } from "react-icons/io5";

//Import image
import ServiceDetailsBGImage from "../../../assets/image/ServiceDetails/ServiceDetailsBG.png";
import ServiceDetails1Image from "../../../assets/image/ServiceDetails/ServiceDetails1.png";
import ServiceDetails2Image from "../../../assets/image/ServiceDetails/ServiceDetails2.png";
import playBtnLogo from "../../../assets/logo/ServiceDetails/Play-button.png";

export default function ServiceDetails() {
  const allServices = [
    { name: "Web Development", url: "" },
    { name: "Software Development", url: "" },
    { name: "UI/UX Design Services", url: "" },
    { name: "Business Intelligence", url: "" },
    { name: "Artificial Intelligence", url: "" },
    { name: "Resource Planning", url: "" },
  ];

  const offer = [
    "Strategy Consulting",
    "Analytics and Reporting",
    "Your Startup",
  ];
  return (
    <main className={styles.serviceDetailsMainDataContainer}>
      <section>
        <div className={styles.allServicesDataContainer}>
          <h3 className={styles.allServicesText}>All Services</h3>

          <div className={styles.serviceItemsContainer}>
            {allServices.map((service, ind) => (
              <div className={styles.serviceInfoContainer} key={ind}>
                <p className={styles.serviceName}>{service.name}</p>
                <GoArrowRight className={styles.arrowRightIcons} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactUsContainer}>
          <Image
            className={styles.serviceDetailsContactUsImage}
            src={ServiceDetailsBGImage}
            alt=""
          />

          <div className={styles.contactInfoContainer}>
            <h4 className={styles.anyProjectText}>Have any Project?</h4>
            <p className={styles.contactNumber}>+123 (2152) 356</p>
            <p className={styles.contactEmail}>ecoysoft@gmail.com</p>

            <Link className={styles.contactBtn} href={"/"}>
              contact us
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.serviceDetailsTopImageContainer}>
          <Image
            className={styles.serviceDetailsTopImage}
            src={ServiceDetails1Image}
            alt=""
          />
          <Image
            className={styles.serviceDetailsTopImagePlayBtnIcon}
            src={playBtnLogo}
            alt=""
          />
        </div>

        <div className={styles.serviceAllInfoRightTextContainer}>
          <h3 className={styles.sectionCategoryText}>Web Development</h3>

          <div className={styles.sectionInfoParagraph}>
            <p>
              Becoming a web developer typically involves learning the
              fundamental technologies (HTML, CSS, JavaScript) followed by
              advanced languages and frameworks suited to your area of interest
              (front-end, back-end, or full-stack). There are countless
              resources available, including online tutorials, coding bootcamps,
              and formal education programs.
            </p>

            <p className={styles.sectionInfoParagraphMt}>
              Web development is a constantly evolving field, with new tools,
              technologies, and best practices emerging regularly. Staying
              up-to-date with the latest developments
            </p>
          </div>
        </div>

        <div className={styles.serviceAllInfoRightTextContainerPage2}>
          <div>
            <h3 className={styles.page2TitleTopText}>
              Benefits With Our Offer
            </h3>

            <p className={styles.sectionInfoParagraph}>
              Web development is a constantly evolving field, with new tools,
              technologies, and best
            </p>

            <div className={styles.offerAllDataContainerPage2}>
              {offer.map((f, ind) => (
                <div className={styles.offerDataInfoPage2} key={ind}>
                  <IoCheckmarkCircle className={styles.CheckmarkCircleIcons} />
                  <p className={styles.sectionInfoParagraph}>{f}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            className={styles.Page2Image}
            src={ServiceDetails2Image}
            alt=""
          />
        </div>

        <div className={styles.serviceAllInfoRightTextContainerPage3}>
          <p className={styles.sectionInfoParagraph}>
            Becoming a web developer typically involves learning the fundamental
            technologies (HTML, CSS, JavaScript) followed by advanced languages
            and frameworks suited to your area of interest (front-end, back-end,
            or full-stack). There are countless resources available, including
            online tutorials, coding bootcamps, and formal education programs.
          </p>
        </div>
      </section>
    </main>
  );
}
