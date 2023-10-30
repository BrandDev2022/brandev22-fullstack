import Image, { StaticImageData } from "next/image";
import styles from "../../styles/Staff.module.css";
import AlbertPic from "../../public/media/AlbertPic.png";
import React, { useContext } from "react";
import { LanguageContext } from "../_app";

export interface Employee {
  firstName: string;
  lastName: string;
  summary: string;
  title: string;
  picture: StaticImageData;
}
const AlbertPhoto =
  "https://images.unsplash.com/photo-1552982729-0ae6a5658d70?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbiUyMHBob3RvfGVufDB8fDB8fHww";
const StaffPage = () => {
  const context = useContext(LanguageContext);
  const StaffPage = context.pageData.Pages[0];

  return (
    <div className={styles.Page}>
      <div className={styles.header}>
        <h1>{StaffPage.PageTitle}</h1>
      </div>
      {StaffPage?.Employees.map((each, idx) => (
        <div className={styles.staffCard} key={idx}>
          <Image
            className={styles.staffPhoto}
            src={each.picture}
            alt="person"
            width={250}
            height={300}
          />
          <div className={styles.staffContent}>
            <h2>
              <a href={`/${each.firstName.toLowerCase()}`}>
                {each.firstName} {each.lastName}
              </a>
            </h2>
            <h3>{each.title}</h3>
            <p>{each.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffPage;
