import React from "react";
import Link from "next/link";
import styles from '../styles/navbar.module.css';
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "#about" },
  // { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href={"/"} className={styles.brand_name}>Sai Charan</Link>
        <ul>
          {MENU_LIST.map((item, index) => (
            <li key={index}>
              <NavItem text={item.text} href={item.href}/>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
