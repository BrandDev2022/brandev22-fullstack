import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "@/public/media/logowhite.png";

const AboutHeader = () => {
  return (
    <section className={styles.Header}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="logo" width={620} className={styles.Logo} />
        <div className={styles.wrapper}>
          <div className={styles.staticText}>Build your</div>
          <ul className={styles.dynamicTexts}>
            <li className={styles.choice}>
              <span>Website.</span>
            </li>
            <li className={styles.choice}>
              <span>Software.</span>
            </li>
            <li className={styles.choice}>
              <span>Business.</span>
            </li>
            <li className={styles.choice}>
              <span>Brand.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
