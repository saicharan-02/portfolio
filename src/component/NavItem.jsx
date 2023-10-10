import React from "react";
import Link from "next/link";
import styles from "../styles/navitem.module.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={styles.nav_item}>
      <div>{text}</div>
    </Link>
  );
};

export default NavItem;
