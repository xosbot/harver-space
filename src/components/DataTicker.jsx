const DataTicker = () => {
  const items = [
    "TRACKED OBJECTS IN ORBIT: 35,000+",
    "PROJECTED MARKET BY 2035: $15.3 BILLION",
    "SUB-CM FRAGMENTS: 140 MILLION+",
    "ECONOMIC RISK NEXT DECADE: $42.3 BILLION",
    "ACTIVE REMOVAL CAGR: 25%",
    "ESA ADR CONTRACT BENCHMARK: €86M",
    "LEO DEBRIS ≥10CM: 54,000 OBJECTS",
    "COMMERCIAL ADR MISSIONS COMPLETED: 0",
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
      <div style={{
        display: "flex",
        gap: "0",
        whiteSpace: "nowrap",
        animation: "ticker 60s linear infinite",
        willChange: "transform",
      }}>
        {full.map((item, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--cyan)",
            padding: "0 40px",
            letterSpacing: "0.12em",
            borderRight: "1px solid var(--border)",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DataTicker;
