"use client";
import styles from "./register.module.css";
import Link from "next/link";

//Mui Text Field
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Register() {
  const handleFromBtn = (btnName) => {
    return (
      <>
        <button className={styles.handleFromBtnStyle}>{btnName}</button>
      </>
    );
  };

  return (
    <section className={styles.regAllDataContainer}>
      <div className={styles.regDataContainer}>
        <h1 className={styles.regText}>Create Account</h1>
        <p className={styles.regSubText}>
          Please Register using account detail below.
        </p>

        <div className={styles.inputFieldContainer}>
          <TextField
            className={styles.inputField}
            label="First Name"
            multiline
          />
          <TextField
            className={styles.inputField}
            label="Last Name"
            multiline
          />
          <TextField className={styles.inputField} label="Email" multiline />
          <TextField className={styles.inputField} label="Password" multiline />
        </div>

        <div className={styles.singInAndForgotPsContainer}>
          {handleFromBtn("Create Now")}
        </div>

        <Link href={"/"} className={styles.createAccountText}>
          Return to Store
        </Link>
      </div>
    </section>
  );
}
