const partners = [
  { name: "JAXA", country: "Japan" },
  { name: "ESA", country: "Europe" },
  { name: "FAA/AST", country: "USA" },
  { name: "UAE Space Agency", country: "UAE" },
  { name: "UK Space Agency", country: "UK" },
  { name: "UNOOSA", country: "United Nations" },
];

const PartnerLogos = () => {
  const repeated = [...partners, ...partners];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--deep)",
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
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
          >
            AGENCIES & REGULATORS WE WORK WITH
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "64px",
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}
      >
        {repeated.map((p, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              minWidth: "160px",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".partner-logo").style.filter = "grayscale(0)";
              e.currentTarget.querySelector(".partner-logo").style.color = "var(--cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".partner-logo").style.filter = "grayscale(1)";
              e.currentTarget.querySelector(".partner-logo").style.color = "rgba(240,244,255,0.3)";
            }}
          >
            <div
              className="partner-logo"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(240,244,255,0.3)",
                filter: "grayscale(1)",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
              }}
            >
              {p.name}
            </div>
            <div
              className="mono-data"
              style={{
                fontSize: "9px",
                color: "var(--muted)",
                letterSpacing: "0.2em",
              }}
            >
              {p.country}
            </div>
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
