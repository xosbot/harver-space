const Market = () => {
  const marketStats = [
    { label: "Monitoring + Removal 2025", value: "$1.14B", sub: "Mordor Intelligence · Verified 2025" },
    { label: "Market Size 2030", value: "$1.84B", sub: "CAGR 8.25% · Business Research Co." },
    { label: "Active Removal CAGR", value: "38.3%", sub: "Pure ADR segment 2025–2030 · TBRC" },
    { label: "Wireless Power Market 2025", value: "$28.6B", sub: "IMARC Group · WPT market validated" },
  ];

  const revenue = [
    {
      num: "01",
      stream: "Government Service Contracts",
      status: "ACTIVE NOW",
      statusColor: "var(--success)",
      body: "National space agencies procure end-to-end debris removal as a commercial service. ESA's €86M ClearSpace-1 contract establishes the sector benchmark. JAXA's phased CRD2 program validates the model. New FCC 5-year deorbit rule (2022) creates mandatory compliance spend across all US operators. This is where HSI generates near-term revenue.",
    },
    {
      num: "02",
      stream: "Operator-Paid Deorbit Services",
      status: "2026+",
      statusColor: "var(--cyan)",
      body: "Constellation operators pay per-satellite or per-mission for end-of-life deorbit. With SpaceX Starlink targeting 42,000 satellites and OneWeb/Amazon Kuiper adding thousands more, the deorbit compliance market is structurally mandated. Multi-client sequential removal dramatically reduces per-unit cost. HSI's Debris-as-a-Service model targets $2,000–8,000 per satellite deorbit.",
    },
    {
      num: "03",
      stream: "Orbital Energy Grid (T1SatBravo)",
      status: "2027+",
      statusColor: "var(--gold)",
      body: "Space-based solar power market: $634.9M in 2024 → $1.05B by 2030 (Grand View Research, CAGR 8.5%). T1SatBravo is HSI's power-beaming satellite designed to charge low-power IoT devices and rural infrastructure via rectenna arrays. Wireless power transmission market globally: $28.6B in 2025 → $184.1B by 2034 (IMARC Group, CAGR 22.3%). ONE THING OS is the device-layer software that connects everything to the grid.",
    },
  ];

  return (
    <section id="market" style={{ padding: "120px 40px", background: "var(--black)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">MARKET & ECONOMICS</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            THE MULTI-BILLION<br />
            <span className="cyan-text">ORBITAL ECONOMY</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "600px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            The space debris removal market is real, growing, and increasingly well-funded.
            Government agencies are the anchor customers. Commercial operators are the growth engine.
            Wireless power beaming is the long-horizon prize.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {marketStats.map((s, i) => (
            <div key={i} className={`panel-card reveal reveal-delay-${i + 1}`} style={{ padding: "36px 32px", textAlign: "center" }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
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
              ["Astroscale", "$383M", "Series G · Equity + Agency Contracts · JAXA-CRD2 selected"],
              ["ClearSpace", "€110M", "Series A + ESA €86M Service Contract · ClearSpace-1"],
              ["D-Orbit", "$166M", "Series C · Orbital Logistics & ION Satellite Carrier"],
              ["LeoLabs", "$29M", "2024 Expansion · 12-site global radar tracking network"],
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

        {/* Market Growth Chart */}
        <div className="panel-card reveal" style={{ marginTop: "2px", padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "32px" }}>
            MARKET GROWTH TRAJECTORY — VERIFIED SOURCES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { market: "Space Debris Monitoring + Removal", y2025: "$1.14B", y2031: "$1.83B", cagr: "8.25%", src: "Mordor Intelligence" },
              { market: "Active Debris Removal (pure ADR)", y2025: "$150M", y2031: "$750M+", cagr: "38.3%", src: "Business Research Co." },
              { market: "Space-Based Solar Power", y2025: "$710M", y2031: "$1.7B", cagr: "17.1%", src: "GM Insights 2025" },
              { market: "Wireless Power Transmission", y2025: "$28.6B", y2031: "$184B+", cagr: "22.3%", src: "IMARC Group 2025" },
            ].map((m, i) => (
              <div key={i} style={{ borderTop: "2px solid var(--border)", paddingTop: "20px" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--white)", marginBottom: "12px", lineHeight: 1.4 }}>
                  {m.market}
                </div>
                <div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
                  <div>
                    <div className="mono-data" style={{ fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>2025</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--muted)" }}>{m.y2025}</div>
                  </div>
                  <div style={{ color: "var(--muted)", alignSelf: "flex-end", marginBottom: "4px" }}>→</div>
                  <div>
                    <div className="mono-data" style={{ fontSize: "9px", color: "var(--cyan)", letterSpacing: "0.1em" }}>2031+</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--cyan)" }}>{m.y2031}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--success)" }}>CAGR {m.cagr}</span>
                  <span className="mono-data" style={{ fontSize: "9px", color: "var(--muted)" }}>{m.src}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
