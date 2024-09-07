import "./style.css";

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="presentation-section">
        <h1>More than just shorter{""} links</h1>

        <p>Make your links short with highest performance </p>

        <button style={{ cursor: "pointer" }}>
          <a href="#shortnerSection">Get Starded</a>
        </button>
      </div>
      <div className="image" />
    </section>
  );
}
