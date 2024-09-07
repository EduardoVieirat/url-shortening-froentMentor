import "./style.css";
import { useContext } from "react";
import UrlProvider, { UrlContext } from "@/context/context";

export default function Shortner({ HandleUrlShortner }) {
  const { urlToShort, errorMessage, setErrorMessage, setUrlToShort } =
    useContext(UrlContext);

  function handleInput(event) {
    setErrorMessage("");
    setUrlToShort(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      if (event.target.value == "") {
        return;
      }
      setErrorMessage("");

      setUrlToShort(event.target.value);

      HandleUrlShortner();
    }
  }

  return (
    <UrlProvider>
      <section className="shortner-section" id="shortnerSection">
        <div>
          <input
            onChange={handleInput}
            className={`input-shortner ${errorMessage !== "" && "error-alert"}`}
            type="text"
            placeholder="Shorten a link here..."
            value={urlToShort}
            onKeyDown={handleEnter}
          />

          <button className="btn-shortner" onClick={() => HandleUrlShortner()}>
            Shorten It!
          </button>
        </div>

        {errorMessage !== "" && (
          <span className="error-message">{errorMessage}</span>
        )}
      </section>
    </UrlProvider>
  );
}
