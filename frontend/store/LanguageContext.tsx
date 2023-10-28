import React, { createContext } from "react";
import data from "./data";

import { PageData, useLanguage } from "@/hooks/useLanguage";

export const LanguageContext = createContext(data["english"]);
