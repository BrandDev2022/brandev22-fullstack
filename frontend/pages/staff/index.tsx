import styles from "../../styles/Staff.module.css";
import React, { useContext } from "react";
import { LanguageContext } from "../_app";

export interface Employee {
  firstName: string;
  lastName: string;
  summary: string;
  title: string;
}

const StaffPage = () => {
  const context = useContext(LanguageContext);
  const StaffPage = context.pageData.Pages[0];

  return (
    <div className={styles.Page}>
      <div className={styles.header}>
        <h2>{StaffPage.PageTitle}</h2>
      </div>
      {StaffPage?.Employees.map((each, idx) => (
        <div key={idx}>
          <p style={{ textDecoration: "underline" }}>
            {each.firstName} {each.lastName}: {each.title}
          </p>
          <p>{each.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default StaffPage;
