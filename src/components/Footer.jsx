const Footer = () => {
  const linkCol = (title, links) => (
    <div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--silver)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "20px",
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
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--silver-dim)",
            letterSpacing: "0.02em",
            marginBottom: "12px",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--stellar)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--silver-dim)")}
        >
          {link}
        </a>
      ))}
    </div>
  );

  return (
    <footer
      style={{
        padding: "80px 40px 40px",
        background: "var(--void)",
        borderTop: "1px solid var(--glass-border)",
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
            marginBottom: "60px",
          }}
        >
          {/* Logo + Tagline */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  border: "1.5px solid var(--stellar)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "var(--stellar)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--stellar)",
                }}
              >
                HARVER SPACE
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--silver)",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: "280px",
              }}
            >
              Orbital stewardship, debris removal, and wireless power beaming.
              Building the grid above the grid.
            </p>
          </div>

          {/* 4-Column Links */}
          {linkCol("Company", ["About", "Roadmap", "Market", "Careers"])}
          {linkCol("Technology", ["Debris Removal", "Power Beaming", "ONE THING OS"])}
          {linkCol("Resources", ["Medium Dispatch", "Press Kit", "Newsletter"])}
          {linkCol("Legal", ["Privacy", "Terms", "BTL Framework"])}
        </div>

        {/* Divider */}
        <div
          className="divider"
          style={{ marginBottom: "32px" }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--silver-dim)",
              letterSpacing: "0.1em",
            }}
          >
            © 2026 HARVER SPACE INDUSTRIES — ALL RIGHTS RESERVED
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
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
                  color: "var(--silver-dim)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--stellar)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--silver-dim)")}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
