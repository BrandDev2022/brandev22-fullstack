import Image, { StaticImageData } from "next/image";
import styles from "../../styles/Staff.module.css";
import React, { useContext } from "react";
import Albert from "../../public/media/AlbertPic.png";
import Rui from "../../public/media/ruigradphoto.png";
import { LanguageContext, LanguageType } from "../_app";

export interface Employee {
  firstName: string;
  lastName: string;
  summary: string;
  title: string;
  picture: StaticImageData;
}

type AboutPage = {
  [key in LanguageType]: {
    PageTitle: string;
    Employees: Employee[];
  };
};

const aboutPage: AboutPage = {
  english: {
    PageTitle: "About Us",
    Employees: [
      {
        picture: Albert,
        firstName: "Albert",
        lastName: "Brannan",
        title: "Developer",
        summary:
          "I am a passionate developer with marketing expertise to compliment it. I am excited to help all those in need",
      },
      {
        picture: Rui,
        firstName: "Rui",
        lastName: "Brannan",
        title: "Instructional Designer/Educator",
        summary:
          "I am passionate when it comes to education and I use these tools to grow in my newest endeavor Instructional Design!",
      },
    ],
  },
  mandarin: {
    PageTitle: "员工",
    Employees: [
      {
        picture: Albert,
        firstName: "艾伯特",
        lastName: "布兰南",
        title: "开发人员",
        summary:
          "我是一名充满激情的开发人员，具备营销专业知识。我很高兴帮助所有需要帮助的人。",
      },
      {
        picture: Rui,
        firstName: "睿",
        lastName: "布兰南",
        title: "教育设计师/教育工作者",
        summary:
          "当涉及教育时，我充满激情，并利用这些工具来发展我的最新努力 - 教育设计！",
      },
    ],
  },
};

const AlbertPhoto =
  "https://images.unsplash.com/photo-1552982729-0ae6a5658d70?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbiUyMHBob3RvfGVufDB8fDB8fHww";

const StaffPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.Page}>
      <div className={styles.header}>
        <h1>{aboutPage[language].PageTitle}</h1>
      </div>
      {aboutPage[language].Employees.map((each, idx) => (
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
