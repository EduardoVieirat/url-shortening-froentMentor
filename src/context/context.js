"use client";

import UrlHooks from "@/hooks/UrlHooks";
import { createContext } from "react";

export const UrlContext = createContext([]);

export default function UrlProvider({ children }) {
  const { urlToShort, setUrlToShort, urlShorted, setUrlShorted } = UrlHooks();

  return (
    <UrlContext.Provider
      value={{ urlToShort, setUrlToShort, urlShorted, setUrlShorted }}
    >
      {children}
    </UrlContext.Provider>
  );
}
