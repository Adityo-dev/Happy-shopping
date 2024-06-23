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

//Import react icons
import { GoArrowRight } from "react-icons/go";
import { MdCalendarMonth } from "react-icons/md";

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

  const popularTag = [
    "Fruits",
    "Agriculture",
    "Food",
    "Dairy Product",
    "Organic Food",
    "Fresh Vegetable",
    "Organic",
  ];

  return (
    <main className={styles.blogDetailsAllDataContainer}>
      <section>
        {/* Page 1 */}
        <div>
          <Image
            className={styles.blogDetailsATopImage}
            src={Rectangle1}
            alt=""
          />

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
        </div>

        {/* Page 2 */}
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

      {/* Right section */}
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

        {/* Right section Page 2 */}
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

        {/* Right section Page 3 */}
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

        {/* Right section Page 4 */}
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
