"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/media/logowhite.png";
import styles from "../styles/NavbarFooter.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageContext } from "@/pages/_app";
import { LanguageType } from "@/pages/_app";

interface NavOption {
  path: string;
  text: string;
}

interface LanguageProperties {
  options: NavOption[];
  label: LanguageType;
}

type Navigation = {
  [key in LanguageType]: LanguageProperties;
};

export const navigation: Navigation = {
  english: {
    options: [
      { path: "/", text: "Home" },
      { path: "/about", text: "About" },
    ],
    label: "english",
  },
  mandarin: {
    options: [
      { path: "/", text: "家" },
      { path: "/about", text: "关于" },
    ],
    label: "mandarin",
  },
};

export default function Navbar() {
  const { language, handleLanguageChange } = useContext(LanguageContext);
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
        {navigation[language].options.map((each) => (
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
