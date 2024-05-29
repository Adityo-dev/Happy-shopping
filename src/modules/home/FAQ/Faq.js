"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const faqData = [
    {
      title: "What Services Does Your Software Agency Offer? ",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      title: "How Involved Will I Be In The Development Process?",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      title: "What Sets Your Agency Apart From Others In The Industry? ",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      title: "What Is The Pricing Structure For Your Services?",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      title: "What Level Of Support The Software Launch?",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {faqData.map((faq, ind) => (
        <Accordion
          key={ind}
          expanded={expanded === `panel${ind}`}
          onChange={handleChange(`panel${ind}`)}
        >
          <AccordionSummary
            style={{ marginTop: "13px" }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              style={{
                padding: "1.5px",
                color: "#1B3447",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                color: "#797E88",
                fontSize: "14px",
                lineHeight: "24px",
                width: "70%",
              }}
            >
              {faq.subTitle}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
