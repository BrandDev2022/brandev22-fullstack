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
    <div
      style={{
        marginTop: "10%",
        height: "90vh",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <h2>{StaffPage.PageTitle}</h2>
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
