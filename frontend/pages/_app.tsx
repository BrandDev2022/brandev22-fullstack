import "@/styles/globals.css";
import React, { useState, createContext } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import data from "@/pages/data";
import { Employee } from "./about";

export type LanguageType = "english" | "mandarin";

interface InitialState {
  language: LanguageType;
  handleLanguageChange(newLanguage: LanguageType): void;
}

export const LanguageContext = createContext<InitialState>({
  language: "english",
  handleLanguageChange: (newLanguage) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<LanguageType>("english");

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };
  const initContext = {
    language,
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
