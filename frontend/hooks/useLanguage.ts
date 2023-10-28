import React, { useState, useEffect } from "react";
import data from "../static_data/data";

type LanguageType = "english" | "mandarin";

interface NavOption {
  path: string;
  text: string;
}
interface PageData {
  navigationOptions: NavOption[];
  missionStatement: string[];
}

const UseLanguage = () => {
  const [language, setLanguage] = useState<LanguageType>("english");
  const [pageData, setPageData] = useState<PageData>(data[language]);

  useEffect(() => {
    setPageData(data[language]);
  }, [language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  return { language, pageData, setLanguage, handleLanguageChange };
};

export default UseLanguage;
