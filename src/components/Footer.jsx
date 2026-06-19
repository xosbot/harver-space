const Footer = () => {
  const linkCol = (title, links) => (
    <div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        {title}
      </div>
      {links.map((link, j) => (
        <a
          key={j}
          href="#"
          style={{
            display: "block",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 400,
            color: "var(--muted-dim)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "10px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--muted-dim)")}
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
        background: "var(--black)",
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
                  border: "1.5px solid var(--white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "10px", height: "10px", background: "var(--white)" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                HARVER SPACE
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--muted-dim)",
                lineHeight: 1.7,
                fontWeight: 400,
                marginBottom: "24px",
              }}
            >
              Orbital stewardship, debris removal, and wireless power beaming.
              Building the grid above the grid.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                SECTOR 62, NOIDA, UP 201301, INDIA
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                CONTACT@HARVERSPACE.COM
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                +91 120 456 7890
              </div>
            </div>
          </div>

          {/* 4-Column Links */}
          {linkCol("COMPANY", ["About HSI", "Roadmap", "Market", "Aashrayam", "Careers"])}
          {linkCol("TECHNOLOGY", ["Debris Removal", "Power Beaming", "ONE THING OS", "SV-1 Vessel"])}
          {linkCol("RESOURCES", ["Medium Dispatch", "Press Kit", "Newsletter", "Partner With Us", "Contact"])}
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
            borderBottom: "1px solid var(--border)",
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
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
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
          {["ISO 27001", "SOC 2 TYPE II", "GDPR COMPLIANT"].map((badge, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                fontWeight: 400,
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted-dim)",
              letterSpacing: "0.1em",
            }}
          >
            © 2026 HARVER SPACE INDUSTRIES — ALL RIGHTS RESERVED
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--success)",
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
