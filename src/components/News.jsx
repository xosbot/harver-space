const news = [
  {
    date: "2026-06-15",
    title: "HSI Completes Phase III Debris Removal Initiative Launch",
    category: "MISSION",
  },
  {
    date: "2026-05-20",
    title: "BTL Framework Signed with UAE Space Agency",
    category: "LEGAL",
  },
  {
    date: "2026-04-10",
    title: "Harver-Claw Mark III Passes Thermal Vacuum Testing",
    category: "TECHNOLOGY",
  },
  {
    date: "2026-03-05",
    title: "HSI Raises $45M Series A for Orbital Operations",
    category: "FUNDING",
  },
];

const categoryColors = {
  MISSION: "var(--cyan)",
  LEGAL: "var(--gold)",
  TECHNOLOGY: "#7b61ff",
  FUNDING: "var(--success)",
};

const News = () => {
  const formatDate = (d) => {
    const dt = new Date(d);
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section
      id="news"
      style={{
        padding: "120px 40px",
        background: "var(--black)",
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
          <div className="section-label">NEWS</div>
          <h2
            className="display-title"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}
          >
            LATEST FROM<br />
            <span className="cyan-text">HARVER SPACE</span>
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
            Press releases, mission updates, and regulatory milestones from
            the Harver Space Industries team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {news.map((item, i) => (
            <div
              key={i}
              className="panel-card reveal hover-glow"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="corner-bracket tl" style={{ borderColor: categoryColors[item.category] || "var(--cyan)" }} />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="mono-data"
                    style={{
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {formatDate(item.date)}
                  </div>
                  <div
                    className="mono-data"
                    style={{
                      fontSize: "9px",
                      color: categoryColors[item.category] || "var(--cyan)",
                      letterSpacing: "0.15em",
                      padding: "3px 10px",
                      border: `1px solid ${categoryColors[item.category] || "var(--cyan)"}`,
                      background: "rgba(0,212,255,0.04)",
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    lineHeight: 1.5,
                    letterSpacing: "0.02em",
                    marginBottom: "24px",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <a
                href="#"
                className="nav-link"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                READ MORE →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
