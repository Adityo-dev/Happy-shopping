"use client";
import styles from "./login.module.css";
import Link from "next/link";

//Mui Text Field
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Login() {
  const handleFromBtn = (btnName) => {
    return (
      <>
        <button className={styles.handleFromBtnStyle}>{btnName}</button>
      </>
    );
  };

  return (
    <section className={styles.loginAllDataContainer}>
      <div className={styles.loginDataContainer}>
        <h1 className={styles.loginText}>Login</h1>
        <p className={styles.loginSubText}>
          Please login using account detail bellow.
        </p>

        <div className={styles.inputFieldContainer}>
          <TextField className={styles.inputField} label="Email" multiline />
          <TextField className={styles.inputField} label="Password" multiline />
        </div>

        <div className={styles.singInAndForgotPsContainer}>
          {handleFromBtn("sign in")}
          <p className={styles.createAccountText}>Forgot your password?</p>
        </div>

        <Link href={"/account/register"} className={styles.createAccountText}>
          Create account
        </Link>
      </div>
    </section>
  );
}
