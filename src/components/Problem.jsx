import Counter from "./Counter";

const Problem = () => (
  <section id="mission" style={{
    padding: "120px 40px",
    background: "var(--black)",
    position: "relative",
    overflow: "hidden",
  }}>
    <img
      src="/images/debris-field.jpg"
      alt="Orbital debris field"
      loading="lazy"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "60%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.06,
        mixBlendMode: "screen",
        pointerEvents: "none",
      }}
    />

    <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      <div className="reveal">
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 400,
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "16px",
          lineHeight: 2.0,
        }}>THE PROBLEM</div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "var(--white)",
          textTransform: "uppercase",
          lineHeight: 0.95,
          letterSpacing: "1.2px",
          marginBottom: "16px",
        }}>
          ORBITAL CRISIS
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          fontWeight: 400,
          color: "var(--muted)",
          maxWidth: "600px",
          lineHeight: 1.7,
          letterSpacing: "0.32px",
          marginBottom: "80px",
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
          <div key={i} className={`panel-card reveal ${stat.delay}`} style={{
            padding: "48px 40px",
            border: "1px solid var(--border)",
            background: "transparent",
          }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: stat.color,
              marginBottom: "16px",
              lineHeight: 1,
              letterSpacing: "0.05em",
            }}>
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
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 400,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              lineHeight: 1.5,
            }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Orbit Density Visualizer - Verified Data */}
      <div className="panel-card reveal" style={{
        marginTop: "2px",
        padding: "48px 40px",
        border: "1px solid var(--border)",
        background: "transparent",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 400,
          color: "var(--cyan)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "32px",
          lineHeight: 2.0,
        }}>
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
                fontWeight: 400,
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}>
                {row.band}
              </div>
              <div style={{ flex: 1, position: "relative", height: "32px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "transparent",
                  border: "1px solid var(--border)",
                }} />
                <div
                  className="infographic-bar"
                  style={{
                    position: "absolute",
                    left: 0, top: 0, bottom: 0,
                    width: `${row.density}%`,
                    background: row.color,
                    borderRight: `3px solid ${row.color}`,
                    transition: "width 1.5s ease",
                  }}
                />
                <div style={{
                  position: "absolute",
                  right: "8px", top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  fontWeight: 400,
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
                fontWeight: 400,
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
        <div style={{
          marginTop: "40px",
          padding: "24px",
          border: "1px solid var(--border)",
          background: "transparent",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 400,
            color: "var(--danger)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
            lineHeight: 2.0,
          }}>
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
                  letterSpacing: "0.05em",
                }}>{item.year}</div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  letterSpacing: "0.32px",
                }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty vs Economics */}
        <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "1.17px",
              color: "var(--cyan)",
              marginBottom: "20px",
              textTransform: "uppercase",
              lineHeight: 0.94,
            }}>
              The Sovereignty Paradox
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--muted)",
              lineHeight: 1.7,
              letterSpacing: "0.32px",
            }}>
              Under Article VIII of the Outer Space Treaty of 1967, jurisdiction and control
              over a space object remain with the State of Registry — indefinitely. Unlike
              maritime law, a satellite cannot be declared abandoned. It remains property even
              when defunct, tumbling, or shattered into fragments. HSI's Bilateral Treaty
              Licensing (BTL) framework is the first legal instrument designed to resolve this.
            </p>
          </div>
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "1.17px",
              color: "var(--gold)",
              marginBottom: "20px",
              textTransform: "uppercase",
              lineHeight: 0.94,
            }}>
              The Economic Reality
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--muted)",
              lineHeight: 1.7,
              letterSpacing: "0.32px",
            }}>
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
