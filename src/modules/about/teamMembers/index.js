import styles from "./team.module.css";
import Image from "next/image";
import Link from "next/link";

// Import Image
import lineStyleLogo from "../../../assets/logo/TeamMembers/lineStyle.png";
// Import Image
import teamMembersImage1 from "../../../assets/image/TeamMembers/members1.png";
import teamMembersImage2 from "../../../assets/image/TeamMembers/members2.png";
import teamMembersImage3 from "../../../assets/image/TeamMembers/members3.png";
import teamMembersImage4 from "../../../assets/image/TeamMembers/members4.png";
import teamMembersImage5 from "../../../assets/image/TeamMembers/members5.png";
import teamMembersImage6 from "../../../assets/image/TeamMembers/members6.png";

const teamMembers = [
  {
    image: teamMembersImage1,
    name: "Devon Lane",
    profession: "Product Designer ",
    url: "/",
  },
  {
    image: teamMembersImage2,
    name: "Ronald Richards",
    profession: "UI/UX Designer",
    url: "/",
  },
  {
    image: teamMembersImage3,
    name: "Albert Flores",
    profession: "Software Development",
    url: "/",
  },
  {
    image: teamMembersImage4,
    name: "Mira Franci",
    profession: "Product Designer ",
    url: "/",
  },
  {
    image: teamMembersImage5,
    name: "Chance Madsen",
    profession: "UI/UX Designer",
    url: "/",
  },
  {
    image: teamMembersImage6,
    name: "Miracle Kenter",
    profession: "Software Development",
    url: "/",
  },
];

export default function TeamMembers() {
  return (
    <>
      <section className={styles.teamMembersAllDataContainer}>
        <div className={styles.teamMembersHeaderTitleContainer}>
          <h1 className={styles.teamMembersHeaderTitleText}>
            Our Experts Team Member
          </h1>
        </div>

        <div className={styles.teamMembersCardContainer}>
          {teamMembers.map((member, ind) => (
            <div className={styles.teamMembersCardDataContainer} key={ind}>
              <div className={styles.teamMembersImageContainer}>
                <Image
                  className={styles.cardLineStyleImage}
                  src={lineStyleLogo}
                  alt=""
                />

                <Image
                  className={styles.teamMembersImage}
                  src={member.image}
                  alt=""
                />
              </div>

              <div className={styles.teamMembersInfoContainer}>
                <p className={styles.teamMembersName}>{member.name}</p>
                <p className={styles.teamMembersProfession}>
                  {member.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
