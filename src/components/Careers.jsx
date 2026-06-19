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
      background: "var(--black)",
      position: "relative",
    }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">CAREERS</div>
        <h2
          className="display-title"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 0.95,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          JOIN THE<br />
          <span className="cyan-text">ORBITAL TEAM</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "1.05rem",
            color: "var(--muted)",
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
            className="panel-card reveal"
            style={{
              padding: "28px 36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
          >
            <div style={{ flex: "1 1 400px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  fontWeight: 400,
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
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
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
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {pos.type}
                </span>
              </div>
            </div>

            <button
              style={{
                padding: "10px 28px",
                fontSize: "11px",
                letterSpacing: "0.15em",
                whiteSpace: "nowrap",
                border: "1px solid var(--white)",
                background: "transparent",
                borderRadius: "32px",
                color: "var(--white)",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
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
