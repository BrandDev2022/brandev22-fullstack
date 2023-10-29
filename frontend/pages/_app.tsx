import "@/styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageContext } from "@/store/LanguageContext";
import { LanguageType, PageData } from "@/hooks/useLanguage";
import { useLanguage } from "@/hooks/useLanguage";
import data from "@/store/data";

export default function App({ Component, pageProps }: AppProps) {
  const language = "english";
  const context = { language };
  return (
    <LanguageContext.Provider value={context}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageContext.Provider>
  );
}
