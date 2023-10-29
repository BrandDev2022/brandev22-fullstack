import "@/styles/globals.css";
import React, { useState, createContext } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import data from "@/pages/data";

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

interface InitialState {
  language: LanguageType;
  pageData: PageData;
  handleLanguageChange(newLanguage: LanguageType): void;
}

export const LanguageContext = createContext<InitialState>({
  language: "english",
  pageData: data["english"],
  handleLanguageChange: (newLanguage) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<LanguageType>("mandarin");
  const [pageData, setPageData] = useState<PageData>(data[language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
    setPageData(data[newLanguage]);
  };
  const initContext = {
    language,
    pageData,
    handleLanguageChange,
  };
  return (
    <LanguageContext.Provider value={initContext}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageContext.Provider>
  );
}
