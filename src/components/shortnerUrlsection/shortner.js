import "./style.css";

export default function Shortner({
  urlToShort,
  setUrlToShort,
  HandleUrlShortner,
  errorMessage
}) {
  function handleInput(event) {
    setUrlToShort(event.target.value);
  }

  return (
    <section className="shortner-section">
      <div>
        <input
          onChange={handleInput}
          className={`input-shortner ${errorMessage !== "" && 'error-alert'}`}
          type="text"
          placeholder="Shorten a link here..."
          value={urlToShort}
          />
          {errorMessage !== '' && <span className="error-message">{errorMessage}</span>}
        </div>

      <button className="btn-shortner" onClick={() => HandleUrlShortner()}>
        Shorten It!
      </button>

    </section>
  );
}
