import styles from "./whyus.module.css";

export default function WhyUs() {
  const WhyUs = [
    {
      title: "Expertise",
      subTitle:
        "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    },
    {
      title: "Tech",
      subTitle:
        "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
    },
    {
      title: "Solutions",
      subTitle:
        "We take a personalized approach to every project, working closely with you to understand your business and create specific solutions.",
    },
    {
      title: "Results",
      subTitle:
        "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
    },
  ];
  return (
    <section className={styles.whyUsHomeContainer}>
      <div className={styles.whyUsHomeDataContainer}>
        <div className={styles.whyUsHomeTetxStyleContainer}>
          <h2 className={styles.whyUsHomeTitleText}>Why Us?</h2>

          <div>
            <div className={styles.whyUsHomeFirstBoxStyle}></div>
            <div className={styles.whyUsHomeSecondBoxStyle}></div>
          </div>
        </div>

        <div className={styles.whyUsHomeListAllDataContainer}>
          {WhyUs.map((why, ind) => (
            <div className={styles.whyUsHomeListDataContainer} key={ind}>
              <h3 className={styles.whyUsHomeListTitle}>{why.title}</h3>
              <p className={styles.whyUsHomeListSubTitle}>{why.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
