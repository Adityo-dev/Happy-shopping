"use client";
import styles from "./viewCardDetailsModal.module.css";
import Link from "next/link";
import Image from "next/image";

// Model
import * as React from "react";
import Modal from "@mui/material/Modal";

// React Icons
import { IoEyeSharp } from "react-icons/io5";
import { GoX } from "react-icons/go";

export default function ViewCardDetailsModal({ cardData }) {
  const { cover, name, title, discountPrice, currentPrice } = cardData;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.viewCardDetailsModalAllDataContainer}>
      <IoEyeSharp onClick={handleOpen} className={styles.cardPreviewIcon} />

      <Modal open={open} onClose={handleClose}>
        <div className={styles.viewCardDetailsModalDataInfoContainer}>
          <div className={styles.viewCardDetailsModalImageContainer}>
            <Image
              className={styles.viewCardDetailsModalImage}
              src={cover[0]}
              alt=""
            />
          </div>

          <div className={styles.viewCardDetailsModalTextInfoContainer}>
            <h1 className={styles.priceName}>{name}</h1>
            <p className={styles.priceContainer}>
              <del className={styles.discountPrice}>${discountPrice}</del>
              <span className={styles.currentPrice}>${currentPrice}</span>
            </p>
            <p className={styles.productTitle}>{title}</p>
          </div>

          <GoX
            onClick={handleClose}
            className={styles.viewCardDetailsModalGoxIcon}
          />
        </div>
      </Modal>
    </div>
  );
}
