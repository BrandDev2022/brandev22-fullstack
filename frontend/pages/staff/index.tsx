import React, { useContext } from "react";

const StaffPage = () => {
  // const context = useContext(LanguageContext);
  // const { Staff } = context.pageData.Pages;
  // console.log(Staff);
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
      {/* <h2>{context.pageData.Pages.Staff.Name}</h2> */}
      {/* {Pages["Staff"].Employees.map((each) => (
        <div key={each.lastName}>
          <p style={{ textDecoration: "underline" }}>
            {each.firstName} {each.lastName}: {each.title}
          </p>
          <p>{each.summary}</p>
        </div>
      ))} */}
    </div>
  );
};

export default StaffPage;
