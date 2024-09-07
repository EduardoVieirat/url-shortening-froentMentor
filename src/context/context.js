"use client";

import UrlHooks from "@/hooks/UrlHooks";
import { createContext } from "react";

export const UrlContext = createContext({});

export default function UrlProvider({ children }) {
  const useUrlProvider = UrlHooks();

  return (
    <UrlContext.Provider value={useUrlProvider}>{children}</UrlContext.Provider>
  );
}
