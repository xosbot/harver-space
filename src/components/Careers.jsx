const positions = [
  {
    title: "Senior Orbital Mechanics Engineer",
    location: "Delhi NCR, India",
    type: "Full-time",
  },
  {
    title: "RPO Mission Planner",
    location: "Remote / Delhi NCR",
    type: "Full-time",
  },
  {
    title: "Legal Counsel — Space Law",
    location: "Delhi NCR, India",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer — Attitude Determination",
    location: "Remote",
    type: "Full-time",
  },
];

const Careers = () => (
  <section
    id="careers"
    style={{
      padding: "120px 40px",
      background: "var(--deep)",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        opacity: 0.4,
      }}
    />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">CAREERS</div>
        <h2
          className="display-title"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}
        >
          JOIN THE<br />
          <span className="cyan-text">ORBITAL TEAM</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-light)",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "64px",
          }}
        >
          We are building the team that will define orbital stewardship for
          the next decade. Open positions below.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {positions.map((pos, i) => (
          <div
            key={i}
            className="panel-card reveal hover-glow"
            style={{
              padding: "28px 36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div className="corner-bracket tl" style={{ borderColor: "var(--cyan)" }} />

            <div style={{ flex: "1 1 400px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  letterSpacing: "0.03em",
                  marginBottom: "8px",
                }}
              >
                {pos.title}
              </h3>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <span
                  className="mono-data"
                  style={{
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  📍 {pos.location}
                </span>
                <span
                  className="mono-data"
                  style={{
                    fontSize: "10px",
                    color: "var(--cyan)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {pos.type}
                </span>
              </div>
            </div>

            <button
              className="btn-primary"
              style={{
                padding: "10px 28px",
                fontSize: "11px",
                letterSpacing: "0.15em",
                whiteSpace: "nowrap",
              }}
            >
              APPLY →
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Careers;
