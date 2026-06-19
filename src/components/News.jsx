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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">NEWS</div>
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
            LATEST FROM<br />
            <span className="cyan-text">HARVER SPACE</span>
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
              className="panel-card reveal"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid var(--border)",
                background: "transparent",
              }}
            >
              <div>
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
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
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
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: "9px",
                      color: "var(--muted)",
                      letterSpacing: "0.15em",
                      padding: "3px 10px",
                      border: "1px solid var(--border)",
                      background: "transparent",
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    fontWeight: 400,
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
                  color: "var(--white)",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  border: "1px solid var(--white)",
                  background: "transparent",
                  borderRadius: "32px",
                  padding: "8px 20px",
                  display: "inline-block",
                  width: "fit-content",
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
