import styles from "./OurIntroduction.module.css";
import Link from "next/link";
import Image from "next/image";
// IMPOER IMAGE
import ourInto from "../../../assets/image/OurIntroduction/ourInto.png";
import line_image from "../../../assets/logo/OurIntroduction/line.svg";
import chevron_double_o_image from "../../../assets/logo/OurIntroduction/chevron-double-right-o.svg";
import target from "../../../assets/logo/OurIntroduction/3d-target.svg";
import report from "../../../assets/logo/OurIntroduction/3d-report.svg";
import star from "../../../assets/logo/OurIntroduction/3d-star.svg";
import H_line from "../../../assets/logo/OurIntroduction/H-line.svg";
import line95 from "../../../assets/logo/OurIntroduction/line95.png";
import line90 from "../../../assets/logo/OurIntroduction/line90.png";
import line82 from "../../../assets/logo/OurIntroduction/line85.png";

export default function OurIntroduction() {
  const expetriseAndExperienceBoxItem = [
    { Name: "Web Development", level: "95", lineLevel: line95 },
    { Name: "Software Development", level: "90", lineLevel: line90 },
    { Name: "Mobile Development", level: "82", lineLevel: line82 },
  ];

  const items = [
    "Best Service for You",
    "Keeping Your Team Productive",
    "Predictable Costs 24/7",
  ];

  const teamProjectAndReview = [
    { image: target, num: "200+", category: "Team member" },
    { image: H_line },
    { image: report, num: "10k+", category: "Complete projectr" },
    { image: H_line },
    { image: star, num: "900+", category: "Client review" },
  ];
  return (
    <section className={styles.ourIntroductionAllDataContainer}>
      <div className={styles.ourIntroductionDataContainer}>
        <div className={styles.ourIntroductionSubTitleTextContainer}>
          <p className={styles.ourIntroductionSubTitleText}>Our Introduction</p>
          <p className={styles.ourIntroductionSubTitleBorderLine}></p>
        </div>
        <h2 className={styles.ourIntroductionTitleText}>
          Providing the Best Tech Services for Business
        </h2>

        <div className={styles.ourIntroductionMainDataContainer}>
          <div className={styles.ourIntroductionMainDataImageContainer}>
            <Image src={ourInto} width={400} height={400} />

            <div className={styles.ourIntroductionExpetriseBoxContainer}>
              <p className={styles.ourIntroductionExpetriseBoxTitle}>
                Expertise and Experience <br /> Quality Workmanship
              </p>

              <p className={styles.ourIntroductionExpetriseBoxHrLine} />

              <div className={styles.ourIntroductionExpetriseBoxLevelContainer}>
                <Image
                  className={styles.ourIntroductionExpetriseBoxHLineImage}
                  src={line_image}
                  width={8}
                  height={106}
                />

                <div
                  className={
                    styles.ourIntroductionExpetriseBoxLevelItemContainer
                  }
                >
                  {expetriseAndExperienceBoxItem.map((item, ind) => (
                    <div
                      className={
                        styles.ourIntroductionExpetriseBoxLevelItemText
                      }
                      key={ind}
                    >
                      <div
                        className={
                          styles.ourIntroductionExpetriseLevelItemContainer
                        }
                      >
                        <p>{item.Name}</p>
                        <p>{item.level}%</p>
                      </div>

                      <Image
                        className={styles.ourIntroductionExpetriseLeveLineImage}
                        src={item.lineLevel}
                        width={100}
                        height={0}
                      ></Image>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ourIntroductionMainDataTextContainer}>
            <p className={styles.ourIntroductionMainSubText}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </p>

            <div className={styles.ourIntoItemsContainer}>
              {items.map((item, ind) => (
                <p className={styles.ourIntoItemsList} key={ind}>
                  <Image src={chevron_double_o_image} width={24} height={24} />
                  <p>{item}</p>
                </p>
              ))}
            </div>

            <Link className={styles.ourIntroductionGetStBtn} href={"/"}>
              Get Started
            </Link>

            <div className={styles.ourIntoTPRCardContainer}>
              {teamProjectAndReview.map((tpr, ind) => (
                <div className={styles.ourIntoTPRCardDataContainer} key={ind}>
                  <Image src={tpr.image} width={40} height={40}></Image>
                  <p className={styles.ourIntoTPRCardDataNumberText}>
                    {tpr.num}
                  </p>
                  <p className={styles.ourIntoTPRCardDataCategortText}>
                    {tpr.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
