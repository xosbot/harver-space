const Roadmap = () => {
  const milestones = [
    {
      year: "2026",
      title: "Vespa Capture Mission",
      body: "Launch of HSI's first operational mission. Target: 112kg Vespa payload adapter in Sun-Synchronous orbit. First commercially BTL-authorized debris removal in history.",
      tag: "PHASE I",
      color: "var(--cyan)",
      status: "FUNDED",
    },
    {
      year: "2027",
      title: "First Orbital Recycling Test",
      body: "Instead of deorbiting, HSI tows a defunct telecommunications satellite to the Vanguard-R Recycling Hub for aluminum harvesting. First in-space material recovery operation.",
      tag: "PHASE II",
      color: "var(--gold)",
      status: "PLANNED",
    },
    {
      year: "2028",
      title: "ClearSpace Partnership Integration",
      body: "Full commercial pipeline alignment with ClearSpace mission architecture. Multi-mission cooperative framework across European and Asian LEO orbital bands.",
      tag: "PARTNERSHIP",
      color: "var(--cyan2)",
      status: "SCOPED",
    },
    {
      year: "2029",
      title: "Orbital Dredger Constellation",
      body: "Deployment of six autonomous SV-1 units dedicated to cleaning the 800km Sun-Synchronous orbit belt. First continuous active debris removal operations at scale.",
      tag: "PHASE III",
      color: "var(--success)",
      status: "ROADMAP",
    },
    {
      year: "2030",
      title: "Debris-as-a-Service Platform",
      body: "Full commercial operator-paid removal platform. Constellation operators subscribe to end-of-life deorbit services. HSI becomes the infrastructure layer for orbital sustainability.",
      tag: "COMMERCIAL",
      color: "var(--gold)",
      status: "VISION",
    },
  ];

  return (
    <section id="roadmap" style={{ padding: "120px 40px", background: "var(--deep)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">ROADMAP</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            2026–2030:<br />
            <span className="cyan-text">THE CLEANUP BEGINS</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}>
            A phased execution plan that transforms orbital cleanup from theoretical
            necessity into commercially viable, legally authorized service.
          </p>
        </div>

        {/* Mission Image */}
        <div className="reveal" style={{ marginBottom: "80px", position: "relative", overflow: "hidden" }}>
          <div className="panel-card" style={{ padding: "0", overflow: "hidden" }}>
            <div className="corner-bracket tl" />
            <div className="corner-bracket br" />
            <img
              src="/images/rocket-launch.jpg"
              alt="Mission launch"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.7) saturate(1.2)",
              }}
            />
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "32px 40px",
              background: "linear-gradient(to top, rgba(8,12,26,0.95) 0%, transparent 100%)",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "8px" }}>
                MISSION CONTROL — FIRST LAUNCH WINDOW
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--white)" }}>
                VESPA CAPTURE MISSION — Q4 2026
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "110px",
            top: "0", bottom: "0",
            width: "1px",
            background: "linear-gradient(to bottom, var(--cyan), rgba(0,212,255,0.1))",
          }} />

          {milestones.map((m, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
              display: "flex",
              gap: "40px",
              marginBottom: i < milestones.length - 1 ? "48px" : "0",
              alignItems: "flex-start",
            }}>
              {/* Year */}
              <div style={{
                width: "80px",
                flexShrink: 0,
                textAlign: "right",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: m.color,
                  lineHeight: 1,
                }}>{m.year}</div>
              </div>

              {/* Dot */}
              <div style={{ position: "relative", flexShrink: 0, paddingTop: "4px" }}>
                <div className="timeline-dot" style={{
                  width: "20px", height: "20px",
                  borderRadius: "50%",
                  background: m.color,
                  border: "3px solid var(--deep)",
                  boxShadow: `0 0 16px ${m.color}`,
                  position: "relative",
                  zIndex: 2,
                }} />
              </div>

              {/* Content */}
              <div className="panel-card hover-glow" style={{ flex: 1, padding: "32px 36px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <span className="mono-data" style={{ fontSize: "10px", color: m.color, letterSpacing: "0.2em", marginRight: "16px" }}>
                      {m.tag}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    padding: "4px 10px",
                    border: `1px solid ${m.color}`,
                    color: m.color,
                    letterSpacing: "0.15em",
                  }}>{m.status}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}>{m.title}</h3>
                <p style={{
                  fontFamily: "var(--font-light)", fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "rgba(240,244,255,0.6)",
                  lineHeight: 1.8,
                }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
