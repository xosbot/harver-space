const Footer = () => (
  <footer style={{
    padding: "40px",
    background: "var(--deep)",
    borderTop: "1px solid var(--border)",
  }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "24px", height: "24px", border: "1.5px solid var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "8px", height: "8px", background: "var(--cyan)" }} />
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em" }}>HSI</span>
        <span className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          HARVER SPACE INDUSTRIES — DEBRIS REMOVAL PHASE III
        </span>
      </div>

      <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
        ORBITAL STEWARDSHIP INITIATIVE — T25 — ALL RIGHTS RESERVED
      </div>

      <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.1em", animation: "blink 3s ease-in-out infinite" }}>
        ● SYSTEM NOMINAL
      </div>
    </div>
  </footer>
);

export default Footer;
