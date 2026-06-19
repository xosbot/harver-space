const partners = [
  { name: "JAXA", region: "Japan Aerospace Exploration Agency", color: "#003399" },
  { name: "ESA", region: "European Space Agency", color: "#003D7C" },
  { name: "FAA/AST", region: "Federal Aviation Administration", color: "#C4122F" },
  { name: "UAE-SA", region: "UAE Space Agency", color: "#FFD700" },
  { name: "UKSA", region: "UK Space Agency", color: "#1E3A5F" },
  { name: "UNOOSA", region: "UN Office for Outer Space Affairs", color: "#4B92DB" },
];

const PartnerLogos = () => {
  const repeated = [...partners, ...partners];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label">PARTNERS</div>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              lineHeight: 0.95,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            AGENCIES & REGULATORS WE WORK WITH
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}
      >
        {repeated.map((p, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 auto",
              width: "140px",
              height: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              border: "1px solid var(--border)",
              background: "transparent",
              filter: "grayscale(1)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--white)";
              e.currentTarget.style.filter = "grayscale(0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.filter = "grayscale(1)";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              {p.name}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "6px",
                color: "var(--muted)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {p.region}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PartnerLogos;
