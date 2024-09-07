"use client";
import { useState } from "react";

export default function UrlHooks() {
  const [urlToShort, setUrlToShort] = useState("");

  const [urlShorted, setUrlShorted] = useState({
    shortUrl: "",
    originalLink: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  return {
    urlToShort,
    setUrlToShort,
    urlShorted,
    setUrlShorted,
    errorMessage,
    setErrorMessage,
  };
}
