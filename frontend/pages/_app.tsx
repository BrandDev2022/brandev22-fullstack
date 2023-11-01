import "@/styles/globals.css";
import React, { useState, createContext } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import data from "@/pages/data";
import { Employee } from "./about";

export type LanguageType = "english" | "mandarin";

interface Page {
  PageTitle: String;
  Employees: Employee[];
}

export interface PageData {
  Pages: Page[];
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
  const [language, setLanguage] = useState<LanguageType>("english");
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
