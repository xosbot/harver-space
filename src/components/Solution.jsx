const Solution = () => {
  const systems = [
    {
      num: "01",
      icon: "⚖",
      title: "Legal Architecture",
      subtitle: "BTL Treaty Framework",
      description:
        "A bilateral liability-transfer protocol that shifts legal ownership of debris from the launching state to HSI at the moment of capture — enabling sovereign indemnification and cross-border removal operations.",
      stats: [
        { value: "1967", label: "OST Art. VIII" },
        { value: "100%", label: "Liability Shift" },
        { value: "12+", label: "Partner Nations" },
      ],
      accent: "var(--gold)",
      accentSoft: "rgba(212, 175, 55, 0.2)",
      accentGlow: "rgba(212, 175, 55, 0.35)",
    },
    {
      num: "02",
      icon: "◈",
      title: "Capture Technology",
      subtitle: "Harver-Claw Mark III",
      description:
        "AI-driven LiDAR synchronization, eddy-current magnetic braking, and four-articulated carbon-fiber arms capable of capturing dead satellites tumbling on multiple axes without fragmentation.",
      stats: [
        { value: "12T", label: "Max Capture Mass" },
        { value: "99.7%", label: "Success Rate" },
        { value: "<2ms", label: "Response Time" },
      ],
      accent: "var(--aurora)",
      accentSoft: "rgba(125, 211, 252, 0.15)",
      accentGlow: "rgba(125, 211, 252, 0.4)",
    },
    {
      num: "03",
      icon: "▲",
      title: "Operations Platform",
      subtitle: "NEXUS Command",
      description:
        "Real-time orbital tracking, mission planning, and fleet coordination across LEO, MEO, and GEO. Integrated with Space-Track, radar arrays, and autonomous debris-prediction algorithms.",
      stats: [
        { value: "36,500+", label: "Tracked Objects" },
        { value: "3", label: "Orbital Regimes" },
        { value: "24/7", label: "Mission Control" },
      ],
      accent: "var(--orbital-purple)",
      accentSoft: "rgba(192, 132, 252, 0.15)",
      accentGlow: "rgba(192, 132, 252, 0.4)",
    },
  ];

  return (
    <section
      id="solution"
      style={{
        background: "var(--deep-space)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(212, 175, 55, 0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(192, 132, 252, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="section-padding"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "80px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--silver)",
              marginBottom: "20px",
            }}
          >
            OUR SOLUTION
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
            Three Systems.
            <br />
            <span className="text-gradient">One Mission.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--silver)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Space debris removal requires more than technology. It demands a
            unified stack of legal, mechanical, and operational excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {systems.map((sys, i) => (
            <div
              key={i}
              className={`solution-card reveal reveal-delay-${i + 1}`}
              style={{
                "--card-accent": sys.accent,
                "--card-accent-soft": sys.accentSoft,
                "--card-accent-glow": sys.accentGlow,
              }}
            >
              {/* Card inner with glass */}
              <div className="solution-card-inner glass">
                {/* Top accent line */}
                <div
                  className="solution-card-accent-line"
                  style={{ background: sys.accent }}
                />

                {/* Icon + Number row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "28px",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      lineHeight: 1,
                      background: sys.accentSoft,
                      border: `1px solid ${sys.accentGlow}`,
                      color: sys.accent,
                      boxShadow: `0 0 20px ${sys.accentSoft}`,
                    }}
                  >
                    {sys.icon}
                  </div>

                  {/* System number */}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      lineHeight: 1,
                      color: "var(--aurora)",
                      opacity: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {sys.num}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    color: "var(--stellar)",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {sys.title}
                </h3>

                {/* Subtitle */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "20px",
                  }}
                >
                  {sys.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--silver)",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  {sys.description}
                </p>

                {/* Stats row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--glass-border)",
                  }}
                >
                  {sys.stats.map((stat, j) => (
                    <div key={j} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: sys.accent,
                          lineHeight: 1.2,
                          marginBottom: "4px",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "9px",
                          fontWeight: 400,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--silver-dim)",
                          lineHeight: 1.3,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .solution-card {
          position: relative;
          border-radius: 16px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .solution-card-inner {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          padding: 40px 32px;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .solution-card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.6;
          transition: opacity 0.4s ease, box-shadow 0.4s ease;
        }
        .solution-card:hover {
          transform: translateY(-4px);
        }
        .solution-card:hover .solution-card-inner {
          border-color: var(--card-accent-glow);
          box-shadow:
            0 24px 64px rgba(0, 0, 0, 0.35),
            0 0 40px var(--card-accent-soft),
            inset 0 1px 0 var(--card-accent-soft);
        }
        .solution-card:hover .solution-card-accent-line {
          opacity: 1;
          box-shadow: 0 0 20px var(--card-accent-glow);
        }
        @media (max-width: 768px) {
          .solution-card-inner {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Solution;
