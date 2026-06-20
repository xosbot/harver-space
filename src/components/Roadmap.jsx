const Roadmap = () => {
  const milestones = [
    {
      year: "2026",
      title: "T1SatBravo Launch",
      description:
        "First power-beaming satellite. Deploying our inaugural orbital energy platform to demonstrate wireless power transmission from LEO to ground rectenna arrays.",
      status: "Live",
      statusType: "live",
      accent: "var(--aurora)",
    },
    {
      year: "2027",
      title: "SV-1 Alpha",
      description:
        "First debris capture demonstration. Validating the Harver-Claw capture system on a controlled target in low Earth orbit.",
      status: "In Dev",
      statusType: "dev",
      accent: "var(--orbital-purple)",
    },
    {
      year: "2028",
      title: "Orbital Dredger",
      description:
        "6-satellite constellation for continuous debris monitoring and removal operations across critical orbital bands.",
      status: "Planned",
      statusType: "planned",
      accent: "#B794F6",
    },
    {
      year: "2029",
      title: "Cislunar Operations",
      description:
        "Beyond LEO. Extending our infrastructure to cislunar space to support the growing lunar economy and Gateway operations.",
      status: "Planned",
      statusType: "planned",
      accent: "var(--gold)",
    },
    {
      year: "2030",
      title: "Mars Orbital",
      description:
        "Infrastructure for Mars missions. Deploying power-beaming and communication relay satellites to support human exploration of Mars.",
      status: "Planned",
      statusType: "planned",
      accent: "#FBBF24",
    },
  ];

  return (
    <section id="roadmap" className="roadmap-section section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "80px", textAlign: "center" }}>
          <div className="section-label">ROADMAP</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--stellar)",
              marginBottom: "16px",
            }}
          >
            From Earth Orbit{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--aurora) 0%, var(--orbital-purple) 50%, var(--gold) 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              to Mars
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "var(--silver)",
              maxWidth: "560px",
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            A phased execution plan that transforms orbital operations from
            theoretical necessity into commercially viable, multi-planetary
            infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="roadmap-timeline">
          {/* Vertical connecting line */}
          <div className="roadmap-line" />

          {milestones.map((m, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} roadmap-item`}
            >
              {/* Glowing dot */}
              <div
                className="roadmap-dot roadmap-dot-glow"
                style={{
                  background: m.accent,
                  color: m.accent,
                  boxShadow: `0 0 20px ${m.accent}, 0 0 40px ${m.accent}`,
                }}
              />

              {/* Card */}
              <div className="roadmap-card-wrap">
                <div className="roadmap-card" style={{ color: m.accent }}>
                  {/* Year badge */}
                  <div
                    className="roadmap-year"
                    style={{ color: m.accent }}
                  >
                    {m.year}
                  </div>

                  {/* Title */}
                  <h3 className="roadmap-title">{m.title}</h3>

                  {/* Description */}
                  <p className="roadmap-desc">{m.description}</p>

                  {/* Status indicator */}
                  <div className={`roadmap-status status-${m.statusType}`}>
                    <span className="status-dot" />
                    <span>{m.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
