import React, { useState, useEffect } from "react";
import data from "../store/data";

export type LanguageType = "english" | "mandarin";

export interface NavOption {
  path: string;
  text: string;
}
export interface PageData {
  navigationOptions: NavOption[];
  missionStatement: string[];
  Pages: {};
}

export const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageType>("mandarin");
  const [pageData, setPageData] = useState<PageData>(data[language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
    setPageData(data[language]);
  };

  return { language, handleLanguageChange };
};
