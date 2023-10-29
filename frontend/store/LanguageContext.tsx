import React, { createContext } from "react";
import data from "./data";
import { LanguageType, PageData } from "@/hooks/useLanguage";

interface InitialState {
  language: LanguageType;
  pageData: PageData;
}
const language = "english";
export const LanguageContext = createContext({ language });
