import { useState } from "react";
import "./style.css";

export default function ShortedSection({ original_link, full_short_link }) {

    const [isCopied, setIsCopied] = useState(false)

    function copyToClipBoard(event) {
        navigator.clipboard.writeText(full_short_link)
        setIsCopied(true)
    }

  return (
    <section className="shorted-links">
      <span>{original_link}</span>

      <div>
        <span>{full_short_link}</span>
        <button className={`button-copy ${isCopied && 'copied'}`} onClick={copyToClipBoard}>{isCopied ? 'Copied!': 'Copy'}</button>
      </div>
    </section>
  );
}
