const missions = [
  {
    name: "MISSION ALPHA",
    title: "Debris Characterization",
    status: "PLANNING",
    orbit: "SSO 800km",
    target: "Defunct ESA Relay Satellite",
    date: "Q3 2026",
    image: "/images/satellite.jpg",
    description:
      "First commercial rendezvous and proximity operations (RPO) mission. Full multi-spectral characterization of uncooperative debris target using LiDAR and optical sensors.",
  },
  {
    name: "MISSION BRAVO",
    title: "Active Removal Demo",
    status: "FUNDING",
    orbit: "LEO 600km",
    target: "Derelict Chinese Rocket Body",
    date: "Q1 2027",
    image: "/images/rocket-launch.jpg",
    description:
      "Full capture and controlled deorbit demonstration. Harver-Claw Mark III captures 2,400kg debris object and executes guided reentry over Pacific Ocean.",
  },
  {
    name: "MISSION CHARLIE",
    title: "Power Beaming Test",
    status: "R&D",
    orbit: "GEO Transfer",
    target: "T1SatBravo Pathfinder",
    date: "Q4 2027",
    image: "/images/earth-night.jpg",
    description:
      "First orbital wireless power transmission test. T1SatBravo beacons 2.4kW to ground-based rectenna array. Validates ONE THING OS device-layer connectivity.",
  },
  {
    name: "MISSION DELTA",
    title: "Constellation Launch",
    status: "2029",
    orbit: "SSO 800km",
    target: "SV-1 Units 1–3",
    date: "2029",
    image: "/images/space-station.jpg",
    description:
      "First three SV-1 autonomous servicing vessels deployed. Begin continuous debris removal campaigns at 800km Sun-Synchronous orbit — the most congested orbital band.",
  },
];

const MissionGallery = () => {
  return (
    <section
      id="missions"
      style={{
        padding: "120px 0 80px",
        background: "var(--black, #000000)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginBottom: "56px" }}>
          <div style={{
            fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.17px",
            textTransform: "uppercase",
            color: "var(--white, #ffffff)",
            marginBottom: "16px",
            lineHeight: 2,
          }}>
            FLIGHT MANIFEST
          </div>
          <h2 style={{
            fontFamily: "var(--font-display, 'D-DIN-Bold', 'Arial Narrow', Arial, sans-serif)",
            fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--white, #ffffff)",
            marginBottom: "16px",
            lineHeight: 1.1,
            letterSpacing: "0.96px",
            textTransform: "uppercase",
          }}>
            PLANNED MISSIONS
          </h2>
          <p style={{
            fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
            fontSize: "16px",
            fontWeight: 400,
            color: "var(--muted, #5a5a5f)",
            maxWidth: "500px",
            lineHeight: 1.7,
            letterSpacing: "0.32px",
          }}>
            Four missions. Four orbital regimes. One operating system above the atmosphere.
          </p>
        </div>

        {/* Scrollable cards row */}
        <div style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          overflowY: "hidden",
          padding: "0 40px 24px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
        }}>
          {missions.map((m, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                flex: "0 0 340px",
                scrollSnapAlign: "start",
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                background: "transparent",
                border: "1px solid var(--border, #3a3a3f)",
              }}
            >
              {/* Image */}
              <div style={{
                position: "relative",
                height: "200px",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <img
                  src={m.image}
                  alt={m.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Status badge — ghost pill */}
                <div style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.17px",
                  textTransform: "uppercase",
                  color: "var(--white, #ffffff)",
                  border: "1px solid var(--border, #3a3a3f)",
                  background: "var(--black, #000000)",
                  padding: "4px 12px",
                  borderRadius: "32px",
                  lineHeight: 1,
                }}>
                  {m.status}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Mission name */}
                <div style={{
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.17px",
                  textTransform: "uppercase",
                  color: "var(--white, #ffffff)",
                  marginBottom: "8px",
                  lineHeight: 2,
                }}>
                  {m.name}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display, 'D-DIN-Bold', 'Arial Narrow', Arial, sans-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white, #ffffff)",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                }}>
                  {m.title}
                </h3>

                {/* Orbit + Target */}
                <div style={{
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.17px",
                  textTransform: "uppercase",
                  color: "var(--white, #ffffff)",
                  marginBottom: "4px",
                  lineHeight: 2,
                }}>
                  {m.orbit}
                </div>
                <div style={{
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "var(--muted, #5a5a5f)",
                  marginBottom: "16px",
                  lineHeight: 2,
                }}>
                  TARGET: {m.target}
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "var(--muted, #5a5a5f)",
                  lineHeight: 1.7,
                  letterSpacing: "0.32px",
                  flex: 1,
                  marginBottom: "20px",
                }}>
                  {m.description}
                </p>

                {/* Date */}
                <div style={{
                  fontFamily: "var(--font-body, D-DIN, Arial, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.17px",
                  textTransform: "uppercase",
                  color: "var(--muted, #5a5a5f)",
                  textAlign: "right",
                  lineHeight: 2,
                }}>
                  {m.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionGallery;
