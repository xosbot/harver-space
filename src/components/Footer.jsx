const Footer = () => {
  const linkCol = (title, links) => (
    <div>
      <div
        className="mono-data"
        style={{
          fontSize: "10px",
          color: "var(--cyan)",
          letterSpacing: "0.2em",
          marginBottom: "16px",
        }}
      >
        {title}
      </div>
      {links.map((link, j) => (
        <a
          key={j}
          href="#"
          className="nav-link"
          style={{
            display: "block",
            fontFamily: "var(--font-light)",
            fontSize: "0.9rem",
            color: "rgba(240,244,255,0.4)",
            marginBottom: "10px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(240,244,255,0.4)")}
        >
          {link}
        </a>
      ))}
    </div>
  );

  return (
    <footer
      style={{
        padding: "60px 40px 40px",
        background: "var(--deep)",
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Logo + Tagline + Contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  border: "1.5px solid var(--cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "10px", height: "10px", background: "var(--cyan)" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                }}
              >
                HARVER SPACE
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-light)",
                fontSize: "0.85rem",
                color: "rgba(240,244,255,0.4)",
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: "24px",
              }}
            >
              Orbital stewardship, debris removal, and wireless power beaming.
              Building the grid above the grid.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                📍 Sector 62, Noida, UP 201301, India
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                ✉ contact@harverspace.com
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                ☎ +91 120 456 7890
              </div>
            </div>
          </div>

          {/* 4-Column Links */}
          {linkCol("COMPANY", ["About HSI", "Roadmap", "Market", "Aashrayam", "Careers"])}
          {linkCol("TECHNOLOGY", ["Debris Removal", "Power Beaming", "ONE THING OS", "SV-1 Vessel"])}
          {linkCol("RESOURCES", ["Medium Dispatch", "Press Kit", "Partner With Us", "Contact"])}
          {linkCol("LEGAL", ["Privacy Policy", "Terms of Service", "Legal Framework", "BTL Framework"])}
        </div>

        {/* Social Links Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "32px",
            paddingBottom: "32px",
            borderBottom: "1px solid rgba(0,212,255,0.08)",
          }}
        >
          {[
            { name: "X", url: "https://x.com/HarverSpace" },
            { name: "LinkedIn", url: "https://linkedin.com/company/harver-space" },
            { name: "YouTube", url: "https://youtube.com/@HarverSpace" },
            { name: "Medium", url: "https://medium.com/hsi-dispatch" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {["ISO 27001", "SOC 2 Type II", "GDPR Compliant"].map((badge, i) => (
            <div
              key={i}
              className="panel-card"
              style={{
                padding: "6px 16px",
                fontSize: "9px",
                fontFamily: "var(--font-mono)",
                color: "var(--cyan)",
                letterSpacing: "0.15em",
                border: "1px solid rgba(0,212,255,0.15)",
                background: "rgba(0,212,255,0.03)",
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: "1px solid rgba(0,212,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            className="mono-data"
            style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}
          >
            © 2026 HARVER SPACE INDUSTRIES — ALL RIGHTS RESERVED
          </div>

          <div
            className="mono-data"
            style={{
              fontSize: "10px",
              color: "var(--cyan)",
              letterSpacing: "0.1em",
              animation: "blink 3s ease-in-out infinite",
            }}
          >
            ● SYSTEM NOMINAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
