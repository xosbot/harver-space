import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import DebrisVisualization from "./DebrisVisualization";

const Problem = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = () => "reveal " + (active ? "active" : "");

  const orbitData = [
    {
      band: "LEO 200–600km",
      pct: 78,
      grad: "linear-gradient(90deg, var(--aurora), rgba(125,211,252,0.25))",
      label: "78%",
      color: "var(--stellar)",
    },
    {
      band: "SSO 600–1000km",
      pct: 95,
      grad: "linear-gradient(90deg, var(--danger), rgba(252,165,165,0.25))",
      label: "95% (CRITICAL)",
      color: "var(--danger)",
    },
    {
      band: "MEO 1000–20000km",
      pct: 28,
      grad: "linear-gradient(90deg, var(--gold), rgba(212,175,55,0.25))",
      label: "28%",
      color: "var(--stellar)",
    },
    {
      band: "GEO ~35,786km",
      pct: 42,
      grad: "linear-gradient(90deg, var(--orbital-purple), rgba(192,132,252,0.25))",
      label: "42%",
      color: "var(--stellar)",
    },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="aurora-bg"
      style={{
        background: "var(--void)",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className={revealClass()}
          style={{ transitionDelay: "0s", marginBottom: "80px" }}
        >
          <h2
            className="text-gradient"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.95,
              letterSpacing: "1.2px",
              marginBottom: "24px",
            }}
          >
            The Orbital Crisis
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--silver)",
              maxWidth: "640px",
              lineHeight: 1.7,
              letterSpacing: "0.32px",
            }}
          >
            Every defunct satellite and rocket stage remains the sovereign
            property of its launching nation — permanently. No maritime salvage
            doctrine applies in space. The result: a global commons becoming a
            debris minefield with no legal path to cleanup.
          </p>
        </div>

        {/* Debris Visualization */}
        <div className={revealClass()} style={{ marginBottom: "80px", transitionDelay: "0.1s" }}>
          <DebrisVisualization />
        </div>

        {/* Stat Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "100px",
          }}
        >
          {[
            {
              target: 36500,
              suffix: "+",
              label: "Tracked Objects",
              sub: "ESA Space Environment Report 2025",
              color: "var(--aurora)",
              delay: "0s",
            },
            {
              target: 42,
              prefix: "$",
              suffix: "B",
              label: "Decade Risk",
              sub: "World Economic Forum 2026",
              color: "var(--danger)",
              delay: "0.15s",
            },
            {
              target: 0,
              label: "Commercial Cross-Border Removals",
              sub: "No licensed removal operations to date",
              color: "var(--gold)",
              delay: "0.3s",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={"glass " + revealClass()}
              style={{
                padding: "48px 40px",
                borderRadius: "16px",
                transitionDelay: stat.delay,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: stat.color,
                  marginBottom: "12px",
                  lineHeight: 1,
                  letterSpacing: "0.05em",
                }}
              >
                <Counter
                  target={stat.target}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--stellar)",
                  marginBottom: "8px",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "var(--silver-dim)",
                  letterSpacing: "0.1em",
                  lineHeight: 1.5,
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Infographic */}
        <div
          className={"glass " + revealClass()}
          style={{
            padding: "48px 40px",
            borderRadius: "16px",
            transitionDelay: "0.15s",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 400,
              color: "var(--silver)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "40px",
              lineHeight: 2,
            }}
          >
            Debris Density by Orbit
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {orbitData.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "180px",
                    flexShrink: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "var(--silver)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {row.band}
                </div>
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    height: "32px",
                    background: "var(--deep-space)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid var(--glass-border)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: active ? row.pct + "%" : "0%",
                      background: row.grad,
                      borderRadius: "4px",
                      transition:
                        "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: (0.3 + i * 0.1) + "s",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "120px",
                    flexShrink: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: row.color,
                    textAlign: "right",
                    letterSpacing: "0.1em",
                  }}
                >
                  {row.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
