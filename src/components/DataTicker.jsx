const DataTicker = () => {
  const items = [
    "TRACKED OBJECTS IN ORBIT: 36,500+ (ESA 2025)",
    "ACTIVE DEBRIS REMOVAL MARKET: $671M → $3.5B BY 2035",
    "SUB-CM FRAGMENTS: 1,000,000+",
    "DEBRIS ECONOMIC RISK (10YR): $42.3 BILLION",
    "ADR MARKET CAGR: 17.9% (MRFR 2025)",
    "DEBRIS MONITORING+REMOVAL: $1.12B → $3.2B BY 2032",
    "LEO DEBRIS ≥10CM: 54,000 OBJECTS",
    "COMMERCIAL ADR MISSIONS COMPLETED: 0 (FIRST MOVER ADVANTAGE)",
    "WPT MARKET: $16.4B → $105B BY 2035",
    "SBSP MARKET CAGR: 17.1% (360 RESEARCH)",
    "COMPETITOR FUNDING: ASTROSCALE $383M, D-ORBIT $166M",
    "ESA ADR CONTRACT BENCHMARK: €86M",
  ];
  const full = [...items, ...items];

  return (
    <div style={{
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      height: "40px",
      background: "rgba(0,212,255,0.06)",
      borderTop: "1px solid var(--border)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}>
      <div className="ticker-track" style={{
        gap: "0",
        animationDuration: "90s",
      }}>
        {full.map((item, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: item.includes("FIRST MOVER") ? "var(--gold)" : "var(--cyan)",
            padding: "0 40px",
            letterSpacing: "0.12em",
            borderRight: "1px solid var(--border)",
            whiteSpace: "nowrap",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DataTicker;
