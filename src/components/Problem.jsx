import Counter from "./Counter";

const Problem = () => (
  <section id="mission" style={{
    padding: "120px 40px",
    background: "var(--deep)",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* Background accent */}
    <div style={{
      position: "absolute",
      top: "-200px", right: "-200px",
      width: "600px", height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">THE PROBLEM</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
          ORBIT IS FILLING UP.<br />
          <span style={{ color: "var(--cyan)" }}>NO ONE IS CLEANING IT.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-light)",
          fontSize: "1.1rem",
          color: "rgba(240,244,255,0.6)",
          maxWidth: "600px",
          lineHeight: 1.8,
          marginBottom: "80px",
          fontWeight: 300,
        }}>
          Every defunct satellite and rocket stage remains the sovereign property of its
          launching nation — permanently. No maritime salvage doctrine applies in space.
          The result: a global commons becoming a debris minefield with no legal path to cleanup.
        </p>
      </div>

      {/* Stat Cards - Verified ESA 2025 Data */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
        {[
          {
            number: 36500,
            suffix: "+",
            label: "Tracked objects ≥10cm in orbit",
            sub: "ESA Space Environment Report 2025 · DISCOS Database",
            color: "var(--cyan)",
            delay: "reveal-delay-1",
          },
          {
            number: 1000000,
            suffix: "+",
            label: "Debris fragments 1–10cm",
            sub: "ESA estimate · Too small to track, large enough to destroy a satellite",
            color: "var(--danger)",
            delay: "reveal-delay-2",
          },
          {
            number: 42,
            prefix: "$",
            suffix: "B",
            label: "Economic risk over next decade",
            sub: "World Economic Forum 2026 · Clear Orbit, Secure Future report",
            color: "var(--gold)",
            delay: "reveal-delay-3",
          },
        ].map((stat, i) => (
          <div key={i} className={`panel-card reveal data-card ${stat.delay}`} style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <div className="corner-bracket br" />
            <div className="stat-number" style={{ color: stat.color, marginBottom: "16px" }}>
              <Counter target={stat.number} prefix={stat.prefix || ""} suffix={stat.suffix} />
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--white)",
              marginBottom: "8px",
              letterSpacing: "0.05em",
            }}>
              {stat.label}
            </div>
            <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Orbit Density Visualizer - Verified Data */}
      <div className="panel-card reveal" style={{ marginTop: "2px", padding: "48px 40px" }}>
        <div className="corner-bracket tl" />
        <div className="corner-bracket tr" />
        <div className="mono-data" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "32px" }}>
          DEBRIS DENSITY BY ORBITAL ALTITUDE — ESA 2025
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { band: "LEO 200–600 km", label: "Starlink Belt", density: 78, color: "var(--cyan)", note: "~11,800 active satellites (7,135 Starlink)" },
            { band: "SSO 600–1000 km", label: "CRITICAL ZONE", density: 95, color: "var(--danger)", note: "Above Kessler runaway threshold · 31% collision risk increase since 2022" },
            { band: "MEO 1000–20000 km", label: "GPS / GNSS", density: 28, color: "var(--gold)", note: "~8,000 objects including GPS constellation" },
            { band: "GEO ~35,786 km", label: "Geostationary Ring", density: 42, color: "var(--cyan2)", note: "~1,800 active satellites + 3,000 defunct" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{
                width: "160px",
                flexShrink: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}>
                {row.band}
              </div>
              <div style={{ flex: 1, position: "relative", height: "28px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid var(--border)",
                }} />
                <div
                  className="infographic-bar"
                  style={{
                    position: "absolute",
                    left: 0, top: 0, bottom: 0,
                    width: `${row.density}%`,
                    background: `linear-gradient(90deg, ${row.color}40, ${row.color})`,
                    borderRight: `2px solid ${row.color}`,
                    transition: "width 1.5s ease",
                  }}
                />
                <div style={{
                  position: "absolute",
                  right: "8px", top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}>
                  {row.note}
                </div>
              </div>
              <div style={{
                width: "90px",
                flexShrink: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: row.color,
                textAlign: "right",
                letterSpacing: "0.1em",
              }}>
                {row.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Events Timeline */}
        <div style={{ marginTop: "40px", padding: "24px", background: "rgba(255,68,68,0.04)", border: "1px solid rgba(255,68,68,0.15)" }}>
          <div className="mono-data" style={{ fontSize: "10px", color: "var(--danger)", letterSpacing: "0.2em", marginBottom: "16px" }}>
            CRITICAL INCIDENTS — WHY ACTION IS URGENT
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {[
              { year: "2009", event: "Iridium-Cosmos collision — first satellite-on-satellite impact, 2,000+ debris fragments" },
              { year: "2024", event: "Chinese Long March 6A breakup — 700+ fragments at 300–1000km altitude" },
              { year: "2025", event: "ESA confirms: debris growth outpaces natural re-entries — active removal now mandatory" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--danger)",
                  flexShrink: 0,
                }}>{item.year}</div>
                <div style={{
                  fontFamily: "var(--font-light)",
                  fontSize: "0.85rem",
                  color: "rgba(240,244,255,0.6)",
                  lineHeight: 1.6,
                }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty vs Economics */}
        <div style={{ marginTop: "2px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Sovereignty Paradox
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Under Article VIII of the Outer Space Treaty of 1967, jurisdiction and control
              over a space object remain with the State of Registry — indefinitely. Unlike
              maritime law, a satellite cannot be declared abandoned. It remains property even
              when defunct, tumbling, or shattered into fragments. HSI's Bilateral Treaty
              Licensing (BTL) framework is the first legal instrument designed to resolve this.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Economic Reality
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Debris-related collision avoidance maneuvers cost operators an estimated $100M+ 
              annually. The 800–1000 km band is now statistically above the Kessler runaway 
              threshold — meaning even with zero new launches, debris growth is self-sustaining.
              The FCC's new 5-year deorbit mandate is turning orbital cleanup from voluntary 
              to legally required — creating a $3.2B market by 2035 (MRFR, CAGR 11.06%).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Problem;
