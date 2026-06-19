const InvestorSection = () => {
  const metrics = [
    { label: "Valuation", value: "$120M", sub: "Series A Round" },
    { label: "Total Funding", value: "$45M", sub: "Raised to Date" },
    { label: "ARR (Projected)", value: "$8.2M", sub: "FY2027 Target" },
    { label: "Team Size", value: "84", sub: "Across 3 Offices" },
    { label: "Patents Filed", value: "12", sub: "BTL + Capture Tech" },
    { label: "LOIs Signed", value: "7", sub: "Government + Commercial" },
  ];

  return (
    <section style={{
      padding: "120px 40px",
      background: "var(--black)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "2px",
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            INVESTOR RELATIONS
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            lineHeight: 1.1,
            color: "var(--white)",
            margin: "0 0 16px 0",
          }}>
            THE INVESTMENT<br />
            OPPORTUNITY
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.7,
            margin: "0 0 64px 0",
          }}>
            HSI is positioned at the intersection of three structurally mandated markets:
            debris removal, orbital servicing, and wireless power. We are raising a $45M
            Series A to fund Mission Bravo and the SV-1 constellation build.
          </p>
        </div>

        {/* Metrics Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1px",
          marginBottom: "48px",
          background: "var(--border)",
        }}>
          {metrics.map((m, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{
              padding: "32px 24px",
              textAlign: "center",
              background: "var(--black)",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--white)",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}>{m.value}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 400,
                color: "var(--muted)",
                marginBottom: "4px",
              }}>{m.label}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 400,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          height: "1px",
          background: "var(--border)",
          marginBottom: "40px",
        }} />
        <div className="reveal reveal-delay-4" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "2px",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              DOWNLOAD INVESTOR BRIEF
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--muted)",
            }}>
              24-page overview including financials, mission roadmap, and competitive analysis.
            </div>
          </div>
          <button style={{
            background: "transparent",
            color: "var(--white)",
            border: "1px solid var(--white)",
            padding: "18px 24px",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.17px",
            textTransform: "uppercase",
            borderRadius: "32px",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--white)";
              e.target.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "var(--white)";
            }}
          >
            REQUEST BRIEF →
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
