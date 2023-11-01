import Albert from "../public/media/AlbertPic.png";
import Rui from "../public/media/ruigradphoto.png";

const data = {
  english: {
    Pages: [
      {
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
    ],
  },
  mandarin: {
    Pages: [
      {
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
    ],
  },
};

export default data;
