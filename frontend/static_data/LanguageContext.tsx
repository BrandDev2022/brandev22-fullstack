import React, { createContext, useContext } from "react";
import useLanguage from "../hooks/useLanguage";

const LanguageContext = createContext("english"); // Default language is "en" (English)

export function LanguageProvider({ children }: any) {
  const languageContext = useLanguage();

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
