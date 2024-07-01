"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

// Import Mui
import * as React from "react";
import Badge from "@mui/material/Badge";
// React Icons
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const navAllDataItems = [
    { name: "home", url: "/" },
    {
      name: "shop",
      shopData: [
        {
          name: "Women's Fashion",
          items: [
            "Dresses",
            "Tops & Blouses",
            "Sweaters & Cardigans",
            "Jackets & Coats",
            "Pants & Jeans",
            "Skirts",
            "Activewear",
            "Lingerie & Sleepwear",
          ],
        },
        {
          name: "Men's Fashion",
          items: [
            "Shirts",
            "T-Shirts & PolosHot",
            "Sweaters & Hoodies",
            "Jackets & Blazers",
            "Jeans",
            "Suits & Formalwear",
            "Activewear",
          ],
        },
        {
          name: "Accessories",
          items: [
            "Bags & Purses",
            "Hats & Caps",
            "Scarves & Shawls",
            "Belts & Suspenders",
            "Sunglasses",
            "Jewelry",
            "Watches",
          ],
        },
        {
          name: "Footwear",
          items: [
            "Flats & Loafers",
            "Heels & Pumps",
            "Sneakers & Athletic",
            "Dress Shoes",
            "Casual Shoes",
            "Boots & Chukkas",
            "Sandals & Slides",
          ],
        },
      ],
    },

    { name: "categories" },
    { name: "Products" },
    { name: "blog" },
    { name: "pages" },
  ];

  return (
    <>
      <section className={styles.navBarAllDataContainer}>
        <div>
          <h2>NavLogo</h2>
        </div>

        <div className={styles.navItemsContainer}>
          {navAllDataItems.map((navItemsData, ind) => (
            <div key={ind}>
              <Link href={""} className={styles.navItemsButton}>
                {navItemsData.name}
                {ind === 0 ? (
                  ""
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className={styles.navItemsButtonArrowDown}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.navRightItemsContainer}>
          <div>
            <IoSearchOutline className={styles.navIcon} />
          </div>
          <div>
            <FiUser className={styles.navIcon} />
          </div>
          <div>
            <Badge color="secondary" badgeContent={1}>
              <HiOutlineShoppingCart className={styles.navIcon} />
            </Badge>
          </div>
        </div>
      </section>
    </>
  );
}
