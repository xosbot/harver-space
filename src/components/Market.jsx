const Market = () => {
  const marketStats = [
    { label: "Market Size 2024", value: "$1.5B", sub: "Monitoring + Removal" },
    { label: "Projected by 2035", value: "$15.3B", sub: "MRFR Services Forecast" },
    { label: "Active Removal CAGR", value: "25%", sub: "Through 2035" },
    { label: "N. America Share 2030", value: "61%", sub: "BIS Research Projection" },
  ];

  const revenue = [
    {
      num: "01",
      stream: "Government Service Contracts",
      status: "ACTIVE NOW",
      statusColor: "var(--success)",
      body: "National space agencies procure end-to-end debris removal as a commercial service. ESA's €86M ClearSpace-1 contract establishes the sector benchmark. JAXA's phased CRD2 program validates the model. This is where HSI generates near-term revenue.",
    },
    {
      num: "02",
      stream: "Operator-Paid Removal",
      status: "2026+",
      statusColor: "var(--cyan)",
      body: "Constellation operators pay per-satellite or per-mission for end-of-life deorbit. New 5-year deorbit compliance requirements create mandatory spending. Multi-client sequential removal dramatically reduces per-unit cost for operators.",
    },
    {
      num: "03",
      stream: "Orbital Recycling",
      status: "2027+",
      statusColor: "var(--gold)",
      body: "In-orbit aluminum and material recovery from retired satellites. Recovered materials transferred to in-space manufacturing facilities. First-mover advantage in a market that does not yet exist commercially — HSI's Vanguard-R hub is the enabling infrastructure.",
    },
  ];

  return (
    <section id="market" style={{ padding: "120px 40px", background: "var(--black)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">MARKET & ECONOMICS</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            THE $15 BILLION<br />
            <span className="cyan-text">CLEANUP ECONOMY</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            The space debris removal market is real, growing, and increasingly well-funded.
            Government agencies are the anchor customers. Commercial operators are the growth engine.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {marketStats.map((s, i) => (
            <div key={i} className={`panel-card reveal reveal-delay-${i + 1}`} style={{ padding: "36px 32px", textAlign: "center" }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--cyan)",
                marginBottom: "8px",
              }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--white)", marginBottom: "6px" }}>
                {s.label}
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {revenue.map((r, i) => (
            <div key={i} className={`panel-card reveal reveal-delay-${i + 1}`} style={{ padding: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span className="mono-data" style={{ fontSize: "2rem", color: "rgba(240,244,255,0.06)", fontWeight: 700 }}>{r.num}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  padding: "4px 12px",
                  border: `1px solid ${r.statusColor}`,
                  color: r.statusColor,
                  letterSpacing: "0.15em",
                }}>{r.status}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--white)",
                letterSpacing: "0.05em",
                marginBottom: "16px",
              }}>{r.stream}</h3>
              <p style={{
                fontFamily: "var(--font-light)", fontWeight: 300,
                fontSize: "0.95rem",
                color: "rgba(240,244,255,0.6)",
                lineHeight: 1.8,
              }}>{r.body}</p>
            </div>
          ))}
        </div>

        <div className="panel-card reveal" style={{ padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket tr" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            SECTOR FUNDING BENCHMARKS — COMPARABLE COMPANIES
          </div>
          <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
            {[
              ["Astroscale", "$383M", "Series G — Equity + Agency Contracts"],
              ["ClearSpace", "€110M", "Series A + ESA Service Contract"],
              ["D-Orbit", "$166M", "Series C — Orbital Logistics"],
              ["LeoLabs", "$29M", "2024 Expansion Round"],
            ].map(([co, amt, note], i) => (
              <div key={i} style={{
                flex: "1 1 200px",
                padding: "20px 24px",
                background: "rgba(0,212,255,0.03)",
                borderRight: "2px solid var(--border)",
              }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "var(--muted)", marginBottom: "4px" }}>{co}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "6px" }}>{amt}</div>
                <div className="mono-data" style={{ fontSize: "10px", color: "rgba(107,127,163,0.7)", letterSpacing: "0.05em" }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
