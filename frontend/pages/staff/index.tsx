import React, { useContext } from "react";
import { LanguageContext } from "@/store/LanguageContext";
const StaffPage = () => {
  const { Pages } = useContext(LanguageContext);

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
      <h2>{Pages["Staff"].Name}</h2>
      {Pages["Staff"].Employees.map((each) => (
        <div key={each.lastName}>
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
