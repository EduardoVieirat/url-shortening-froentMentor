import "./style.css";
import { useContext, useState } from "react";
import UrlProvider, { UrlContext } from "@/context/context";

export default function ShortedSection() {
  const { urlShorted } = useContext(UrlContext);

  const [isCopied, setIsCopied] = useState(false);
  function copyToClipBoard() {
    console.log(urlShorted.shortUrl);

    navigator.clipboard.writeText(urlShorted.shortUrl);
    setIsCopied(true);
  }

  return (
    <UrlProvider>
      <section className="shorted-links">
        <div>
          <span>{urlShorted.originalLink}</span>

          <span>{urlShorted.shortUrl}</span>
        </div>
        <button
          className={`button-copy ${isCopied && "copied"}`}
          onClick={copyToClipBoard}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </section>
    </UrlProvider>
  );
}
