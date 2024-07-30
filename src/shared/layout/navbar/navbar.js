import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/Home/icons/nav_logo.png";

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
      url: "/",
      pageData: [
        {
          name: "Women's Fashion",
          items: [
            { itemName: "Dresses", url: "/women/dresses" },
            { itemName: "Tops", url: "/women/tops" },
            { itemName: "Shoes", url: "/women/shoes" },
            { itemName: "Accessories", url: "/women/accessories" },
          ],
        },
        {
          name: "Men's Fashion",
          items: [
            { itemName: "Shirts", url: "/men/shirts" },
            { itemName: "Pants", url: "/men/pants" },
            { itemName: "Shoes", url: "/men/shoes" },
            { itemName: "Accessories", url: "/men/accessories" },
          ],
        },
        {
          name: "Men's Fashion",
          items: [
            { itemName: "Shirts", url: "/men/shirts" },
            { itemName: "Pants", url: "/men/pants" },
            { itemName: "Shoes", url: "/men/shoes" },
            { itemName: "Accessories", url: "/men/accessories" },
          ],
        },
        {
          name: "Men's Fashion",
          items: [
            { itemName: "Shirts", url: "/men/shirts" },
            { itemName: "Pants", url: "/men/pants" },
            { itemName: "Shoes", url: "/men/shoes" },
            { itemName: "Accessories", url: "/men/accessories" },
          ],
        },
      ],
    },
    {
      name: "categories",
      url: "/",
      pageData: [
        { itemName: "Category 1", url: "/categories/1" },
        { itemName: "Category 2", url: "/categories/2" },
        { itemName: "Category 3", url: "/categories/3" },
      ],
    },
    {
      name: "products",
      url: "/",
      pageData: [
        { itemName: "Product 1", url: "/products/1" },
        { itemName: "Product 2", url: "/products/2" },
        { itemName: "Product 3", url: "/products/3" },
      ],
    },
    {
      name: "blog",
      url: "/",
      pageData: [
        { itemName: "Blog 1", url: "/blog/1" },
        { itemName: "Blog 2", url: "/blog/2" },
        { itemName: "Blog 3", url: "/blog/3" },
      ],
    },
    {
      name: "pages",
      url: "/",
      pageData: [
        { itemName: "Contact", url: "/pages/1" },
        { itemName: "About us", url: "/pages/2" },
        { itemName: "Service", url: "/pages/3" },
        { itemName: "Faq", url: "/pages/3" },
        { itemName: "Size Chart", url: "/pages/3" },
      ],
    },
  ];

  const userPageData = [
    { name: "My Account", url: "/account/login" },
    { name: "Register", url: "/account/register" },
    { name: "Wishlist", url: "/wishlist" },
  ];

  return (
    <>
      <section className={styles.navBarAllDataContainer}>
        <div>
          <h1>NavLogo</h1>
          {/* <Link href="/">
            <Image className={styles.navLogo} src={logo} alt="Nav Logo" />
          </Link> */}
        </div>

        <div className={styles.navItemsContainer}>
          {navAllDataItems.map((navItemsData, ind) => (
            <div key={ind} className={styles.navItem}>
              <Link href={navItemsData.url} className={styles.navItemsButton}>
                {navItemsData.name}
                {ind === 0 ? null : (
                  <MdOutlineKeyboardArrowDown
                    className={styles.navItemsButtonArrowDown}
                  />
                )}
              </Link>
              <div className={styles.dropdownMenuAllDataContainer}>
                {navItemsData.pageData && (
                  <div className={styles.dropdownMenu}>
                    {navItemsData.pageData.map((pageData, pageIndex) => (
                      <div key={pageIndex} className={styles.dropdownSection}>
                        <h3 className={styles.dropdownSectionName}>
                          {pageData.name}
                        </h3>
                        {pageData.items ? (
                          <ul>
                            {pageData.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className={styles.dropdownItem}
                              >
                                <Link href={item.url}>{item.itemName}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div>
                            <Link
                              className={styles.dropdownItemLink}
                              href={pageData.url}
                            >
                              {pageData.itemName}
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.navRightItemsContainer}>
          <div>
            <IoSearchOutline className={styles.navIcon} aria-label="Search" />
          </div>
          <div className={styles.navUserContainer}>
            <FiUser className={styles.navIcon} aria-label="User" />
            <div className={styles.navUserItemsContainer}>
              {userPageData.map((userData, ind) => (
                <Link
                  className={styles.navUserItemsText}
                  key={ind}
                  href={userData.url}
                >
                  {userData.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link href="/yourShoppingCards">
              <Badge color="secondary" badgeContent={1}>
                <HiOutlineShoppingCart
                  className={styles.navIcon}
                  aria-label="Shopping Cart"
                />
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
