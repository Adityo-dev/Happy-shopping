"use client";
import styles from "./clientCompany.module.css";
import Image from "next/image";
import Link from "next/link";

//IMPORT Tabs
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

import { PiCirclesThreePlusThin } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import { GoGitBranch } from "react-icons/go";
import { PiNotePencilLight } from "react-icons/pi";

export default function ClientCompany() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={styles.projectAllDataContainer}>
      <div className={styles.tabsAllDataContainer}>
        <h1 className={styles.projectHeaderTitle}>
          Embracing the Future <br /> of Our Work
        </h1>

        <Box className={styles.aboutHomeTabsBox}>
          <Box>
            <Tabs onChange={handleChange} aria-label="basic tabs example">
              <Tab className={styles.aboutTab} label="01 About Company" />
              <Tab className={styles.aboutTab} label="02 Our Story" />
              <Tab className={styles.aboutTab} label="03 Years of Experience" />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            1
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            2
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            3
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
