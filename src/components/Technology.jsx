import CaptureMechanism from "./CaptureMechanism";

const Technology = () => {
  const phases = [
    {
      num: "01",
      name: "LiDAR Synchronization",
      description:
        "AI-driven sub-millisecond thruster bursts match the SV-1 vessel's rotation to the debris tumbling frequency before any physical contact is made.",
      specs: [
        { label: "Targeting Precision", value: "±0.1°" },
        { label: "Response Time", value: "<2ms" },
        { label: "Range", value: "50m → 0m" },
      ],
      accent: "var(--aurora)",
      accentSoft: "rgba(125, 211, 252, 0.15)",
    },
    {
      num: "02",
      name: "Magnetic Soft-Dock",
      description:
        "Eddy-Current Braking System projects high-intensity magnetic flux — inducing electrical currents in the aluminum debris hull to dampen spin contactlessly.",
      specs: [
        { label: "Magnetic Flux", value: "2.4 T" },
        { label: "Spin Reduction", value: "98.3%" },
        { label: "Fragmentation Risk", value: "0.0%" },
      ],
      accent: "var(--gold)",
      accentSoft: "rgba(212, 175, 55, 0.2)",
    },
    {
      num: "03",
      name: "Mechanical Embrace",
      description:
        "Four articulated carbon-fiber arms with tactile haptic sensors lock onto structural hardpoints — typically the engine bell or adapter ring.",
      specs: [
        { label: "Arm Count", value: "4× Articulated" },
        { label: "Grip Force", value: "12 kN" },
        { label: "Sensor Array", value: "Tactile Haptic" },
      ],
      accent: "var(--success)",
      accentSoft: "rgba(134, 239, 172, 0.15)",
    },
  ];

  const tableSpecs = [
    ["Max Capture Mass", "12,000 kg"],
    ["Operating Temp", "-150°C to +120°C"],
    ["Targeting", "LiDAR + AI"],
    ["De-tumbling", "Eddy-Current"],
    ["Arms", "4x Carbon-Fiber"],
    ["Success Rate", "99.7%"],
  ];

  return (
    <section
      id="technology"
      style={{
        background: "var(--void)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(125, 211, 252, 0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(212, 175, 55, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="section-padding"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "80px" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--aurora)",
              marginBottom: "16px",
            }}
          >
            Capture Technology
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--stellar)",
              marginBottom: "20px",
            }}
          >
            Harver-Claw
            <br />
            <span className="text-gradient">Mark III</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--silver)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Capturing a dead satellite is a kinetic nightmare. Without an active
            Attitude Control System, debris often tumbles on multiple axes
            simultaneously. The Harver-Claw Mark III is engineered specifically
            for this problem.
          </p>
        </div>

        {/* Capture Mechanism Diagram */}
        <div className="reveal" style={{ marginBottom: "80px" }}>
          <div className="glass" style={{ padding: "40px", borderRadius: "16px" }}>
            <CaptureMechanism />
          </div>
        </div>

        {/* Phase Cards */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {phases.map((phase, i) => (
            <div
              key={i}
              className="tech-phase-card glass"
              style={{
                padding: "40px 32px",
                borderRadius: "12px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                borderLeft: `3px solid ${phase.accent}`,
                "--card-accent": phase.accent,
                "--card-accent-soft": phase.accentSoft,
              }}
            >
              {/* Phase number watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: phase.accent,
                  opacity: 0.08,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  userSelect: "none",
                }}
              >
                {phase.num}
              </div>

              {/* Phase label */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: phase.accent,
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: phase.accent,
                    boxShadow: `0 0 8px ${phase.accent}`,
                  }}
                />
                Phase {phase.num}
              </div>

              {/* Phase name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "var(--stellar)",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {phase.name}
              </h3>

              {/* Phase description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  color: "var(--silver)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {phase.description}
              </p>

              {/* Technical specs */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  borderTop: "1px solid var(--glass-border)",
                }}
              >
                {phase.specs.map((spec, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--glass-border)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--silver-dim)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {spec.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: phase.accent,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Table */}
        <div
          className="reveal glass"
          style={{
            borderRadius: "12px",
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--aurora)",
              marginBottom: "32px",
            }}
          >
            Technical Specifications
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "var(--glass-border)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {tableSpecs.map(([key, val], i) => (
              <div
                key={i}
                className="spec-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  background: "var(--deep-space)",
                  transition: "background 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--silver-dim)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {key}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--stellar)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tech-phase-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 40px var(--card-accent-soft);
          border-color: rgba(125, 211, 252, 0.2) !important;
        }
        .spec-row:hover {
          background: rgba(125, 211, 252, 0.06) !important;
        }
        @media (max-width: 768px) {
          .tech-phase-card {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;
