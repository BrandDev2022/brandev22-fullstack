"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/media/logowhite.png";
import styles from "../styles/NavbarFooter.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageContext } from "@/pages/_app";
export default function Navbar() {
  const { pageData, language, handleLanguageChange } =
    useContext(LanguageContext);
  const toggleLanguage = () => {
    if (language !== "english") {
      handleLanguageChange("english");
    } else {
      handleLanguageChange("mandarin");
    }
  };

  return (
    <nav className={styles.nav}>
      <Image
        style={{ width: 200, height: 120 }}
        src={LOGO}
        alt="brandev22 logo"
      />

      <div className={styles.navLinks}>
        {pageData.navigationOptions.map((each) => (
          <Link key={each.path} href={each.path}>
            {each.text}
          </Link>
        ))}
        <div onClick={toggleLanguage} className={styles.languageIcon}>
          <LanguageIcon />
          <p className={styles.languageText}>{language.toUpperCase()}</p>
        </div>
      </div>
    </nav>
  );
}
