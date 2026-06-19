const missions = [
  {
    name: "MISSION ALPHA",
    target: "Debris Characterization",
    status: "PLANNING",
    statusColor: "var(--gold)",
    orbit: "SSO 800km",
    mass: "2,400 kg",
    vehicle: "SV-1 Proto",
    progress: 15,
  },
  {
    name: "MISSION BRAVO",
    target: "Active Removal Demo",
    status: "FUNDING",
    statusColor: "var(--cyan)",
    orbit: "LEO 600km",
    mass: "3,100 kg",
    vehicle: "SV-1 Mk.III",
    progress: 8,
  },
  {
    name: "MISSION CHARLIE",
    target: "Power Beaming Test",
    status: "R&D",
    statusColor: "var(--success)",
    orbit: "GTO",
    mass: "180 kg",
    vehicle: "T1SatBravo",
    progress: 35,
  },
];

const MissionStatus = () => (
  <section style={{
    padding: "120px 40px",
    background: "var(--black)",
  }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "64px" }}>
        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "16px",
        }}>MISSION CONTROL</div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--white)",
          margin: 0,
        }}>ACTIVE MISSIONS</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {missions.map((m, i) => (
          <div key={i} style={{
            padding: "32px 40px",
            display: "grid",
            gridTemplateColumns: "200px 1fr 160px 120px",
            gap: "32px",
            alignItems: "center",
            border: "1px solid var(--border)",
            background: "transparent",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: m.statusColor,
                marginBottom: "6px",
              }}>{m.name}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 400,
                color: "var(--white)",
              }}>{m.target}</div>
            </div>

            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  MISSION PROGRESS
                </span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: m.statusColor,
                }}>
                  {m.progress}%
                </span>
              </div>
              <div style={{
                height: "2px",
                background: "var(--border)",
                overflow: "hidden",
              }}>
                <div style={{
                  width: `${m.progress}%`,
                  height: "100%",
                  background: m.statusColor,
                }} />
              </div>
              <div style={{
                display: "flex",
                gap: "16px",
                marginTop: "10px",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  ORBIT: {m.orbit}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  MASS: {m.mass}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  VEHICLE: {m.vehicle}
                </span>
              </div>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
            }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: m.statusColor,
              }} />
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: m.statusColor,
              }}>{m.status}</span>
            </div>

            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "right",
            }}>
              UPDATED: 2026-06-15
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionStatus;
