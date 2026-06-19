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
    <section id="power-grid" style={{ padding: "120px 40px", background: "var(--black)", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{
        position: "absolute",
        bottom: "-300px", left: "50%",
        transform: "translateX(-50%)",
        width: "800px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">ORBITAL ENERGY GRID</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            THE GRID<br />
            <span className="gold-text">ABOVE THE GRID</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "600px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            Beyond debris removal, Harver is building the infrastructure layer for the next
            civilization upgrade: satellite-to-surface wireless power delivery. T1SatBravo is
            the beaming platform. ONE THING OS is the software that connects every device to it.
          </p>
        </div>

        {/* Market Banner */}
        <div className="panel-card reveal" style={{
          padding: "32px 40px",
          marginBottom: "2px",
          background: "linear-gradient(90deg, rgba(201,168,76,0.06), rgba(8,12,26,1))",
          borderColor: "rgba(201,168,76,0.2)",
        }}>
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div className="mono-data" style={{ fontSize: "9px", color: "rgba(201,168,76,0.5)", letterSpacing: "0.2em", marginBottom: "4px" }}>
                WIRELESS POWER TRANSMISSION MARKET 2025
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--gold)" }}>$28.6B</div>
            </div>
            <div style={{ color: "var(--muted)", fontSize: "1.5rem" }}>→</div>
            <div>
              <div className="mono-data" style={{ fontSize: "9px", color: "rgba(201,168,76,0.5)", letterSpacing: "0.2em", marginBottom: "4px" }}>
                PROJECTED BY 2034 (IMARC GROUP)
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--gold)" }}>$184.1B</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div className="mono-data" style={{ fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "4px" }}>CAGR</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--success)" }}>22.3%</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* T1SatBravo */}
          <div className="panel-card reveal reveal-delay-1" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", marginBottom: "8px" }}>
              SATELLITE PLATFORM
            </h3>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.08em", marginBottom: "24px" }}>
              T1SATBRAVO
            </div>
            <p style={{
              fontFamily: "var(--font-light)", fontWeight: 300,
              fontSize: "0.95rem",
              color: "rgba(240,244,255,0.65)",
              lineHeight: 1.8,
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
                borderBottom: "1px solid rgba(201,168,76,0.06)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>{key}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gold)", letterSpacing: "0.05em", textAlign: "right", maxWidth: "55%" }}>{val}</span>
              </div>
            ))}
          </div>

          {/* ONE THING OS */}
          <div className="panel-card reveal reveal-delay-2" style={{
            padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(8,12,26,1) 60%)",
          }}>
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--cyan)", marginBottom: "8px" }}>
              DEVICE OPERATING LAYER
            </h3>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.08em", marginBottom: "24px" }}>
              ONE THING OS
            </div>
            <p style={{
              fontFamily: "var(--font-light)", fontWeight: 300,
              fontSize: "0.95rem",
              color: "rgba(240,244,255,0.65)",
              lineHeight: 1.8,
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
                { label: "Phones & Tablets", icon: "📱" },
                { label: "Laptops & Desktops", icon: "💻" },
                { label: "Smart TVs", icon: "📺" },
                { label: "IoT & Sensors", icon: "📡" },
                { label: "Industrial Nodes", icon: "🏭" },
                { label: "Rural Infrastructure", icon: "🌍" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.1)",
                }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(240,244,255,0.7)" }}>{item.label}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "24px",
              padding: "16px 20px",
              background: "rgba(0,255,136,0.04)",
              border: "1px solid rgba(0,255,136,0.15)",
              fontFamily: "var(--font-light)",
              fontWeight: 300,
              fontSize: "0.9rem",
              color: "rgba(0,255,136,0.8)",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}>
              "Every screen you own, connected to the grid above the grid." — HSI Dispatch #9
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="panel-card reveal" style={{ marginTop: "2px", padding: "48px 40px" }}>
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "40px" }}>
            POWER BEAMING CHAIN — END-TO-END
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
            {[
              { step: "01", label: "Solar Collection", detail: "T1SatBravo captures continuous solar energy in LEO — 24/7, weather-independent" },
              { step: "02", label: "RF Conversion", detail: "Solid-state power amplifiers convert to 2.45 GHz microwave beam, aimed at ground station" },
              { step: "03", label: "Beam Transmission", detail: "Phased-array antenna steers beam to designated rectenna grid coordinates in real time" },
              { step: "04", label: "Rectenna Reception", detail: "Ground-side rectenna (rectifying antenna) converts RF back to DC power with 85%+ efficiency" },
              { step: "05", label: "ONE THING Grid", detail: "ONE THING OS distributes converted power to registered devices on the local mesh network" },
            ].map((s, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "20px 24px", textAlign: "center", minWidth: "140px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--cyan)", marginBottom: "8px" }}>
                    {s.step}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--white)", marginBottom: "8px" }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.8rem", color: "rgba(240,244,255,0.5)", lineHeight: 1.6 }}>
                    {s.detail}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ color: "var(--muted)", fontSize: "1.2rem", flexShrink: 0 }}>→</div>
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
