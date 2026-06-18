const Technology = () => {
  const phases = [
    {
      num: "01",
      name: "LiDAR Synchronization",
      detail: "AI-driven sub-millisecond thruster bursts match the SV-1 vessel's rotation to the debris tumbling frequency before any physical contact is made. Targeting precision: ±0.1°.",
    },
    {
      num: "02",
      name: "Magnetic Soft-Dock",
      detail: "Eddy-Current Braking System projects high-intensity magnetic flux — inducing electrical currents in the aluminum debris hull to dampen spin contactlessly, eliminating fragmentation risk.",
    },
    {
      num: "03",
      name: "Mechanical Embrace",
      detail: "Four articulated carbon-fiber arms with tactile haptic sensors lock onto structural hardpoints — typically the engine bell or adapter ring — securing the object for controlled deorbit transfer.",
    },
  ];

  const specs = [
    ["Maximum Capture Mass", "12,000 kg"],
    ["Operating Temperature", "-150°C to +120°C"],
    ["Targeting System", "LiDAR + AI Attitude Match"],
    ["De-tumbling Method", "Eddy-Current Induction"],
    ["Capture Arms", "4 × Articulated Carbon-Fiber"],
    ["Arm Sensors", "Tactile Haptic Array"],
    ["Capture Sequence", "3-Phase Protocol"],
    ["Classification", "Uncooperative Debris Capable"],
  ];

  return (
    <section id="technology" style={{ padding: "120px 40px", background: "var(--deep)", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CAPTURE TECHNOLOGY</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            ENGINEERING THE<br />
            <span className="cyan-text">HARVER-CLAW MARK III</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            Capturing a dead satellite is a kinetic nightmare. Without an active Attitude
            Control System, debris often tumbles on multiple axes simultaneously. The
            Harver-Claw Mark III is engineered specifically for this problem.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          <div className="panel-card reveal reveal-delay-1" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--cyan)", marginBottom: "40px" }}>
              THREE-PHASE CAPTURE SEQUENCE
            </h3>

            {phases.map((ph, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "24px",
                marginBottom: i < phases.length - 1 ? "0" : "0",
                position: "relative",
              }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="timeline-dot" />
                  {i < phases.length - 1 && (
                    <div style={{ width: "1px", flex: 1, background: "var(--border)", margin: "8px 0", minHeight: "60px" }} />
                  )}
                </div>

                <div style={{ paddingBottom: i < phases.length - 1 ? "40px" : "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.2em" }}>PHASE {ph.num}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--white)", marginBottom: "8px" }}>
                    {ph.name}
                  </div>
                  <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.9rem", color: "rgba(240,244,255,0.55)", lineHeight: 1.7 }}>
                    {ph.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="panel-card reveal reveal-delay-2" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--cyan)", marginBottom: "40px" }}>
              TECHNICAL SPECIFICATIONS — MK III
            </h3>

            {specs.map(([key, val], i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid rgba(0,212,255,0.06)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                  {key}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--cyan)", letterSpacing: "0.05em" }}>
                  {val}
                </span>
              </div>
            ))}

            <div style={{ marginTop: "32px", padding: "20px", background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.15)" }}>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--success)", letterSpacing: "0.2em", marginBottom: "12px" }}>
                COMPLIANCE STATUS — LIVE
              </div>
              {[
                "UN OOSA Registration",
                "Sovereign Consent Framework",
                "FAA/AST Authorization",
                "ESA Space Safety Compliance",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--success)", fontSize: "12px" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(240,244,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
