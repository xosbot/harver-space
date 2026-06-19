const Footer = () => (
  <footer style={{
    padding: "60px 40px 40px",
    background: "var(--deep)",
    borderTop: "1px solid var(--border)",
    position: "relative",
  }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Top Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
        {/* Logo + Tagline */}
        <div style={{ maxWidth: "320px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "28px", height: "28px", border: "1.5px solid var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "10px", height: "10px", background: "var(--cyan)" }} />
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em" }}>HSI</span>
          </div>
          <p style={{
            fontFamily: "var(--font-light)",
            fontSize: "0.9rem",
            color: "rgba(240,244,255,0.4)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Harver Space Industries — orbital stewardship, debris removal,
            and wireless power beaming. Building the grid above the grid.
          </p>
        </div>

        {/* Link Columns */}
        {[
          {
            title: "OPERATIONS",
            links: ["Debris Removal", "Power Beaming", "ONE THING OS", "SV-1 Vessel"],
          },
          {
            title: "COMPANY",
            links: ["About HSI", "Roadmap", "Market", "Aashrayam"],
          },
          {
            title: "CONNECT",
            links: ["Contact", "Medium Dispatch", "Partner With Us", "Press Kit"],
          },
        ].map((col, i) => (
          <div key={i}>
            <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "16px" }}>
              {col.title}
            </div>
            {col.links.map((link, j) => (
              <div key={j} style={{
                fontFamily: "var(--font-light)",
                fontSize: "0.9rem",
                color: "rgba(240,244,255,0.4)",
                marginBottom: "10px",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--white)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(240,244,255,0.4)"}
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div style={{
        borderTop: "1px solid rgba(0,212,255,0.08)",
        paddingTop: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          ORBITAL STEWARDSHIP INITIATIVE — T25 — ALL RIGHTS RESERVED
        </div>

        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service", "Legal Framework"].map((item, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.color = "var(--cyan)"}
            onMouseLeave={(e) => e.target.style.color = "var(--muted)"}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.1em", animation: "blink 3s ease-in-out infinite" }}>
          ● SYSTEM NOMINAL
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
