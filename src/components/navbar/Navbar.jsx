"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { DarkMode } from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Hsen
      </Link>
      <div className={styles.links}>
        <DarkMode />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="portfolio">
          Portfolio
        </Link>
        <Link className={styles.link} href="blog">
          Blog
        </Link>
        <Link className={styles.link} href="about">
          About
        </Link>
        <Link className={styles.link} href="contact">
          Contact
        </Link>
        <Link className={styles.link} href="dashboard">
          Dashboard
        </Link>
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
