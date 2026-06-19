import Counter from "./Counter";

const Market = () => {
  const marketStats = [
    { label: "Active Debris Removal 2025", value: "$671M", sub: "WiseGuyReports · CAGR 17.9% to 2035", color: "var(--cyan)" },
    { label: "Debris Monitoring + Removal 2035", value: "$3.2B", sub: "Market Research Future · CAGR 11.06%", color: "var(--gold)" },
    { label: "Wireless Power Transmission 2035", value: "$105B", sub: "MRFR · CAGR 20.4%", color: "var(--success)" },
    { label: "Space-Based Solar Power 2035", value: "$543M", sub: "360 Research · CAGR 17.1%", color: "var(--cyan2)" },
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
      body: "Constellation operators pay per-satellite or per-mission for end-of-life deorbit. With SpaceX Starlink exceeding 7,135 active satellites and Amazon Kuiper/OneWeb adding thousands more, the deorbit compliance market is structurally mandated. HSI's Debris-as-a-Service model targets $2,000–8,000 per satellite deorbit. The FCC 5-year rule makes this non-optional.",
    },
    {
      num: "03",
      stream: "Orbital Energy Grid (T1SatBravo)",
      status: "2027+",
      statusColor: "var(--gold)",
      body: "Space-based solar power: $131M in 2026 → $543M by 2035 (CAGR 17.1%, 360 Research). Wireless power transmission market: $16.4B in 2025 → $105B by 2035 (MRFR, CAGR 20.4%). T1SatBravo is HSI's power-beaming satellite designed to charge low-power IoT devices and rural infrastructure via rectenna arrays. ONE THING OS is the device-layer software that connects everything to the grid.",
    },
  ];

  return (
    <section id="market" style={{ padding: "120px 40px", background: "var(--black)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">MARKET OPPORTUNITY</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            THE MULTI-BILLION<br />
            <span className="cyan-text">THE NUMBERS</span>
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

        {/* Market Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {marketStats.map((s, i) => (
            <div key={i} className={`panel-card reveal data-card reveal-delay-${i + 1}`} style={{ padding: "36px 32px", textAlign: "center" }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                fontWeight: 700,
                color: s.color || "var(--cyan)",
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

        {/* Revenue Streams */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {revenue.map((r, i) => (
            <div key={i} className={`panel-card reveal data-card reveal-delay-${i + 1}`} style={{ padding: "40px" }}>
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

        {/* Competitor Funding Benchmarks */}
        <div className="panel-card reveal" style={{ padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket tr" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            SECTOR FUNDING BENCHMARKS — VERIFIED 2025-2026
          </div>
          <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
            {[
              { co: "Astroscale", amt: "$383M", note: "Series G · Most mission-active ADR specialist · JAXA-CRD2 selected" },
              { co: "ClearSpace", amt: "€110M", note: "Series A + ESA €86M Service Contract · ClearSpace-1 mission 2026" },
              { co: "D-Orbit", amt: "$166M", note: "Series C · Orbital Logistics & ION Satellite Carrier · 14 missions" },
              { co: "Star Catcher", amt: "$18M+", note: "Optical power beaming · DARPA record holder · Kennedy Space Center" },
            ].map((c, i) => (
              <div key={i} style={{
                flex: "1 1 200px",
                padding: "24px",
                background: "rgba(0,212,255,0.03)",
                borderRight: i < 3 ? "2px solid var(--border)" : "none",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,212,255,0.06)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,212,255,0.03)"}
              >
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "var(--muted)", marginBottom: "4px" }}>{c.co}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "6px" }}>{c.amt}</div>
                <div className="mono-data" style={{ fontSize: "10px", color: "rgba(107,127,163,0.7)", letterSpacing: "0.05em" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Growth Trajectory */}
        <div className="panel-card reveal" style={{ marginTop: "2px", padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "32px" }}>
            MARKET GROWTH TRAJECTORY — VERIFIED RESEARCH SOURCES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { market: "Space Debris Monitoring + Removal", y2025: "$1.12B", y2035: "$3.2B", cagr: "11.06%", src: "Market Research Future 2025" },
              { market: "Active Debris Removal (pure ADR)", y2025: "$671M", y2035: "$3.5B", cagr: "17.9%", src: "WiseGuyReports Apr 2026" },
              { market: "Space-Based Solar Power", y2025: "$131M", y2035: "$543M", cagr: "17.1%", src: "360 Research Nov 2025" },
              { market: "Wireless Power Transmission", y2025: "$16.4B", y2035: "$105B", cagr: "20.4%", src: "MRFR 2025" },
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
                    <div className="mono-data" style={{ fontSize: "9px", color: "var(--cyan)", letterSpacing: "0.1em" }}>2035</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--cyan)" }}>{m.y2035}</div>
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

        {/* Regulatory Drivers */}
        <div className="panel-card reveal" style={{ marginTop: "2px", padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket br" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--gold)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            REGULATORY DRIVERS — WHY THE MARKET IS STRUCTURALLY MANDATED
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { org: "FCC (US)", rule: "5-Year Deorbit Mandate", detail: "All US-licensed satellites must deorbit within 5 years of end-of-life. Effective 2023. Creates mandatory compliance spend." },
              { org: "ESA", rule: "Zero Debris Charter", detail: "ESA adopted 5-year orbit vacancy standard in 2023. Zero Debris Charter signed by 12+ countries and 100+ entities." },
              { org: "UNOOSA", rule: "Long-Term Sustainability Guidelines", detail: "UN guidelines for responsible space operations. Growing push for binding international debris mitigation framework." },
              { org: "Japan (JAXA)", rule: "CRD2 Program", detail: "Japan's Commercial Removal of Debris Demonstration program. Phase 2 actively procuring commercial ADR services." },
            ].map((r, i) => (
              <div key={i} style={{
                padding: "20px",
                background: "rgba(201,168,76,0.03)",
                border: "1px solid rgba(201,168,76,0.12)",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.06)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.03)"}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gold)", letterSpacing: "0.15em", marginBottom: "8px" }}>
                  {r.org}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--white)", marginBottom: "8px" }}>
                  {r.rule}
                </div>
                <div style={{ fontFamily: "var(--font-light)", fontSize: "0.85rem", color: "rgba(240,244,255,0.55)", lineHeight: 1.6 }}>
                  {r.detail}
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
