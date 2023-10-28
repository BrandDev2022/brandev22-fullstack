"use client";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/media/logowhite.png";
import styles from "../styles/NavbarFooter.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../hooks/useLanguage";
import { useContext } from "react";
import { LanguageContext } from "@/store/LanguageContext";

export default function Navbar() {
  const context = useContext(LanguageContext);

  return (
    <nav className={styles.nav}>
      <Image
        style={{ width: 200, height: 120 }}
        src={LOGO}
        alt="brandev22 logo"
      />

      <div className={styles.navLinks}>
        {context.navigationOptions.map((each) => (
          <Link key={each.path} href={each.path}>
            {each.text}
          </Link>
        ))}
        <div className={styles.languageIcon}>
          <LanguageIcon />
          {/* <p className={styles.languageText}>{language.toUpperCase()}</p> */}
        </div>
      </div>
    </nav>
  );
}
