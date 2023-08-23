"use client";

import { useState } from "react";

export default function UrlHooks() {
  const [urlToShort, setUrlToShort] = useState("");

  const [urlShorted, setUrlShorted] = useState({
    code: "",
    short_link: "",
    full_short_link: "",
    short_link2: "",
    full_short_link2: "",
    short_link3: "",
    full_short_link3: "",
    share_link: "",
    full_share_link: "",
    original_link: "",
  });

  return {
    urlToShort,
    setUrlToShort,
    urlShorted,
    setUrlShorted,
  };
}
