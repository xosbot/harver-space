const PowerGrid = () => {
  const techSpecs = [
    ["Satellite", "T1SatBravo — LEO Power-Beam Platform"],
    ["Orbit", "550 km Sun-Synchronous"],
    ["Frequency", "2.45 GHz microwave / 5.8 GHz alt"],
    ["Ground Interface", "Rectenna Array (rectifying antenna)"],
    ["Target Devices", "Low-power IoT, sensors, rural nodes"],
    ["OS Layer", "ONE THING — cross-device control software"],
    ["Efficiency Target", "5–15% end-to-end (2026 milestone)"],
    ["ESA SOLARIS", "Active alignment program"],
  ];

  return (
    <section id="power-grid" style={{ padding: "120px 40px", background: "var(--black)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">POWER GRID</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.12em" }}>
            ORBITAL<br />
            <span style={{ color: "var(--white)" }}>ENERGY</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 400,
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "80px",
          }}>
            Beyond debris removal, Harver is building the infrastructure layer for the next
            civilization upgrade: satellite-to-surface wireless power delivery. T1SatBravo is
            the beaming platform. ONE THING OS is the software that connects every device to it.
          </p>
        </div>

        {/* Hero Image */}
        <div className="reveal reveal-delay-1" style={{
          marginBottom: "48px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--black)",
        }}>
          <img
            src="/images/earth-night.jpg"
            alt="Earth at night showing power grid"
            loading="lazy"
            style={{
              width: "100%",
              height: "380px",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.75) contrast(1.15) saturate(1.1)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, var(--black), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "24px",
            left: "32px",
            right: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "var(--white)",
                marginBottom: "6px",
                textTransform: "uppercase",
              }}>
                SATELLITE-TO-SURFACE POWER DELIVERY
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--white)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                ORBITAL ENERGY GRID
              </div>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.15em",
            }}>
              550 KM LEO • 2.45 GHz BEAM
            </div>
          </div>
        </div>

        {/* Market Banner */}
        <div className="panel-card reveal" style={{
          padding: "32px 40px",
          marginBottom: "2px",
          background: "transparent",
          border: "1px solid var(--border)",
        }}>
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "4px", textTransform: "uppercase" }}>
                WIRELESS POWER TRANSMISSION MARKET 2025
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.06em" }}>$16.4B</div>
            </div>
            <div style={{ color: "var(--muted)", fontSize: "1.5rem" }}>→</div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "4px", textTransform: "uppercase" }}>
                PROJECTED BY 2035 (MRFR)
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.06em" }}>$105B</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "4px", textTransform: "uppercase" }}>CAGR</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.06em" }}>20.4%</div>
            </div>
          </div>
        </div>

        {/* Power Beaming & ONE THING */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* T1SatBravo */}
          <div className="panel-card reveal reveal-delay-1" style={{
            padding: "48px 40px",
            background: "transparent",
            border: "1px solid var(--border)",
          }}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--muted)", marginBottom: "8px", textTransform: "uppercase" }}>
              SATELLITE PLATFORM
            </h3>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.12em", marginBottom: "24px", textTransform: "uppercase" }}>
              T1SATBRAVO
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 400,
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}>
              T1SatBravo is Harver's dedicated power-beaming satellite. Operating in
              Sun-Synchronous orbit at 550 km, it converts solar energy to 2.45 GHz
              microwave beams transmitted to rectenna receiver arrays on the ground.
              Designed for low-power applications: IoT sensors, remote infrastructure,
              and emerging-market connectivity nodes where grid access is unreliable.
            </p>

            {techSpecs.map(([key, val], i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>{key}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--white)", letterSpacing: "0.05em", textAlign: "right", maxWidth: "55%" }}>{val}</span>
              </div>
            ))}
          </div>

          {/* ONE THING OS */}
          <div className="panel-card reveal reveal-delay-2" style={{
            padding: "48px 40px",
            background: "transparent",
            border: "1px solid var(--border)",
          }}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--muted)", marginBottom: "8px", textTransform: "uppercase" }}>
              DEVICE OPERATING LAYER
            </h3>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.12em", marginBottom: "24px", textTransform: "uppercase" }}>
              ONE THING OS
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 400,
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}>
              ONE THING is Harver's cross-platform operating system layer — a universal
              control fabric that connects phones, laptops, TVs, IoT nodes, and industrial
              hardware to the orbital power and data grid. It abstracts the satellite layer
              entirely, so any device running ONE THING simply sees continuous, location-
              independent energy and connectivity — regardless of ground infrastructure.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { label: "Phones & Tablets" },
                { label: "Laptops & Desktops" },
                { label: "Smart TVs" },
                { label: "IoT & Sensors" },
                { label: "Industrial Nodes" },
                { label: "Rural Infrastructure" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  border: "1px solid var(--border)",
                  background: "transparent",
                }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted)" }}>{item.label}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "24px",
              padding: "16px 20px",
              border: "1px solid var(--border)",
              borderLeft: "1px solid var(--white)",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}>
              "Every screen you own, connected to the grid above the grid." — HSI Dispatch #9
            </div>
          </div>
        </div>

        {/* Power Beaming Chain */}
        <div className="panel-card reveal" style={{
          marginTop: "2px",
          padding: "48px 40px",
          background: "transparent",
          border: "1px solid var(--border)",
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "40px", textTransform: "uppercase" }}>
            POWER BEAMING CHAIN — END-TO-END
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
            {[
              { step: "01", label: "Solar Collection", detail: "T1SatBravo captures continuous solar energy in LEO — 24/7, weather-independent" },
              { step: "02", label: "Energy Conversion", detail: "Solid-state power amplifiers convert to 2.45 GHz microwave beam, aimed at ground station" },
              { step: "03", label: "Wireless Transmission", detail: "Phased-array antenna steers beam to designated rectenna grid coordinates in real time" },
              { step: "04", label: "Orbital Reception", detail: "Ground-side rectenna (rectifying antenna) converts RF back to DC power with 85%+ efficiency" },
              { step: "05", label: "Earth Distribution", detail: "ONE THING OS distributes converted power to registered devices on the local mesh network" },
            ].map((s, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "20px 24px", textAlign: "center", minWidth: "140px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {s.step}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--white)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>
                    {s.detail}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ color: "var(--muted)", fontSize: "1.5rem", flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerGrid;
