const Solution = () => {
  const systems = [
    {
      num: "01",
      title: "Legal Architecture",
      subtitle: "Bilateral Transfer of Liability",
      tag: "LEGAL MOAT",
      color: "var(--gold)",
      icon: "⚖",
      stats: [
        { label: "Treaty Framework", value: "OST Art. VIII/IX" },
        { label: "Liability Model", value: "BTL Agreement" },
        { label: "Pre-Clearance", value: "5 Sovereign Nations" },
      ],
      body: "HSI has pioneered the BTL agreement framework — making us a licensed sovereign agent for partner nations. This is the legal moat no competitor has built. We have pre-clearance with the US (FAA/AST), ESA member states, JAXA, and the UAE Space Agency.",
      highlight: "First private entity with sovereign transfer authority across multiple jurisdictions",
      delay: "reveal-delay-1",
    },
    {
      num: "02",
      title: "Capture Technology",
      subtitle: "Harver-Claw Mark III",
      tag: "PROPRIETARY R&D",
      color: "var(--cyan)",
      icon: "⚙",
      stats: [
        { label: "Capture Mass", value: "12,000 kg" },
        { label: "De-tumbling", value: "Eddy-Current" },
        { label: "Success Rate", value: "99.7% (sim)" },
      ],
      body: "A three-phase uncooperative capture system: LiDAR synchronization, magnetic eddy-current de-tumbling, and four-arm mechanical embrace. Maximum capture mass: 12,000 kg. Operates at -150°C. Designed for the toughest orbital conditions.",
      highlight: "Only system capable of multi-axis tumble capture without pre-installed fixtures",
      delay: "reveal-delay-2",
    },
    {
      num: "03",
      title: "Operations Platform",
      subtitle: "SV-1 Vessel + Constellation",
      tag: "2029 DEPLOYMENT",
      color: "var(--success)",
      icon: "◈",
      stats: [
        { label: "Vessel Capacity", value: "4 Captures/Month" },
        { label: "Constellation", value: "6 SV-1 Units" },
        { label: "Target Orbit", value: "800km SSO" },
      ],
      body: "Our SV-1 servicing vessel executes debris capture and graveyard orbit transfer. By 2029, six autonomous SV-1 units will form the Orbital Dredger Constellation — dedicated to continuous 800km Sun-Synchronous orbit cleaning campaigns.",
      highlight: "48 active debris removals per year at full constellation capacity",
      delay: "reveal-delay-3",
    },
  ];

  return (
    <section style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">OUR SOLUTION</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "20px" }}>
            THREE SYSTEMS.<br />
            <span className="cyan-text">ONE MISSION.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "600px",
            lineHeight: 1.8,
            marginBottom: "64px",
          }}>
            Our vertically integrated approach combines legal sovereignty, proprietary technology,
            and autonomous operations — creating an unassailable competitive position in the $3.5B
            active debris removal market.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px" }}>
          {systems.map((sys, i) => (
            <div
              key={i}
              className={`panel-card hover-glow reveal ${sys.delay}`}
              style={{ padding: "48px 40px", position: "relative", display: "flex", flexDirection: "column" }}
            >
              <div className="corner-bracket tl" style={{ borderColor: sys.color }} />
              <div className="corner-bracket br" style={{ borderColor: sys.color }} />

              {/* System Number */}
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "4rem",
                fontWeight: 700,
                color: "rgba(240,244,255,0.04)",
                lineHeight: 1,
                marginBottom: "16px",
                letterSpacing: "0.05em",
              }}>
                {sys.num}
              </div>

              {/* Tag */}
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: sys.color,
                marginBottom: "12px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: sys.color,
                  animation: "blink 2s ease-in-out infinite",
                }} />
                {sys.tag}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--white)",
                marginBottom: "6px",
              }}>
                {sys.title.toUpperCase()}
              </h3>

              {/* Subtitle */}
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: sys.color,
                fontWeight: 500,
                marginBottom: "20px",
                letterSpacing: "0.05em",
              }}>
                {sys.subtitle}
              </div>

              {/* Body */}
              <p style={{
                fontFamily: "var(--font-light)",
                fontSize: "0.95rem",
                color: "rgba(240,244,255,0.6)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "24px",
                flex: 1,
              }}>
                {sys.body}
              </p>

              {/* Stats Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(0,212,255,0.08)",
                marginBottom: "20px",
              }}>
                {sys.stats.map((stat, j) => (
                  <div key={j} style={{
                    padding: "12px 8px",
                    background: "var(--panel)",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      color: "var(--muted)",
                      marginBottom: "4px",
                      textTransform: "uppercase",
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: sys.color,
                      letterSpacing: "0.05em",
                    }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div style={{
                padding: "16px",
                background: `${sys.color}08`,
                borderLeft: `2px solid ${sys.color}`,
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: sys.color,
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}>
                  KEY DIFFERENTIATOR
                </div>
                <div style={{
                  fontFamily: "var(--font-light)",
                  fontSize: "0.85rem",
                  color: "rgba(240,244,255,0.7)",
                  lineHeight: 1.6,
                }}>
                  {sys.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal reveal-delay-4" style={{
          marginTop: "48px",
          padding: "32px 40px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--cyan)",
              marginBottom: "8px",
            }}>
              // INTEGRATED APPROACH
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(240,244,255,0.7)",
              fontWeight: 500,
            }}>
              Each system reinforces the others — creating a self-reinforcing competitive moat that
              deepens with every successful mission.
            </div>
          </div>
          <a href="#contact" className="btn-outline" style={{ textDecoration: "none" }}>
            REQUEST INVESTOR BRIEF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
