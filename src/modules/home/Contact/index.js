import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";
// Import mui
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// IMPORT IMAGE
import wepik_export from "../../../assets/image/Contact/wepik-export.png";
// import spider_web_frame from "../../../assets/image/Contact/spider-web-frame.png";

// import react icons
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export default function Contact() {
  const contactSocialMediaIcon = [
    { icon: <FaFacebookF />, url: "/" },
    { icon: <FaLinkedinIn />, url: "/" },
    { icon: <SiUpwork />, url: "/" },
    { icon: <TbBrandFiverr />, url: "/" },
  ];

  return (
    <section className={styles.contactAllDataContainer}>
      <div className={styles.contactDataContainer}>
        <div className={styles.contactTextAllDataContainer}>
          <div className={styles.contactHeaderTitleText}>
            <p>GET IN TOUCH</p>
            <p className={styles.contactTitleHtLine}></p>
          </div>
          <h2 className={styles.contactTitleText}>
            Get free IT business consultation today. Feel free to contact!
          </h2>
          <p className={styles.contactSubTitleText}>
            We’re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          <div className={styles.contactIconsContainer}>
            {contactSocialMediaIcon.map((icon, ind) => (
              <Link
                className={styles.contactIconsList}
                href={icon.url}
                key={ind}
              >
                <p className={styles.contactIcon}>{icon.icon}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.contactFieldAllDataContainer}>
          <Image
            className={styles.contactWomenImage}
            src={wepik_export}
            width={289}
            height={520}
            alt=""
          />

          <div className={styles.contactFieldContainer}>
            <h3 className={styles.contactFieldHeaderTitleText}>
              Please fill in the information below
            </h3>

            <div>
              <Box className={styles.contactInputFieldContainer}>
                <div className={styles.contactNameInputFieldContainer}>
                  <TextField
                    className={styles.contactInputField}
                    id="outlined-name-input"
                    label="Name"
                    type="text"
                  />
                  <FaRegUser className={styles.contactInputFieldUserIcon} />
                </div>
                <div
                  className={styles.contactNumberAndEmailInputFieldContainer}
                >
                  <TextField
                    className={styles.contactInputField}
                    id="outlined-name-input"
                    label="Phome"
                    type="text"
                  />
                  <FiPhone className={styles.contactInputFieldPhoneIcon} />

                  <TextField
                    className={styles.contactInputField}
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                  />

                  <MdOutlineEmail
                    className={styles.contactInputFieldEmailIcon}
                  />
                </div>
                <TextField
                  className={styles.contactInputField}
                  id="outlined-text-input"
                  label="Subject"
                  type="select"
                />
                <TextField
                  className={styles.contactInputField}
                  id="outlined-text-input"
                  label="Message"
                  type="text"
                />

                <Link href={"/"} className={styles.contactSendMessageBtn}>
                  Send Message
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        className={styles.contactSpiderWebFrameImage}
        src={spider_web_frame}
        width={577}
        height={578}
      /> */}
    </section>
  );
}
