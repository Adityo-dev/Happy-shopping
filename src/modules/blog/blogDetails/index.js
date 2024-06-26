import styles from "./blogDetails.module.css";
import Image from "next/image";
import Link from "next/link";

// import image
import Rectangle1 from "../../../assets/image/BlogDetails/Rectangle1.png";
import Rectangle2 from "../../../assets/image/BlogDetails/Rectangle2.png";
import Rectangle3 from "../../../assets/image/BlogDetails/Rectangle3.png";
import RecentPost1 from "../../../assets/image/BlogDetails/recentPost1.png";
import RecentPost2 from "../../../assets/image/BlogDetails/recentPost2.png";
import RecentPost3 from "../../../assets/image/BlogDetails/recentPost3.png";
import SandyLukaImage from "../../../assets/image/BlogDetails/SandyLukaImage.png";
import PreviewsPost1 from "../../../assets/image/BlogDetails/PreviewsPost1.png";
import PreviewsPost2 from "../../../assets/image/BlogDetails/recentPost2.png";
import comment1Image from "../../../assets/image/BlogDetails/CommentImage1.png";
import comment2Image from "../../../assets/image/BlogDetails/CommentImage2.png";
import comment3Image from "../../../assets/image/BlogDetails/CommentImage3.png";
import WritingSectionIcons from "../../../assets/image/BlogDetails/WritingSectionIcons.png";

//Import react icons
import { GoArrowRight } from "react-icons/go";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaSmsSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { LuMoveLeft } from "react-icons/lu";
import { PiArrowUUpLeftLight } from "react-icons/pi";

// import mui
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BlogDetails() {
  const allServices = [
    { name: "Web Development", url: "" },
    { name: "Software Development", url: "" },
    { name: "UI/UX Design Services", url: "" },
    { name: "Business Intelligence", url: "" },
    { name: "Artificial Intelligence", url: "" },
    { name: "Resource Planning", url: "" },
  ];

  const recentPost = [
    {
      image: RecentPost1,
      title: "Four Steps To Conduct A Successful Usability",
      date: "20 JAN. 2024",
    },

    {
      image: RecentPost2,
      title: "6 Big Commerce Design Tips For Big",
      date: "20 AUG. 2024",
    },

    {
      image: RecentPost3,
      title: "Everything You Should Know About Return",
      date: "20 JAN. 2024",
    },
  ];

  const contactIconsData = [
    { icon: <FaFacebookF />, url: "" },
    { icon: <FaXTwitter />, url: "" },
    { icon: <FaLinkedinIn />, url: "" },
    { icon: <FaPinterestP />, url: "" },
  ];

  const popularTag = [
    "Fruits",
    "Agriculture",
    "Food",
    "Dairy Product",
    "Organic Food",
    "Fresh Vegetable",
    "Organic",
  ];

  const commentData = [
    {
      image: comment1Image,
      name: "Romeo Paul",
      dateAndTime: "September, 12 2023 at 07:23 AM",
      comment:
        "Fermentum dolor at, consectetur magna. Praesent fringilla consequat erat, ac cursus dolor Ultricies sit amet. Sed ipsum dolor, viverra eu libero a, tempus",
    },

    {
      image: comment2Image,
      name: "Angela Lucy",
      dateAndTime: "September, 12 2023 at 07:23 AM",
      comment:
        "Fermentum dolor at, consectetur magna. Praesent fringilla consequat erat, ac cursus dolor Ultricies sit amet. Sed ipsum dolor, viverra eu",
    },

    {
      image: comment3Image,
      name: "Beatrice Vicki",
      dateAndTime: "September, 12 2023 at 07:23 AM",
      comment:
        "Fermentum dolor at, consectetur magna. Praesent fringilla consequat erat, ac cursus dolor Ultricies sit amet. Sed ipsum dolor, viverra eu libero a, tempus",
    },
  ];

  return (
    <main className={styles.blogDetailsAllDataContainer}>
      <section>
        {/* Page 1 */}
        <div>
          <div>
            <Image
              className={styles.blogDetailsATopImage}
              src={Rectangle1}
              alt=""
            />

            <div className={styles.blogDetailsUserCalendarAndSmsContainer}>
              <div className={styles.blogDetailsUserCalendarAndSms}>
                <FaRegUser
                  className={styles.blogDetailsUserCalendarAndSmsIcons}
                />
                <p className={styles.blogDetailsUserCalendarAndSmsText}>
                  Albert Flores
                </p>
              </div>
              <div className={styles.blogDetailsUserCalendarAndSms}>
                <FaRegCalendarAlt
                  className={styles.blogDetailsUserCalendarAndSmsIcons}
                />
                <p className={styles.blogDetailsUserCalendarAndSmsText}>
                  Jul 16, 2024
                </p>
              </div>
              <div className={styles.blogDetailsUserCalendarAndSms}>
                <LiaSmsSolid
                  className={styles.blogDetailsUserCalendarAndSmsIcons}
                />
                <p className={styles.blogDetailsUserCalendarAndSmsText}>
                  5 Comments
                </p>
              </div>
            </div>
          </div>

          <div className={styles.blogDetailsTextContainer}>
            <h3 className={styles.blogDetailsTitleText}>
              Praising Business Effectiveness
            </h3>

            <div className={styles.blogDetailsParagraphTextContainer}>
              <p className={styles.sectionInfoParagraphMt}>
                In the realm of business, effectiveness stands as a testament to
                an organization's ability to not only envision success but to
                manifest it through adept management, strategic innovation, and
                operational excellence. Praising a business for its
                effectiveness is acknowledging
              </p>

              <p className={styles.sectionInfoParagraphMt}>
                The harmonious blend of foresight, adaptability, and the
                relentless pursuit of excellence that defines its journey. Such
                businesses set benchmarks, inspire transformation, and drive
                progress,
              </p>

              <p className={styles.sectionInfoParagraphMt}>
                Proving that with the right blend of resources, vision, and
                execution, achieving outstanding results is not just possible
                but expected. Their story is a beacon for others, highlighting
                the rewards of dedication, strategic planning, and the
                unwavering commitment to excellence in every facet of their
                operations.
              </p>
            </div>
          </div>

          <div className={styles.blogDetailsWritingContainer}>
            <p className={styles.blogDetailsWritingText}>
              “It's a Joy to collaborate with Bunker. They comprehended our
              brand positioning guidelines and skillfully and consistently
              incorporated them into our ongoing
            </p>

            <div className={styles.blogDetailsWriterAllDataContainer}>
              <div className={styles.blogDetailsWriterContainer}>
                <p className={styles.blogDetailsWriterLineText}></p>
                <p className={styles.blogDetailsWriterText}>Julian Aidan</p>
              </div>

              <Image
                className={styles.blogDetailsWritingSectionIcons}
                src={WritingSectionIcons}
                alt=""
              />
            </div>
          </div>
        </div>

        {/********************Page 2*****************/}
        <div>
          <div className={styles.blogDetailsPage2ImageContainer}>
            <Image
              className={styles.blogDetailsPage2Image}
              src={Rectangle2}
              alt=""
            />
            <Image
              className={styles.blogDetailsPage2Image}
              src={Rectangle3}
              alt=""
            />
          </div>

          <div className={styles.blogDetailsTextContainer}>
            <h3 className={styles.blogDetailsTitleText}>
              Extraordinary claims necessitate a <br /> network of wormhole
              colonies.
            </h3>

            <div className={styles.blogDetailsParagraphTextContainer}>
              <p className={styles.sectionInfoParagraphMt}>
                With a renewed focus on sustainable building methods and
                technology innovation, Leighton Asia aims to lead the industry
                in providing customers with long-lasting value. This brand
                refreshment will help the company confront the challenges of the
                future.
              </p>

              <p className={styles.sectionInfoParagraphMt}>
                However, to help you understand the source of this inherent
                mistake made by those who blame pleasure and exalt pain, I will
                address the entire issue and clarify the precise statements made
                by the truth-seeker and, in a sense, the creator of a joyful
                existence.
              </p>

              <p className={styles.sectionInfoParagraphMt}>
                Constantly willing to push the envelope, particularly with
                regard to our own platform, maximal analytical eye to produce an
                aesthetically appealing and optimally designed website
              </p>
            </div>
          </div>
        </div>

        {/*******************Page3****************/}
        <div>
          <p className={styles.relatedTagsText}>Related Tags:</p>
          <div className={styles.relatedTagAndContactIconsContainer}>
            <div className={styles.relatedTagContainer}>
              {popularTag.slice(0, 3).map((tag, ind) => (
                <div key={ind}>
                  <p className={styles.relatedTag}>{tag}</p>
                </div>
              ))}
            </div>

            <div className={styles.ContactIconsContainer}>
              {contactIconsData.map((icon, ind) => (
                <div key={ind}>
                  <Link className={styles.ContactIcons} href={icon.url}>
                    {icon.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.relatedTagsPublicInformationContainer}>
          <Image
            className={styles.relatedTagsPublicInformationImage}
            src={SandyLukaImage}
            alt=""
          />

          <div>
            <h4 className={styles.relatedTagsPublicInformationName}>
              Sandy Luka
            </h4>
            <p className={styles.relatedTagsPublicInformationSubTitleText}>
              Proin vitae nisi pharetra tellus imperdiet venenatis eget eu nunc.
              Nam vitae est non felis dictum ornare vitae eu ipsum. Nulla
              facilisi. Fusce eget sapien ut mauris dapibus tempus a sed odio.
              Etiam egestas justo, imperdiet enim aliquet eu.
            </p>
          </div>
        </div>

        <div className={styles.recentPostAllDataContainer}>
          <div className={styles.recentPostDataInfoContainer1}>
            <Image
              className={styles.recentPostImage}
              src={PreviewsPost1}
              alt=""
            />

            <div className={styles.recentPostInfoTextContainer1}>
              <h4 className={styles.recentPostInfoTitle1}>
                Creative & smart business ideas
              </h4>
              <p className={styles.recentBtn1}>
                <LuMoveLeft className={styles.recentIconBtn1} /> Previews Post
              </p>
            </div>
          </div>

          <div className={styles.recentPostDataInfoContainer2}>
            <div className={styles.recentPostInfoTextContainer2}>
              <h4 className={styles.recentPostInfoTitle2}>
                History & Future of AI in Marketing
              </h4>
              <p className={styles.recentBtn2}>
                Previews Post{" "}
                <MdArrowRightAlt className={styles.recentIconBtn2} />
              </p>
            </div>

            <Image
              className={styles.recentPostImage}
              src={PreviewsPost2}
              alt=""
            />
          </div>
        </div>

        {/**************Comment*************/}
        <div>
          <div className={styles.commentAllDataContainer}>
            {commentData.map((commentData, ind) => (
              <div className={styles.commentDataInfoContainer} key={ind}>
                <Image
                  className={styles.commentImage}
                  src={commentData.image}
                  alt=""
                />

                <div className={styles.commentDataInfoTextContainer}>
                  <p className={styles.commentNameText}>{commentData.name}</p>
                  <p className={styles.commentDateAndTimeText}>
                    {commentData.dateAndTime}
                  </p>
                  <p className={styles.commentTitleText}>
                    {commentData.comment}
                  </p>

                  <Link className={styles.commentReplyBtn} href={""}>
                    <PiArrowUUpLeftLight
                      className={styles.commentReplyBtnIcon}
                    />
                    reply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Add Comment */}
        <div className={styles.addCommentAllDataContainer}>
          <div>
            <h3 className={styles.leftSectionHeaderTitle}>Add Comment</h3>
            <Box>
              <div className={styles.addCommentTextFieldContainer}>
                <TextField
                  className={styles.addCommentTextField}
                  fullWidth
                  label="Full Name"
                  id="FullName"
                />
                <TextField
                  className={styles.addCommentTextField}
                  fullWidth
                  label="Email Address"
                  id="EmailAddress"
                />
              </div>
              <TextField
                className={styles.addCommentTextField}
                fullWidth
                label="Comment"
                id="Comment"
              />
            </Box>

            <Link className={styles.postCommentBtn} href={"/"}>
              Post Comment
            </Link>
          </div>
        </div>
      </section>

      {/*****************Right section********************/}
      <section className={styles.RightSectionAllDataContainer}>
        {/* Right section Page 1 */}
        <div className={styles.rightSectionContainer}>
          <p className={styles.rightSectionHeaderTitle}>Search</p>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
            <IconButton
              type="button"
              sx={{ p: "10px 20px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <Divider orientation="vertical" />
          </Paper>
        </div>

        {/*{/******************Right section Page 2{/*******************/}
        <div className={styles.rightSectionContainer}>
          <h3 className={styles.rightSectionHeaderTitle}>All Services</h3>

          <div className={styles.serviceItemsContainer}>
            {allServices.map((service, ind) => (
              <div className={styles.serviceInfoContainer} key={ind}>
                <p className={styles.serviceName}>{service.name}</p>
                <GoArrowRight className={styles.arrowRightIcons} />
              </div>
            ))}
          </div>
        </div>

        {/******************Right section Page 3******************/}
        <div className={styles.rightSectionContainer}>
          <h3 className={styles.rightSectionHeaderTitle}>Recent Post</h3>

          <div className={styles.rightSectionRecentPostDataContainer}>
            {recentPost.map((post, ind) => (
              <div className={styles.rightSectionRecentPostData} key={ind}>
                <Image
                  className={styles.recentPostImage}
                  src={post.image}
                  alt=""
                />

                <div className={styles.rightSectionRecentPostInfoContainer}>
                  <h4 className={styles.rightSectionRecentPostTitle}>
                    {post.title}
                  </h4>

                  <div className={styles.rightSectionRecentPostDateContainer}>
                    <MdCalendarMonth className={styles.calendarMonthIcon} />
                    <p className={styles.rightSectionRecentPostDate}>
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*{/******************Right section Page 4{/*******************/}
        <div className={styles.rightSectionContainer}>
          <h3 className={styles.rightSectionHeaderTitle}>Popular Tag</h3>

          <div className={styles.rightSectionTagContainer}>
            {popularTag.map((tag, ind) => (
              <div key={ind}>
                <p className={styles.rightSectionTag}>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
